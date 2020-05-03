from flask import Blueprint, render_template
from flask import current_app as app
import pymongo
from flask import Flask, request, jsonify, render_template

client = pymongo.MongoClient(
    "mongodb+srv://yannik:techtalents2020@connext-en64e.mongodb.net/test?retryWrites=true&w=majority")

# Set up a Blueprint
user_bp = Blueprint('user_bp', __name__,
                     template_folder='templates',
                     static_folder='static')

# User Routes
@user_bp.route('/api/user', methods=['GET'])
def get_user():
    return 'Route to get a user'

@user_bp.route('/api/user', methods=['POST'])
def post_user():
    return 'Route to create a user'