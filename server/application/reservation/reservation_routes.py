from flask import request, jsonify, Blueprint
# from apscheduler.schedulers.background import BackgroundScheduler
import uuid
import json

# For Deployment
from server.settings import *
from server.models import Reservation, Journey

# For Development
#from settings import *
#from models import Reservation, Journey
#from application.send_email import send_email

# Set up a Blueprint
reservation_bp = Blueprint('reservation_bp', __name__,
                           template_folder='templates',
                           static_folder='static')


@reservation_bp.route("/api/reservation/messages", methods=["GET"])
def check_messages():
    user_id = request.args.get("id")
    if request.args.get('status') is not None:
        status = request.args.get('status')
        result = json.loads(Reservation.objects(journey_user_id=user_id, reservation_status=status).exclude("id").only(
                                "reservation_text", "reservation_requested_seats", "user_id", "reservation_id", "reservation_status").to_json())
        if result is None:
            return jsonify({'msg': 'There are currently no reservation with the status'}), 404
        return jsonify(result)
    else:
        result = json.loads(Reservation.objects(journey_user_id=user_id).exclude("id").only(
                                "reservation_text", "reservation_requested_seats", "user_id", "reservation_id", "reservation_status").to_json())
        if result is None:
            return jsonify({'msg': 'There are currently no reservation with the status'}), 404
        return jsonify(result)


@reservation_bp.route("/api/reservation/requests", methods=["GET"])
def check_requests():
    user_id = request.args.get("id")
    if request.args.get('status') is not None:
        status = request.args.get('status')
        result = json.loads(Reservation.objects(user_id=user_id, reservation_status=status).exclude("id").only(
                                "reservation_text", "reservation_requested_seats", "user_id", "reservation_id", "reservation_status").to_json())
        if not result:
            return jsonify({'msg': 'There are currently no reservation with the status'}), 404
        return jsonify(result)
    else:
        result = json.loads(Reservation.objects(user_id=user_id).exclude("id").only(
                                "reservation_text", "reservation_requested_seats", "user_id", "reservation_id", "reservation_status").to_json())
        if result is None:
            return jsonify({'msg': 'There are currently no reservation with the status'}), 404
        return jsonify(result)


# sched = BackgroundScheduler(daemon=True)
# sched.add_job(check_reservation,'interval',seconds=60)
# sched.start()


@reservation_bp.route("/api/reservation/status", methods=["GET", "PATCH"])  # FIXME: NO JSON WITH GET REQUESTS!
def check_reservation_status():
    data = request.get_json()
    if request.method == 'GET':
        result = json.loads(Reservation.objects(reservation_id=data["reservation_id"]).exclude("id").only("reservation_status").to_json())
        if not result:
            return jsonify({'msg': 'There are currently no reservation with the status'}), 404
        return jsonify(result)

    if request.method == 'PATCH':
        Reservation.objects(reservation_id=data["reservation_id"]).update_one(
            set__reservation_status=data['reservation_status'])
        return jsonify({"message": 'record updated'}), 200


@reservation_bp.route("/api/reservation", methods=["POST"])
def make_reservation():
    data = request.get_json()
    journey = json.loads(Journey.objects(journey_id=data["journey_id"]).exclude("id").only("journey_empty_spaces", "user_id").to_json())  # FIXME: Not a nice way!
    new_reservation = Reservation(
        reservation_id=str(uuid.uuid4()),
        journey_id=data["journey_id"],
        reservation_requested_seats=data["reservation_requested_seats"],
        journey_empty_spaces=journey[0]["journey_empty_spaces"],
        reservation_text=data["reservation_text"],
        user_id=data["user_id"],
        journey_user_id=journey[0]["user_id"],
        reservation_status="pending"
        # reservation_money = IntField(required=False)  # TODO: Insert it!
        )
    if new_reservation["reservation_requested_seats"] > new_reservation["journey_empty_spaces"]:
        return jsonify({'msg': "Unfortunately your requested journey does not have the requested seats free"})
    else:
        new_reservation.save()
        return "Posted reservation"
