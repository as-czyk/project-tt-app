from flask import request, jsonify, Blueprint, Response
from bson import json_util
import uuid
from settings import *
from mongoengine import *


# get collection
collection = get_collection("journey")


# Journey Model
class Journey(Document):
    event_address = StringField(required=True)
    event_id = StringField(required=True) # UUIDField(required=True)
    event_start_date = StringField(required=True) # DateTimeField(required=True)
    event_start_time = StringField(required=True) # DateTimeField(required=True)
    pickup_zip_code = IntField(min_value=10000, max_value=99999)
    user_id = StringField(required=True) # UUIDField(required=True)
    journey_id = StringField(required=True) # UUIDField(required=True)
    journey_empty_spaces = StringField(required=True) # IntField(min_value=1)
    journey_car = StringField(required=True)
    journey_text = StringField(required=True)
    journey_date = StringField(required=True) # DateTimeField(required=True)
    journey_start_time = StringField(required=True) # DateTimeField(required=True)
    journey_money = LongField(required=True)


# Set up a Blueprint
trips_bp = Blueprint('trips_bp', __name__,
                     template_folder='templates',
                     static_folder='static')


@trips_bp.route("/api/trip", methods=["GET"])
def get_one_journey():
    data = request.get_json()
    # result = {}
    if request.method == 'GET':
        result = Journey.objects(journey_id=data["journey_id"]).to_json()
        # collection.find({'journey_id': data["journey_id"]})
    if not result:
        return jsonify({'message': 'No trip found!'})
    return jsonifyresult
    #Journey(event_address=result["event_address"],
                    #  event_id=result["event_id"],
                    #  event_start_time=result["event_start_time"],
                    #  pickup_zip_code=result["pickup_zip_code"],
                    #  user_id=result["user_id"],
                    #  journey_id=result["journey_id"],
                    #  journey_empty_spaces=result["journey_empty_spaces"],
                    #  journey_car=result["journey_car"],
                    #  journey_text=result["journey_text"],
                    #  journey_date=result["journey_date"],
                    #  journey_start_time=result["journey_start_time"]).to_json()
    #return output
    if request.method == 'PATCH':  # TODO: Change to get JSON!
        collection.update_one(
            {'journey_id': request.args.get("journey_id")},
            {'$set': {
                "event_address": request.args.get('event_address'),
                "event_id": request.args.get('event_id'),
                "event_start_date": request.args.get('event_start_date'),
                "event_start_time": request.args.get('event_start_time'),
                "pickup_zip_code": request.args.get('pickup_zip_code'),
                "user_id": request.args.get('user_id'),
                "journey_id": request.args.get('journey_id'),
                "journey_empty_spaces": request.args.get('journey_empty_spaces'),
                "journey_car": request.args.get('journey_car'),
                "journey_text": request.args.get('journey_text'),
                "journey_date": request.args.get('journey_date'),
                "journey_start_time": request.args.get('journey_start_time')
            }})
        return jsonify({'ok': True, 'message': 'record updated'}), 200


@trips_bp.route('/api/trip', methods=['DELETE'])
def deleteTrip():
    deleteData = request.get_json()
    print(deleteData)
    db_response = collection.delete_one({"journey_id": deleteData["journey_id"]})
    if db_response.deleted_count == 1:
        response = {'ok': True, 'message': 'record deleted'}
    else:
        response = {'ok': True, 'message': 'no record found'}
    return jsonify(response), 200


@trips_bp.route("/api/trip_event", methods=["GET"])
def get_all_journeys_for_one_event_id():
    result = collection.find({'event_id': request.args.get("id")})
    results = [x for x in result]
    return Response(
        json_util.dumps({'trip_event': results}),
        mimetype='application/json')


@trips_bp.route('/api/trip', methods=['POST'])
def create_trip():
    data = request.get_json()
    journey = {
        'event_address': data['event_address'],
        "event_id": data['event_id'],
        "event_start_date": '2020-06-07',
        "event_start_time": '16:00',
        "pickup_zip_code": data['pickup_zip_code'],
        "user_id": data['user_id'],
        "journey_id": str(uuid.uuid4()),
        "journey_empty_spaces": data['journey_empty_spaces'],
        "journey_car": data['journey_car'],
        "journey_text": data['journey_text'],
        "journey_date": data['journey_date'],
        "journey_start_time": data['journey_start_time']}
    result = collection.insert_one(journey)
    return "Successfully inserted with ObjectID: " + str(result.inserted_id)


@trips_bp.route("/api/tripUser", methods=["GET"])
def journey_for_user_id():
    result = collection.find({'user_id': request.args.get("id")})
    results = [x for x in result]
    return Response(
        json_util.dumps({'tripUser': results}),
        mimetype='application/json')
