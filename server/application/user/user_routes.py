from flask import Blueprint, render_template
from flask import current_app as app
import pymongo
import json
from flask import Flask, request, jsonify, render_template, make_response
from werkzeug.security import generate_password_hash, check_password_hash
import mongoengine
from mongoengine import *
from bson import Binary, Code
from bson.json_util import dumps
import jwt
import datetime
from functools import wraps
import uuid

connect(
    db='table',
    host='mongodb+srv://yannik:techtalents2020@connext-en64e.mongodb.net/test?retryWrites=true&w=majority'
)

client = pymongo.MongoClient(
    "mongodb+srv://aron:techtalents2020@connext-en64e.mongodb.net/test?retryWrites=true&w=majority")
db = client['table']
collection = db['user']

# User Model
class User(Document):
    user_id = StringField(required=True)
    name = StringField(required=True)
    email = EmailField(max_length=50)
    password = StringField(required=True)
    ticket_ID = StringField(required=True)

    def json(self):
        user_dict = {
            "user_id": self.user_id,
            "name": self.name,
            "email": self.email, 
            "password": self.password,
            "ticket_ID": self.ticket_ID
        }
        return json.dumps(user_dict)

# Set up a Blueprint
user_bp = Blueprint('user_bp', __name__,
                     template_folder='templates',
                     static_folder='static')

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token: 
            return jsonify({'msg' : 'Token is missing'})
        
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            current_user = collection.find_one({'user_id' : data['user_id']})
        except:
            return jsonify({'msg' : 'Token is invalid'})
        
        return f(current_user, *args, **kwargs)
    
    return decorated



# User Routes
# '/api/user', methods=['GET']
# Private Route

@user_bp.route('/api/user', methods=['GET'])
@token_required
def get_one_user(current_user):
    user_table = client.table.user
    result = user_table.find( {"user_email": request.args.get("email")} )
    if not result: 
        return jsonify({'message': 'No user found!'})
    output = {}
    for q in result:
        output = {
            'user_id' : q['user_id'],
            'user_prename' : q['user_prename'],
            'user_name' : q['user_name'],
            'user_email' : q['user_email'],
            'user_alias' : q['user_alias'],
            'user_password' : q['user_password'],
            'ticket_id' : q['ticket_id'],
            'event_id' : q['event_id']
        }

    return jsonify({'user': output})

# Delete User
# '/api/user', methods=['DELETE']
# Private Route

@user_bp.route('/api/user', methods=['DELETE'])
@token_required
def delete_user(current_user):
    user_table = client.table.user
    result = user_table.delete_one( {"user_email": request.args.get("email")} )
    if result.deleted_count == 1:
        response = {'ok': True, 'message': 'record deleted'}
    else:
        response = {'ok': True, 'message': 'no record found'}
    return jsonify(response), 200

# Get All User
# '/api/user', methods=['DELETE']
# Private Route

@user_bp.route('/api/allusers', methods=['GET'])
def get_all_user():
    user = client.table.user
    output = []
    for q in user.find():
        output.append({
            'user_id' : q['user_id'],
            'user_prename' : q['user_prename'],
            'user_name' : q['user_name'],
            'user_email' : q['user_email'],
            'user_alias' : q['user_alias'],
            'user_password' : q['user_password'],
            'ticket_id' : q['ticket_id'],
            'event_id' : q['event_id']
        })    
    return jsonify({'users': output})

# User Routes
# '/api/auth', methods=['GET']
# Private Route

@user_bp.route('/api/auth', methods=['GET'])
@token_required
def get_auth_user(current_user):
    user_table = client.table.user
    result = user_table.find( {"user_id": current_user['user_id']} )
    if not result:
       return jsonify({'message': 'No user found!'})
    output = {}
    for q in result:
        output = {
            'user_id' : q['user_id'],
            'username' : q['username'],
            'user_email' : q['user_email'],
            'ticket_id' : q['ticket_id'],
            'event_id' : q['event_id']
        }
    
    return jsonify({'user': output})

# Create User
# '/api/user', methods=['GET']
# Public Route

@user_bp.route('/api/user', methods=['POST'])
def create_user(): 
    data = request.get_json()
    email = data['user_email']

    try:
        email = collection.find_one( {'user_email': email} )
        if email != None:
            return make_response({'msg': 'the user already exists'}), 400
        else:
            hashed_password = generate_password_hash(data['user_password'], method='sha256')
            #To Do - Keine Hart verdrahteten Werte
            user = {
            'user_id' : str(uuid.uuid4()),
            'username': data['username'],
            'user_email': data['user_email'],
            'user_password': hashed_password,
            'ticket_id': data['user_ticket_ID'],
            'event_id' : 'e6930b99-e8ca-49f8-9583-89f54366dc14'
            }
            result = collection.insert_one(user)
            token = jwt.encode({'user_id' : user['user_id'], 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=60)}, app.config['SECRET_KEY'])

            return jsonify({'token' : token.decode('UTF-8')})
    except:
        return('Server error'), 500

# Login User
# '/api/login', methods=[POST]
# Public Route

@user_bp.route('/api/auth', methods=['POST'])
def auth_user():
    data = request.get_json()
    email = data['user_email']
    password = data['user_password']

    if not data or not email or not password:
        return make_response({'msg':'Please provide valid credentials'}, 401, {'WWW-Authenitcate' : 'Basic realm="Login required!"'})

    user = collection.find_one( {'user_email' : email} )

    if not user:
        return make_response({'msg':'User not found'}, 401, {'WWW-Authenitcate' : 'Basic realm="Login required!"'})
    
    if check_password_hash(user['user_password'], password):
        token = jwt.encode({'user_id' : user['user_id'], 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=60)}, app.config['SECRET_KEY'])

        return jsonify({'token' : token.decode('UTF-8')})
    
    return make_response({'msg':'Please provide valid credentials'}, 401, {'WWW-Authenitcate' : 'Basic realm="Login required!"'})

