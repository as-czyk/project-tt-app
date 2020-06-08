# For Deployment
# from server.settings import *
# from server.models import Event

# For Development
from settings import *
from models import Events

# Set up a Blueprint
event_bp = Blueprint('event_bp', __name__,
                     template_folder='templates',
                     static_folder='static')


# Event Routes
# 'api/event', methods=['GET']
# Private Route
@event_bp.route('/api/event', methods=['GET'])
@token_required
def get_event(current_user):
    """Get all events.

    Keyword-Arguments:
    event_id -- The ID for identifying one specific event    
    """
    result = json.loads(Events.objects(client_id=request.args.get("client_id")).to_json())
    if not result:
        return jsonify({'message': 'Kein Event gefunden'})
    return jsonify({'event': result[0]}), 200
