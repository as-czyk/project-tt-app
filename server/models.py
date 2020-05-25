from mongoengine import Document, StringField, IntField, LongField


#  Class Event
class Event(Document):  # TODO: Look at the comments
    event_id = StringField(required=True)  # UUIDField
    event_name = StringField(required=True)
    event_address = StringField(required=True)
    event_start_date = StringField(required=True)  # DateTimeField
    event_end_date = StringField(required=True)  # DateTimeField
    event_start_time = StringField(required=True)
    event_end_time = StringField(required=True)


# Class Journey
class Journey(Document):
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
    pickup_city = StringField(required=True)
    pickup_zip_code = IntField(min_value=10000, max_value=99999)


# Class Reservation
class Reservation(Document):
    reservation_id = StringField(required=True)  # UUIDField...
    journey_id = StringField(required=True)  # UUIDField...
    reservation_requested_seats = IntField(required=True)
    journey_empty_spaces = IntField(required=True)  # TODO: Maybe insert a highest numbers of offered trips?
    reservation_text = StringField(required=True)
    user_id = StringField(required=True)  # UUIDField...
    journey_user_id = StringField(required=True)  # UUIDField...
    reservation_money = IntField(required=True)  # TODO: Maybe set max number for Money?
    reservation_status = StringField(required=True, default="pending")