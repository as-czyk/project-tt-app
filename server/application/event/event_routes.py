from flask import current_app as app
from flask import request, jsonify, Blueprint
import jwt
import json
from functools import wraps
from settings import *
from mongoengine import Document, StringField


class Event(Document):  # TODO: Look at the comments
    event_id = StringField(required=True)  # UUIDField
    event_name = StringField(required=True)
    event_address = StringField(required=True)
    event_start_date = StringField(required=True)  # DateTimeField
    event_end_date = StringField(required=True)  # DateTimeField
    event_start_time = StringField(required=True)
    event_end_time = StringField(required=True)


# Set up a Blueprint
event_bp = Blueprint('event_bp', __name__,
                     template_folder='templates',
                     static_folder='static')


# Check for valid token
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'msg': 'Token is missing'})

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            current_user = jsonify(json.loads(Event.object(user_id=data["user_id"]).to_json()))  # TODO: Might not work
            # collection.find_one({'user_id': data['user_id']})
        except:
            return jsonify({'msg': 'Token is invalid'})

        return f(current_user, *args, **kwargs)
    return decorated


# Event Routes
# 'api/event', methods=['GET']
# Private Route
@event_bp.route('/api/event', methods=['GET'])
@token_required
def get_event(current_user):
    return jsonify({"event": json.loads(Event.objects(event_id=request.args.get('event_id')).to_json())}), 200  # TODO: Naming unconsistend
