from mongoengine import Document, StringField, IntField, LongField, EmailField
import json


# User Model
class User(Document):
    """This class takes 8 arguments and writes them to the User collection.

    Keyword-Arguments:
    user_id -- This is a unique uuid4 user id, to identify every single user
    username -- This is the users name, it does not have to be unique
    user_email -- Unique user email, it is necessary to login
    user_password -- Users Password, which is hashed with sha256 in the database
    user_account_created -- This is a timestemp, of when the user created his account
    user_last_login -- A variable to track when the user last logged into the platform
    user_profile_picture -- A picture which the user like to represent him with
    event_id -- This is the event_id every user has, in order to know which event he wants to visit from the event collection # FIXME: We have to talk about it NAMING 
    """
    user_id = StringField(required=True)
    username = StringField(required=True)
    user_email = EmailField(max_length=50)
    user_password = StringField(required=True)
    user_account_created = StringField(required=True)  # DateTimeField
    user_last_login = StringField(required=True)  # DateTimeField
    user_profile_picture = StringField(required=False, default="default.jpg")
    event_id = StringField(required=True, default="2ab60824-b539-4a1f-ae1a-f7d94d2d55bb")  # FIXME: This default is the eintracht game!


#  Class Event
class Events(Document):  # TODO: Look at the comments
    """This class takes 8 arguments and writes them to the Events collection.

    Keyword-Arguments:
    event_id -- A unique uuid4 event id
    event_name -- The name of the event
    organizator_name_clean -- Clean name of the organizer from the organizator collection
    event_address -- Address of the event location
    event_start_date -- The date of the day, month and year this event starts
    event_end_date -- The date of the day, month and year this event ends
    event_start_time -- The exact hours and minutes when this event starts
    event_end_time -- The exact hours and minutes when this event ends
    """
    event_id = StringField(required=True)  # UUIDField
    event_name = StringField(required=True)
    organizator_name_clean = StringField(required=True)
    event_address = StringField(required=True)
    event_start_date = StringField(required=True)  # DateTimeField
    event_end_date = StringField(required=True)  # DateTimeField
    event_start_time = StringField(required=True)
    event_end_time = StringField(required=True)


# Class Journey
class Journey(Document):
    """This class takes 13 arguments and writes them to the Journey collection.

    Keyword-Arguments:
    event_address -- The event address and journey destination from the event collection
    event_id -- The unique uuid4 id of the event from the event collection
    event_start_date -- The date of the day, month and year this event starts from the event collection
    event_start_time -- The exact hours and minutes when this event starts from the event collection
    pickup_zip_code -- This displays the start location from the pickups collection
    user_id -- The user id of the one who offers the trip from the user collection
    journey_id -- Unique uuid4 id of a journey
    journey_empty_spaces -- Number of empty spaces on a trip  # FIXME: Have to be reduced when reservation is made
    journey_car -- Car of the one who offered the trip
    journey_text -- Custom text of the one who offered the trip
    journey_date -- The date in day, month and year when the trip starts
    journey_start_time -- The exact time in minutes and hours of when the trip starts
    journey_money -- The money the driver would like to have
    """
    event_address = StringField(required=False)
    event_id = StringField(required=False)  # UUIDField(required=True)
    event_start_date = StringField(required=False)  # DateTimeField(required=True)
    event_start_time = StringField(required=False)  # DateTimeField(required=True)
    pickup_zip_code = StringField(required=True)  # IntField(min_value=10000, max_value=99999)
    user_id = StringField(required=False)  # UUIDField(required=True)
    journey_id = StringField(required=True)  # UUIDField(required=True)
    journey_empty_spaces = StringField(required=True)  # IntField(min_value=1)
    journey_car = StringField(required=True)
    journey_text = StringField(required=True)
    journey_date = StringField(required=True)  # DateTimeField(required=True)
    journey_start_time = StringField(required=False)  # DateTimeField(required=True)
    journey_money = LongField(required=False)


# Class Pickup-Mapper
class Pickups(Document):
    """This class takes 2 arguments and writes them to the Pickups collection.

    Keyword-Arguments:
    pickup_city -- The name of the city corresponding to the zip code
    pickup_zip_code -- The zip code corresponding to the city name
    """
    pickup_city = StringField(required=True)
    pickup_zip_code = IntField(min_value=10000, max_value=99999)


# Class Reservation
class Reservation(Document):
    """This class takes 9 arguments and writes them to the Reservation collection.

    Keyword-Arguments:
    reservation_id -- Unique uuid4 id for a made reservation
    journey_id -- The unique journey id from the journey collection
    reservation_requested_seats -- The number of seats the user likes to reserve
    journey_empty_spaces -- The empty seats of a journey from the journey collection
    reservation_text -- A custom text of the user who makes the reservation
    user_id -- The user id of the user who makes the reservation from the user collection
    journey_user_id -- The user id of the user who hosts the trip from the journey collection
    reservation_money -- DAS KANN WEG!!!  # FIXME!
    reservation_status -- The current status of the reservation (pending, accepted, declined)
    """
    reservation_id = StringField(required=False)  # UUIDField...
    journey_id = StringField(required=False)  # UUIDField...
    reservation_requested_seats = IntField(required=False)
    journey_empty_spaces = IntField(required=False)  # TODO: Maybe insert a highest numbers of offered trips?
    reservation_text = StringField(required=False)
    user_id = StringField(required=False)  # UUIDField...
    journey_user_id = StringField(required=False)  # UUIDField...
    reservation_money = IntField(required=False)  # TODO: Maybe set max number for Money?
    reservation_status = StringField(required=False, default="pending")
