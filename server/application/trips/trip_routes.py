# For Deployment
# from server.settings import *
# from server.models import Journey, Event

# For Development
from settings import *
from models import Journey, Events, User
from application.send_email import send_email

# Set up a Blueprint
trips_bp = Blueprint('trips_bp', __name__,
                     template_folder='templates',
                     static_folder='static')


@trips_bp.route("/api/trip", methods=["GET", "PATCH", "DELETE"])
def get_journey():
    """This function GETs, PATCHs and DELETEs a trip."""
    data = request.get_json()
    if request.method == 'GET':
        """This chunk GETs the current journeys for one event id

        Keyword-Arguments:
        event_id -- The unique uuid4 id of the event from the event collection
        """
        return jsonify(json.loads(Journey.objects(event_id=data["event_id"]).to_json()))

    if request.method == 'PATCH':
        """This chunk PATCHs the journey informations.

        Keyword-Arguments:
        journey_id -- The unique journey id from the journey collection
        pickup_zip_code -- This displays the start location from the pickups collection
        journey_empty_spaces -- Number of empty spaces on a trip
        journey_car -- Car of the one who offered the trip
        journey_text -- Custom text of the one who offered the trip
        journey_date -- The date in day, month and year when the trip starts
        # journey_start_time -- The exact time in minutes and hours of when the trip starts  # FIXME: THIS SHOULD BE UPDATEDABLE AS WELL
        """
        Journey.objects(journey_id=data["journey_id"]).update_one(
            set__pickup_zip_code=str(data['pickup_zip_code']),
            set__journey_id=data['journey_id'],
            set__journey_empty_spaces=str(data['journey_empty_spaces']),
            set__journey_car=data['journey_car'],
            set__journey_text=data['journey_text'],
            set__journey_date=data['journey_date'])
        return jsonify({"message": 'record updated'}), 200

    if request.method == "DELETE":
        """This chunk DELETEs a journey from the collection journey.

        Keyword-Arguments:
        journey_id -- The unique journey id from the journey collection
        """
        Journey.objects(journey_id=data["journey_id"]).delete()
        return jsonify({"message": "record deleted"})


@trips_bp.route('/api/trip', methods=['POST'])
def create_trip():
    """This function POSTs a journey into the journey collection. Could send emails!

    Keyword-Argument:
    event_address -- The event address and journey destination from the event collection
    event_id -- The unique uuid4 id of the event from the event collection
    pickup_zip_code -- This displays the start location from the pickups collection
    user_id -- The user id of the one who offers the trip from the user collection
    journey_empty_spaces -- Number of empty spaces on a trip  # FIXME: Have to be reduced when reservation is made
    journey_car -- Car of the one who offered the trip
    journey_text -- Custom text of the one who offered the trip
    journey_date -- The date in day, month and year when the trip starts
    journey_start_time -- The exact time in minutes and hours of when the trip starts
    journey_money -- The money the driver would like to have
    """
    data = request.get_json()
    new_journey = Journey(
            event_address=data['event_address'],
            event_id=data['event_id'],
            event_start_date=str(Events.objects(event_id=data["event_id"]).only("event_start_date")),  # FIXME: This should be a datetime
            event_start_time=str(Events.objects(event_id=data["event_id"]).only("event_start_time")),  # FIXME: This should be a datetime
            pickup_zip_code=str(data['pickup_zip_code']),  # FIXME: Add a mapper!
            user_id=data['user_id'],
            journey_id=str(uuid.uuid4()),
            journey_empty_spaces=str(data['journey_empty_spaces']),
            journey_car=data['journey_car'],
            journey_text=data['journey_text'],
            journey_date=data['journey_date'],
            journey_start_time=data['journey_start_time'],
            journey_money=data["journey_money"])
    new_journey.save()
    # user_email = json.loads(User.objects(user_id=data["user_id"]).exclude("id").to_json())  # FIXME: Not a nice way!
    # send_email(email_user, email_password, user_email[0]["user_email"],
    #                         "Congrats! Your reservation has been posted!",
    #                         "Hi there, \n this your first reservation at our new eventway service! Welcome to the community!")
    return "Successfully inserted"


@trips_bp.route("/api/trip_event", methods=["GET"])
def get_all_journeys_for_one_event_id():
    """This function GETs all journeys for one event.

    Keyword-Arguments:
    id -- The unique uuid4 id of the event from the event collection
    """
    result = json.loads(Journey.objects(event_id=request.args.get("id")).to_json())  # FIXME: ID SHOULD BE NAMED EVENT_ID
    return Response(
        json_util.dumps({'trip_event': result}),
        mimetype='application/json')


@trips_bp.route("/api/tripUser", methods=["GET"])  # TODO: Naming is not consisting
def journey_for_user_id():
    """This function GETs all journeys for one user.

    Keyword-Arguments:
    id -- The user id of the one who offers the trip from the user collection
    """
    result = json.loads(Journey.objects(user_id=request.args.get("id")).to_json())  # FIXME: ID SHOULD BE USER_ID
    return Response(
        json_util.dumps({'tripUser': result}),  # TODO: Naming is not consisting
        mimetype='application/json')
