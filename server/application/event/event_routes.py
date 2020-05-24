from flask import current_app as app
from flask import request, jsonify, Blueprint
import jwt
from functools import wraps

# For Deployment
from server import settings
from server.models import Event

# For Development
# from settings import *
# from models import Event

# get collection
collection = get_collection("events")


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
            current_user = collection.find_one({'user_id': data['user_id']})
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
    event = request.args.get('event_id')
    print(event)
    result = collection.find({'event_id': event})
    if not result:
        return jsonify({'message': 'Kein Event gefunden'})
    output = {}
    for q in result:
        output = {
            'event_name': q['event_name'],
            'event_address': q['event_address'],
            'event_start_date': q['event_start_date'],
            'event_end_date': q['event_end_date'],
            'event_start_time': q['event_start_time'],
            'event_end_time': q['event_end_time']
        }
    return jsonify({'event': output}), 200
