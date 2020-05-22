from flask import request, jsonify, Blueprint
import uuid
from settings import *
from mongoengine import Document, StringField, IntField, LongField
import json


# Journey Model
class Journey(Document):
    event_address = StringField(required=True)
    event_id = StringField(required=True)  # UUIDField(required=True)
    event_start_date = StringField(required=True)  # DateTimeField(required=True)
    event_start_time = StringField(required=True)  # DateTimeField(required=True)
    pickup_zip_code = IntField(min_value=10000, max_value=99999)
    user_id = StringField(required=True)  # UUIDField(required=True)
    journey_id = StringField(required=True)  # UUIDField(required=True)
    journey_empty_spaces = StringField(required=True)  # IntField(min_value=1)
    journey_car = StringField(required=True)
    journey_text = StringField(required=True)
    journey_date = StringField(required=True)  # DateTimeField(required=True)
    journey_start_time = StringField(required=True)  # DateTimeField(required=True)
    journey_money = LongField(required=True)


# Set up a Blueprint
trips_bp = Blueprint('trips_bp', __name__,
                     template_folder='templates',
                     static_folder='static')


@trips_bp.route("/api/trip", methods=["GET", "PATCH", "DELETE", "POST"])
def get_journey():
    data = request.get_json()
    if request.method == 'GET':
        return jsonify(json.loads(Journey.objects(event_id=data["event_id"]).to_json()))

    if request.method == 'PATCH':
        Journey.objects(journey_id=data["journey_id"]).update_one(
            set__event_address=data['event_address'],
            set__event_id=data['event_id'],
            set__event_start_date=data['event_start_date'],
            set__event_start_time=data['event_start_time'],
            set__pickup_zip_code=data['pickup_zip_code'],
            set__user_id=data['user_id'],
            set__journey_id=data['journey_id'],
            set__journey_empty_spaces=data['journey_empty_spaces'],
            set__journey_car=data['journey_car'],
            set__journey_text=data['journey_text'],
            set__journey_date=data['journey_date'],
            set__journey_start_time=data['journey_start_time'],
            set__journey_money=data["journey_money"])
        return jsonify({"message": 'record updated'}), 200

    if request.method == "POST":
        Journey(
            event_address=data['event_address'],
            event_id=data['event_id'],
            event_start_date=data['event_start_date'],
            event_start_time=data['event_start_time'],
            pickup_zip_code=data['pickup_zip_code'],
            user_id=data['user_id'],
            journey_id=str(uuid.uuid4()),
            journey_empty_spaces=data['journey_empty_spaces'],
            journey_car=data['journey_car'],
            journey_text=data['journey_text'],
            journey_date=data['journey_date'],
            journey_start_time=data['journey_start_time'],
            journey_money=data["journey_money"]).save()
        return jsonify({"message": "trip created"})

    if request.method == "DELETE":
        Journey.objects(journey_id=data["journey_id"]).delete()
        return jsonify({"message": "record deleted"})


@trips_bp.route("/api/trip_event", methods=["GET"])
def get_all_journeys_for_one_event_id():  #FIXME: The above function, does not have to be jsonified as trip_event
    return jsonify({"trip_event": json.loads(Journey.objects(event_id=request.args.get("id")).to_json())})  # TODO: Naming is not consisting


@trips_bp.route("/api/tripUser", methods=["GET"])  # TODO: API Naming is not consistened
def journey_for_user_id():
    return jsonify(json.loads(Journey.objects(user_id=request.args.get("id")).to_json()))  # TODO: Naming is not consisting
