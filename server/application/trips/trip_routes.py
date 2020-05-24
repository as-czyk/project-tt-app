from flask import request, jsonify, Blueprint, Response
import uuid
import json
from bson import json_util

# For Deployment
from server.settings import *
from server.models import Journey, Event

# For Development
#from settings import *
#from models import Journey, Event

# Set up a Blueprint
trips_bp = Blueprint('trips_bp', __name__,
                     template_folder='templates',
                     static_folder='static')


@trips_bp.route("/api/trip", methods=["GET", "PATCH", "DELETE"])
def get_journey():
    data = request.get_json()
    if request.method == 'GET':
        return jsonify(json.loads(Journey.objects(event_id=data["event_id"]).to_json()))

    if request.method == 'PATCH':
        Journey.objects(journey_id=data["journey_id"]).update_one(
            set__pickup_zip_code=data['pickup_zip_code'],
            set__journey_id=data['journey_id'],
            set__journey_empty_spaces=data['journey_empty_spaces'],
            set__journey_car=data['journey_car'],
            set__journey_text=data['journey_text'],
            set__journey_date=data['journey_date'])
        return jsonify({"message": 'record updated'}), 200

    if request.method == "DELETE":
        Journey.objects(journey_id=data["journey_id"]).delete()
        return jsonify({"message": "record deleted"})


@trips_bp.route('/api/trip', methods=['POST'])
def create_trip():
    data = request.get_json()
    new_journey = Journey(
            event_address=data['event_address'],
            event_id=data['event_id'],
            event_start_date=str(Event.objects(event_id=data["event_id"]).only("event_start_date")),  # FIXME: This should be a datetime
            event_start_time=str(Event.objects(event_id=data["event_id"]).only("event_start_time")),  # FIXME: This should be a datetime
            pickup_zip_code=data['pickup_zip_code'],  # FIXME: Add a mapper!
            user_id=data['user_id'],
            journey_id=str(uuid.uuid4()),
            journey_empty_spaces=str(data['journey_empty_spaces']),
            journey_car=data['journey_car'],
            journey_text=data['journey_text'],
            journey_date=data['journey_date'],
            journey_start_time=data['journey_start_time'],
            journey_money=data["journey_money"])
    new_journey.save()
    return "Successfully inserted"


@trips_bp.route("/api/trip_event", methods=["GET"])
def get_all_journeys_for_one_event_id():
    result = json.loads(Journey.objects(event_id=request.args.get("id")).to_json())
    return Response(
        json_util.dumps({'trip_event': result}),
        mimetype='application/json')


@trips_bp.route("/api/tripUser", methods=["GET"])  # TODO: Naming is not consisting
def journey_for_user_id():
    result = json.loads(Journey.objects(user_id=request.args.get("id")).to_json())
    return Response(
        json_util.dumps({'tripUser': result}),  # TODO: Naming is not consisting
        mimetype='application/json')
