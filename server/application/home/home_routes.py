# For Deployment
# from server.settings import *
# from server.models import Journey, Event

# For Development
from settings import *
from models import Journey, Events, User
from application.send_email import send_email

# Set up a Blueprint
home_bp = Blueprint('home_bp', __name__,
                     template_folder='templates',
                     static_folder='static')


#@home_bp.route("/api/upcoming", methods=["GET"])
#def get_upcoming_games:
    # event name will be created manually
    # start date can be got from datetime.strftime
    