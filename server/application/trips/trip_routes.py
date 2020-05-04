from flask import Blueprint, render_template
from flask import current_app as app
import pymongo
from flask import Flask, request, jsonify, render_template
from bson import Binary, Code
from bson.json_util import dumps

client = pymongo.MongoClient(
    "mongodb+srv://yannik:techtalents2020@connext-en64e.mongodb.net/test?retryWrites=true&w=majority")

# Set up a Blueprint
trips_bp = Blueprint('trips_bp', __name__,
                     template_folder='templates',
                     static_folder='static')

@trips_bp.route("/api/trip", methods=["GET"])
def get_one_journey():
    table_journey_db = client.table.journey
    result = table_journey_db.find( {'journey_id': request.args.get("id")} )
    results = []
    for x in result:
         results.append(x)
    return dumps(results), 200

@trips_bp.route("/api/trip_event", methods=["GET"])
def get_all_journeys_for_one_event_id():
    table_journey_db = client.table.journey
    result = table_journey_db.find( {'event_id': request.args.get("id")} )
    results = []
    for x in result:
         results.append(x)
    return dumps(results), 200

@trips_bp.route("/api/test/<string:name>", methods=["GET"])
def get_name(name: str):
    return jsonify(data=name), 200

@trips_bp.route("/api/request", methods=["GET"])
def get_name_1():
    name = request.args.get("name")
    return jsonify(data=name), 200

    # @app.route('/api/journey', methods=['POST'])
# def post_jounrey():
#     return 'Route to post a journey'

# Update a journey
# @app.route('/api/journey:journeyID', methods=['PUT'])
# def put_jounrey():
#     return 'Route to put /verändern a journey'

# # Delete a journey
# @app.route('/api/journey:journeyID', methods=['DELETE'])
# def delete_jounrey():
# aufgrund einer ID
#     return 'Delete journey'
