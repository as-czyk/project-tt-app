from flask import current_app as app
import json
from flask import request, jsonify, make_response, Blueprint
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
from functools import wraps
import uuid

# For Deployment
# from server.settings import *

# For Development
from settings import *
from models import User


# Set up a Blueprint
user_bp = Blueprint('user_bp', __name__,
                    template_folder='templates',
                    static_folder='static')


def token_required(f):  # FIXME: How can I give more values to the current user?
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']
            print("THIS IS THE TOKEN: ", token)
            # text_file = open("token.txt", "wt")  # YOU CAN USE THE FOLLOWING CODE FOR GETTING THE TOKEN IN THE TOKEN.TXT
            # n = text_file.write(token)
            # text_file.close()
        if not token:
            return jsonify({'msg': 'Token is missing'})
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            current_user = json.loads(User.objects(user_id=data["user_id"]).to_json())
            current_user = current_user[0]
        except:
            return jsonify({'msg': 'Token is invalid'})
        return f(current_user, *args, **kwargs)
    return decorated


# User Routes
# '/api/user', methods=['GET']
# Private Route
@user_bp.route('/api/user', methods=['GET'])
@token_required
def get_one_user(current_user):
    result = json.loads(User.objects(user_email=request.args.get("email")).exclude("id").to_json())
    if not result:
        return jsonify({'message': 'No user found!'})
    return jsonify({'user': result[0]})


# Delete User
# '/api/user', methods=['DELETE']
# Private Route
@user_bp.route('/api/user', methods=['DELETE'])
@token_required
def delete_user(current_user):
    User.objects(user_email=request.args.get("email")).delete()
    return jsonify({"message": "record deleted"})


# Get All User
# '/api/user', methods=['DELETE'] # FIXME: What is this doing here?
# Private Route
@user_bp.route('/api/allusers', methods=['GET'])
def get_all_user():
    return jsonify({'users': json.loads(User.objects().all().exclude("id").to_json())})  # TODO: Is the return that what you wanted?


# User Routes
# '/api/auth', methods=['GET']
# Private Route
@user_bp.route('/api/auth', methods=['GET'])
@token_required
def get_auth_user(current_user):
    result = json.loads(User.objects(user_id=current_user["user_id"]).exclude("id").to_json())
    if not result:
        return jsonify({'message': 'No user found!'})
    return jsonify({'user': result[0]})


# Create User
# '/api/user', methods=['GET']
# Public Route
@user_bp.route('/api/user', methods=['POST'])
def create_user():
    """
    JSON must contain
    # event (Name of Event (e.g. "Eintracht Frankfurt")) --> THIS BUTTON DOES NOT EXITS ANYMORE!!! DEFAULT!
    user_email
    user_password
    username
    """
    data = request.get_json()
    try:
        email = json.loads(User.objects(user_email=data["user_email"]).exclude("id").only("user_email").to_json())
        if email:
            return make_response({'msg': 'the user already exists'}), 400
        else:
            hashed_password = generate_password_hash(data['user_password'], method='sha256')
            user = User(user_id=str(uuid.uuid4()),
                        username=data["username"],
                        user_email=data["user_email"],
                        user_password=hashed_password,
                        user_account_created=datetime.datetime.utcnow().strftime('%d.%m.%Y %H:%M:%S'),
                        user_last_login=datetime.datetime.utcnow().strftime('%d.%m.%Y %H:%M:%S'))
            user.save()
            token = jwt.encode({'user_id': user['user_id'],
                                'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60)},
                               app.config['SECRET_KEY'])
            return jsonify({'token': token.decode('UTF-8')})
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
        return make_response({'msg': 'Please provide valid credentials'},
                             401,
                             {'WWW-Authenticate': 'Basic realm="Login required!"'})

    user = json.loads(User.objects(user_email=data["user_email"]).to_json())
    if not user:
        return make_response({'msg': 'User not found'},
                             401,
                             {'WWW-Authenticate': 'Basic realm="Login required!"'})

    if check_password_hash(user[0]['user_password'], password):
        token = jwt.encode({'user_id': user[0]['user_id'],
                            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60)},
                           app.config['SECRET_KEY'])

        return jsonify({'token': token.decode('UTF-8')})

    return make_response({'msg': 'Please provide valid credentials'},
                         401,
                         {'WWW-Authenticate': 'Basic realm="Login required!"'})
