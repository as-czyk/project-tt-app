from flask import request, jsonify, Blueprint
# from apscheduler.schedulers.background import BackgroundScheduler
import uuid

# For Deployment
from server import settings

# For Development
# from settings import *

# get collection
collection = get_collection("reservation")
jounreyCollection = get_collection('journey')


# Set up a Blueprint
reservation_bp = Blueprint('reservation_bp', __name__,
                           template_folder='templates',
                           static_folder='static')


@reservation_bp.route("/api/reservation/messages", methods=["GET"])
def check_messages():
    userID = request.args.get("id")
    if request.args.get('status') != None:
        status = request.args.get('status')
        result = collection.find({'journey_user_id': userID, 'reservation_status': status})
        results = []
        for x in result:
            results.append(x)
        if not results:
            return jsonify({'msg': 'There are currently no reservation with the status'}), 404
        data = []
        for text in results:
            item = {"reservation_text": text["reservation_text"],
                    "reservation_requested_seats": text["reservation_requested_seats"],
                    "user_id": text['user_id'],
                    "reservation_id": text['reservation_id'],
                    "status": text['reservation_status']}
            data.append(item)
        return jsonify(data)
    else:
        if collection.count_documents({"journey_user_id": userID}, limit=1):
            result = collection.find({"journey_user_id": userID})
            results = []
            for x in result:
                results.append(x)
            data = []
            for text in results:
                item = {"reservation_text": text["reservation_text"],
                        "reservation_requested_seats": text["reservation_requested_seats"],
                        "user_id": text['user_id'],
                        "reservation_id": text['reservation_id'],
                        "status": text['reservation_status']}
                data.append(item)
            return jsonify(data)
        else:
            return jsonify({'msg': "No reservations were found"}), 404

@reservation_bp.route("/api/reservation/requests", methods=["GET"])
def check_requests():
    userID = request.args.get("id")
    if request.args.get('status') != None:
        status = request.args.get('status')
        result = collection.find({'user_id': userID, 'reservation_status': status})
        results = []
        for x in result:
            results.append(x)
        if not results:
            return jsonify({'msg': 'There are currently no reservation with the status'}), 404
        data = []
        for text in results:
            item = {"reservation_text": text["reservation_text"],
                    "reservation_requested_seats": text["reservation_requested_seats"],
                    "user_id": text['user_id'],
                    "reservation_id": text['reservation_id'],
                    "status": text['reservation_status']}
            data.append(item)
        return jsonify(data)
    else:
        if collection.count_documents({"user_id": userID}, limit=1):
            result = collection.find({"user_id": userID})
            results = []
            for x in result:
                results.append(x)
            data = []
            for text in results:
                item = {"reservation_text": text["reservation_text"],
                        "reservation_requested_seats": text["reservation_requested_seats"],
                        "user_id": text['user_id'],
                        "reservation_id": text['reservation_id'],
                        "status": text['reservation_status']}
                data.append(item)
            return jsonify(data)
        else:
            return jsonify({'msg': "No reservations were found"}), 404


# sched = BackgroundScheduler(daemon=True)
# sched.add_job(check_reservation,'interval',seconds=60)
# sched.start()


@reservation_bp.route("/api/reservation/status",
                      methods=["GET", "PATCH"])
def check_reservation_status():
    if request.method == 'GET':
        data = request.get_json()
        if collection.count_documents({"reservation_id": data["reservation_id"]}, limit=1):
            result = collection.find({"reservation_id": data["reservation_id"]})
            results = []
            for x in result:
                results.append(x)
            data = []
            for text in results:
                item = {"reservation_status": text["reservation_status"]}
                data.append(item)
            return jsonify(data)
        else:
            return jsonify({'msg': "No reservations were found"})
    if request.method == 'PATCH':
        data = request.get_json()
        collection.update_one({"reservation_id": data["reservation_id"]},
                                            {"$set":
                                                {"reservation_status": data["reservation_status"]}})
        return "Successfully status updated"


@reservation_bp.route("/api/reservation", methods=["POST"])
def make_reservation():
    data = request.get_json()
    result = jounreyCollection.find({'journey_id': data["journey_id"]})
    results = []
    for x in result:
        results.append(x)
    # TODO: Reservation ID
    reservation = {
            "reservation_id": str(uuid.uuid4()),
            "journey_id": data["journey_id"],
            "reservation_requested_seats": data["reservation_requested_seats"],
            "journey_empty_spaces": results[0]["journey_empty_spaces"],
            "reservation_text": data["reservation_text"],
            "user_id": data["user_id"],
            "journey_user_id": results[0]["user_id"],
            "reservation_status": "pending"
            }
    if reservation["reservation_requested_seats"] > reservation["journey_empty_spaces"]:
        return jsonify({'msg': "Unfortunately your requested journey does not have the requested seats free"})
    else:
        insert_reservation = collection.insert_one(reservation)
        return "Successfully inserted with ObjectID: " + str(insert_reservation.inserted_id)
