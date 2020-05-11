from flask import Blueprint, render_template
from flask import current_app as app
import pymongo
from flask import Flask, request, jsonify, render_template
from bson import Binary, Code
from bson.json_util import dumps
from flask import Response 
from bson import json_util

client = pymongo.MongoClient(
    "mongodb+srv://yannik:techtalents2020@connext-en64e.mongodb.net/test?retryWrites=true&w=majority")

# Set up a Blueprint
trips_bp = Blueprint('trips_bp', __name__,
                     template_folder='templates',
                     static_folder='static')

@trips_bp.route("/api/trip", methods=["GET", "POST", "DELETE", "PATCH"])
def get_one_journey():
    table_journey_db = client.table.journey
    table_user_db = client.table.user
    if request.method == 'GET':
        result = table_journey_db.find( {'journey_id': request.args.get("id")} )
        if not result: 
            return jsonify({'message': 'No trip found!'})
        output = {}
        for q in result:
            output = {
                'event_address': q['event_address'],
                "event_id":q['event_id'],
                "event_start_date": q['event_start_date'],
                "event_start_time":q['event_start_time'],
                "pickup_zip_code":q['pickup_zip_code'],
                "user_id":q['user_id'],
                "journey_id":q['journey_id'],
                "journey_empty_spaces":q['journey_empty_spaces'],
                "journey_car":q['journey_car'],
                "journey_text":q['journey_text'],
                "journey_date":q['journey_date'],
                "journey_start_time":q['journey_start_time']}
        return jsonify({'trip': output})
    if request.method == 'POST':
        insert = {
            'event_address': request.args.get('event_address'),
            "event_id":request.args.get('event_id'),
            "event_start_date": request.args.get('event_start_date'),
            "event_start_time":request.args.get('event_start_time'),
            "pickup_zip_code":request.args.get('pickup_zip_code'),
            "user_id":request.args.get('user_id'),
            "journey_id":request.args.get('journey_id'),
            "journey_empty_spaces":request.args.get('journey_empty_spaces'),
            "journey_car":request.args.get('journey_car'),
            "journey_text":request.args.get('journey_text'),
            "journey_date":request.args.get('journey_date'),
            "journey_start_time":request.args.get('journey_start_time')}
        result = table_journey_db.insert_one(insert)
        return "Successfully inserted with ObjectID: " + str(result.inserted_id)
    if request.method == 'DELETE':
        db_response = table_journey_db.delete_one({'journey_id': request.args.get("id")})
        if db_response.deleted_count == 1:
            response = {'ok': True, 'message': 'record deleted'}
        else:
            response = {'ok': True, 'message': 'no record found'}
        return jsonify(response), 200
    if request.method == 'PATCH':
        query = request.args
        before = table_journey_db.find( {'journey_id': request.args.get("journey_id")} )
        table_journey_db.update_one(
        {'journey_id': request.args.get("journey_id")}, {'$set': {
            "event_address":request.args.get('event_address'),
            "event_id":request.args.get('event_id'),
            "event_start_date": request.args.get('event_start_date'),
            "event_start_time":request.args.get('event_start_time'),
            "pickup_zip_code":request.args.get('pickup_zip_code'),
            "user_id":request.args.get('user_id'),
            "journey_id":request.args.get('journey_id'),
            "journey_empty_spaces":request.args.get('journey_empty_spaces'),
            "journey_car":request.args.get('journey_car'),
            "journey_text":request.args.get('journey_text'),
            "journey_date":request.args.get('journey_date'),
            "journey_start_time":request.args.get('journey_start_time')
        }})
        return jsonify({'ok': True, 'message': 'record updated'}), 200

@trips_bp.route("/api/trip_event", methods=["GET"])
def get_all_journeys_for_one_event_id():
    table_journey_db = client.table.journey
    result = table_journey_db.find( {'event_id': request.args.get("id")} )
    results = [x for x in result]
    return Response(
    json_util.dumps({'trip_event' : results}),
    mimetype='application/json'
)