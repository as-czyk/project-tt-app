from flask import Blueprint, render_template
from flask import current_app as app
import pymongo
import json
from flask import Flask, request, jsonify, render_template
from werkzeug.security import generate_password_hash, check_password_hash
import mongoengine
from mongoengine import *
from bson import Binary, Code
from bson.json_util import dumps

connect(
    db='table',
    host='mongodb+srv://yannik:techtalents2020@connext-en64e.mongodb.net/test?retryWrites=true&w=majority'
)

client = pymongo.MongoClient(
    "mongodb+srv://aron:techtalents2020@connext-en64e.mongodb.net/test?retryWrites=true&w=majority")
db = client['table']
collection = db['user']

# User Model
class User(mongoengine.Document):
    user_id = mongoengine.StringField(required=True)
    name = mongoengine.StringField(required=True)
    email = mongoengine.StringField(max_length=50)
    password = mongoengine.StringField(required=True)
    ticket_ID = mongoengine.StringField(required=True)


# Set up a Blueprint
user_bp = Blueprint('user_bp', __name__,
                     template_folder='templates',
                     static_folder='static')


# User Routes
#@user_bp.route('/api/user', methods=['GET'])
#def get_all_user():
#    return 'Route to get a user'

@user_bp.route('/api/user', methods=['GET'])
def get_one_user():
    user_table = client.table.user
    result = user_table.find( {"user_id": request.args.get("id")} )
    results = []
    for x in result:
       results.append(x)
    return dumps(results), 200

@user_bp.route('/api/user', methods=['POST'])
def create_user():
    data = request.get_json()
    hashed_password = generate_password_hash(data['password'], method='sha256')
    new_user = User(user_id=('1234'), name=data['name'], email=data['email'], password=hashed_password, ticket_ID=data['ticket_ID'])
    user = new_user.__dict__
    collection.insert_one(user)
    print('here')
    return jsonify({"user": "user is created"})

@user_bp.route('/api/test', methods=['GET'])
def test():
    return ('Hallo')