from flask import Blueprint, render_template
from flask import current_app as app
import pymongo
from flask import Flask, request, jsonify, render_template
from bson import Binary, Code
from bson.json_util import dumps
from flask import Response 
from bson import json_util
from apscheduler.schedulers.background import BackgroundScheduler
import json

client = pymongo.MongoClient(
    "mongodb+srv://yannik:techtalents2020@connext-en64e.mongodb.net/test?retryWrites=true&w=majority")

def check_reservation(): # jwt.decode(token)["user_id"]
    """ Function which checks the reservations for user_id. """
    # TODO: @Aron kannst du hier noch die Token User ID reinmachen?
    if client.table.reservation.count_documents({ "user_id": "58d96f87-c364-4582-8e54-76b099a96ccd" }, limit = 1):
        print("user_id was requested for a reservation!")
        result = client.table.reservation.find( {"user_id": "58d96f87-c364-4582-8e54-76b099a96ccd"} )
        results = []
        for x in result:
            results.append(x)
        data=[]
        for text in results:
            item = {"reservation_text": text["reservation_text"]}
            data.append(item)
        return json.dumps(data)
    else:
        return "No reservations were found"


sched = BackgroundScheduler(daemon=True)
sched.add_job(check_reservation,'interval',seconds=60)
sched.start()

# Set up a Blueprint
reservation_bp = Blueprint('reservation_bp', __name__,
                          template_folder='templates',
                          static_folder='static')

@reservation_bp.route("/api/reservation/", methods=["POST"])
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
            #'reservation_id' : str(uuid.uuid4()),
            "journey_id": data["journey_id"],
            "reservation_requested_seats": data["reservation_requested_seats"],
            "journey_empty_spaces": results[0]["journey_empty_spaces"],
            "reservation_text": data["reservation_text"],
            "user_id": data["user_id"],
            "journey_user_id": results[0]["user_id"],
            #"reservation_status" : "pending"
            }
    if reservation["reservation_requested_seats"] > reservation["journey_empty_spaces"]:
        return "Unfortunately your requested journey does not have the requested seats free"
    else:
        insert_reservation = collection.insert_one(reservation)
        return "Successfully inserted with ObjectID: " + str(insert_reservation.inserted_id)
