#### This is the config file - DO NOT TRACK IN VERSION CONTROL!
# for windows see https://www.youtube.com/watch?v=IolxqkL7cD8
# for mac see https://www.youtube.com/watch?v=5iWhQWVXosU

import os

class Config:
    DB_USER = os.environ.get("DB_USER") 
    DB_PASSWORD = os.environ.get("DB_PASSWORD")
    MONGO_URI = "mongodb+srv://" + DB_USER + ":" + DB_PASSWORD + "@connext-en64e.mongodb.net/test?retryWrites=true&w=majority"
    DB = os.environ.get("DB_PASSWORD")
    COLLECTION_USER = "user"
    COLLECTION_EVENT = "event"
    COLLECTION_JOURNEY = "journey"
    COLLECTION_RESERVATION = "reservation"