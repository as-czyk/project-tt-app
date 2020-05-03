from flask import Blueprint, render_template
from flask import current_app as app
import pymongo
from flask import Flask, request, jsonify, render_template

client = pymongo.MongoClient(
    "mongodb+srv://yannik:techtalents2020@connext-en64e.mongodb.net/test?retryWrites=true&w=majority")

# Set up a Blueprint
trips_bp = Blueprint('trips_bp', __name__,
                     template_folder='templates',
                     static_folder='static')

@trips_bp.route('/api/journey/', methods=['GET'])
def get_journey():
    #query = request.args
    journeylist = client.table.journey
    journeys = []
    journey = journeylist.find()
    for j in journey:
        j.pop("_id")
        journeys.append(j)
    #return "This is a test"
    return jsonify(journeys), 200


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
#     return 'Delete journey'

# # Get Journey
# @app.route('/api/journey', methods=['GET'])
# def get_jounrey():
#     return 'Route to get jounrey based on ID'