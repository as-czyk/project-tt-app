from flask import Blueprint, render_template
from flask import current_app as app
import pymongo
from flask import Flask, request, jsonify, render_template
from bson import Binary, Code
from bson.json_util import dumps
from flask import Response 
from bson import json_util
#from apscheduler.schedulers.background import BackgroundScheduler
import json
import uuid

client = pymongo.MongoClient(
    "mongodb+srv://yannik:techtalents2020@connext-en64e.mongodb.net/test?retryWrites=true&w=majority")

# Set up a Blueprint
reservation_bp = Blueprint('reservation_bp', __name__,
                          template_folder='templates',
                          static_folder='static')

@reservation_bp.route("/api/reservation/messages", methods = ["GET"])
def check_messages(): 
    userID = request.args.get("id")
    if client.table.reservation.count_documents({ "journey_user_id": userID }, limit = 1):
        result = client.table.reservation.find( {"journey_user_id": userID } )
        results = []
        for x in result:
            results.append(x)
        data=[]
        for text in results:
            item = {"reservation_text": text["reservation_text"],
                    "reservation_requested_seats": text["reservation_requested_seats"],
                    "user_id": text['user_id'],
                    "reservation_id": text['reservation_id']}
            data.append(item)
        return jsonify(data)
    else:
        return jsonify({'msg': "No reservations were found"})

# sched = BackgroundScheduler(daemon=True)
# sched.add_job(check_reservation,'interval',seconds=60)
# sched.start()

@reservation_bp.route("/api/reservation/status")

@reservation_bp.route("/api/reservation/status", methods=["GET", "PATCH", "DELETE"])
def check_reservation_status():
    if request.method == 'GET':
        data = request.get_json()
        if client.table.reservation.count_documents({ "reservation_id": data["reservation_id"] }, limit = 1):
            result = client.table.reservation.find( {"reservation_id": data["reservation_id"] } )
            results = []
            for x in result:
                results.append(x)
            data=[]
            for text in results:
                item = {"reservation_status": text["reservation_status"]}
                data.append(item)
            return jsonify(data)
        else:
            return jsonify({'msg': "No reservations were found"})
    if request.method == 'PATCH':
        data = request.get_json()
        client.table.reservation.update_one( {"reservation_id": data["reservation_id"] }, { "$set": {"reservation_status": "accepted"}} )
        return "Successfully accepted"
    if request.method == "DELETE":
        data = request.get_json()
        db_response = client.table.reservation.delete_one({"reservation_id": data["reservation_id"] })
        if db_response.deleted_count == 1:
            response = {'ok': True, 'message': 'record deleted'}
        else:
            response = {'ok': True, 'message': 'no record found'}
        return jsonify(response), 200

@reservation_bp.route("/api/reservation", methods=["POST"])
def make_reservation():
    data = request.get_json()
    table_journey_db = client.table.journey
    collection = client.table.reservation
    result = table_journey_db.find( {'journey_id': data["journey_id"]} )
    results = []
    for x in result:
        results.append(x)
    #TODO: Reservation ID 
    reservation = {
            "reservation_id" : str(uuid.uuid4()),
            "journey_id": data["journey_id"],
            "reservation_requested_seats": data["reservation_requested_seats"],
            "journey_empty_spaces": results[0]["journey_empty_spaces"],
            "reservation_text": data["reservation_text"],
            "user_id": data["user_id"],
            "journey_user_id": results[0]["user_id"],
            "reservation_status" : "pending"
            }
    if reservation["reservation_requested_seats"] > reservation["journey_empty_spaces"]:
        return jsonify({'msg': "Unfortunately your requested journey does not have the requested seats free"})
    else:
        insert_reservation = collection.insert_one(reservation)
        return "Successfully inserted with ObjectID: " + str(insert_reservation.inserted_id)
