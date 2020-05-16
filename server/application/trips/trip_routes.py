from flask import Blueprint, render_template
from flask import current_app as app
import pymongo
from flask import Flask, request, jsonify, render_template
from bson import Binary, Code
from bson.json_util import dumps
from flask import Response 
from bson import json_util
import uuid, json

client = pymongo.MongoClient(
    "mongodb+srv://yannik:techtalents2020@connext-en64e.mongodb.net/test?retryWrites=true&w=majority")

# Set up a Blueprint
trips_bp = Blueprint('trips_bp', __name__,
                     template_folder='templates',
                     static_folder='static')

class journey:
    def __init__(self, event_address, event_id, event_start_date, event_start_time, 
                 pickup_zip_code, user_id, journey_id, journey_empty_spaces, 
                 journey_car, journey_text, journey_date, journey_start_time):
        self.event_address = event_address
        self.event_id = event_id
        self.event_start_date = event_start_date
        self.event_start_time = event_start_time
        self.pickup_zip_code = pickup_zip_code
        self.user_id = user_id
        self.journey_id = journey_id
        self.journey_empty_spaces = journey_empty_spaces
        self.journey_car = journey_car
        self.journey_text = journey_text
        self.journey_date = journey_date
        self.journey_start_time = journey_start_time

    def dict(self):
        journey_dict = {
                "event_address":self.event_address,
                "event_id":self.event_id,
                "event_start_date": self.event_start_date,
                "event_start_time":self.event_start_time,
                "pickup_zip_code":self.pickup_zip_code,
                "user_id":self.user_id,
                "journey_id":self.journey_id,
                "journey_empty_spaces":self.journey_empty_spaces,
                "journey_car":self.journey_car,
                "journey_text":self.journey_text,
                "journey_date":self.journey_date,
                "journey_start_time":self.journey_start_time
            }
        return journey_dict

@trips_bp.route("/api/trip", methods=["GET", "DELETE", "PATCH"])
def get_one_journey():
    table_journey_db = client.table.journey
    result = {}
    if request.method == "DELETE":
        db_response = table_journey_db.delete_one({'journey_id': request.args.get("id")})
        if db_response.deleted_count == 1:
            response = {'ok': True, 'message': 'record deleted'}
        else:
            response = {'ok': True, 'message': 'no record found'}
        return jsonify(response), 200
    if request.method == 'PATCH':
        data = request.get_json()
        # before = table_journey_db.find( {'journey_id': request.args.get("journey_id")} )
        table_journey_db.update_one(
        {'journey_id': request.args.get("journey_id")}, {'$set': #FIXME: That does not work yet ; return 200 but doesnt update
            journey(data['event_address'],
                    data['event_id'],
                    data['event_start_date'],
                    data['event_start_time'],
                    data['pickup_zip_code'],
                    data['user_id'],
                    data['journey_id'],
                    data['journey_empty_spaces'],
                    data['journey_car'],
                    data['journey_text'],
                    data['journey_date'],
                    data['journey_start_time']).dict()
            # "event_address":data['event_address'],
            # "event_id":data['event_id'],
            # "event_start_date": data['event_start_date'],
            # "event_start_time":data['event_start_time'],
            # "pickup_zip_code":data['pickup_zip_code'],
            # "user_id":data['user_id'],
            # "journey_id":data['journey_id'],
            # "journey_empty_spaces":data['journey_empty_spaces'],
            # "journey_car":data['journey_car'],
            # "journey_text":data['journey_text'],
            # "journey_date":data['journey_date'],
            # "journey_start_time":data['journey_start_time']
            })
        return jsonify({'ok': True, 'message': 'record updated'}), 200
    if request.method == 'GET':
        result = table_journey_db.find( {'journey_id': request.args.get("id")} )
        output = {}
        for data in result:
            output = journey(data['event_address'], # FIXME: FUCK CLASS!
                            data['event_id'],
                            data['event_start_date'],
                            data['event_start_time'],
                            data['pickup_zip_code'],
                            data['user_id'],
                            data['journey_id'],
                            data['journey_empty_spaces'],
                            data['journey_car'],
                            data['journey_text'],
                            data['journey_date'],
                            data['journey_start_time']).dict()
        return jsonify({'trip': output})
    if not result: 
        return jsonify({'message': 'No trip found!'})
    

@trips_bp.route("/api/trip_event", methods=["GET"])
def get_all_journeys_for_one_event_id():
    table_journey_db = client.table.journey
    result = table_journey_db.find( {'event_id': request.args.get("id")} )
    results = [x for x in result]
    return Response(
    json_util.dumps({'trip_event' : results}),
    mimetype='application/json'
)

@trips_bp.route('/api/trip', methods=['POST'])
def create_trip():
    data = request.get_json()
    table_journey_db = client.table.journey
    trip = journey(data['event_address'],
                data['event_id'],
                '2020-06-07', #data['event_start_date'], #FIXME: hard coded
                '16:00', # data['event_start_time'], #FIXME: Hard coded
                data['pickup_zip_code'],
                data['user_id'],
                str(uuid.uuid4()),
                data['journey_empty_spaces'],
                data['journey_car'],
                data['journey_text'],
                data['journey_date'],
                data['journey_start_time']).dict()
    result = table_journey_db.insert_one(trip)
    return "Successfully inserted with ObjectID: " + str(result.inserted_id)

@trips_bp.route("/api/tripUser", methods=["GET"])
def journey_for_user_id():
    table_journey_db = client.table.journey
    result = table_journey_db.find( {'user_id': request.args.get("id")} )
    results = [x for x in result]
    return Response(
    json_util.dumps({'tripUser' : results}),
    mimetype='application/json'
)