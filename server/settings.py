# this file contains the settings for MongoDB --> DO NOT TRACK IN VERSION CONTROL!
# Flask settings
import pymongo
from mongoengine import *
import mongoengine


DEBUG = True
TESTING = False
SECRET_KEY = 'thisisasecret'


# Contemporary vars - here you can exchange your name
db_user = "aron"
db_password = "techtalents2020"
db_name = "table"


# MongoDB settings
MONGO_DBNAME = "table"
MONGO_URI = "mongodb+srv://" + db_user + ":" + db_password + "@connext-en64e.mongodb.net/" + db_name + "?retryWrites=true&w=majority"


# connect to database
connect(
    db="journey",
    alias="default",
    host="mongodb+srv://" + db_user + ":" + db_password + "@connext-en64e.mongodb.net/" + db_name + "?retryWrites=true&w=majority"
)


# get collection
def get_collection(collection):
    """This function returns the selected collection."""
    client = pymongo.MongoClient("mongodb+srv://" + db_user + ":" + db_password + "@connext-en64e.mongodb.net/table?retryWrites=true&w=majority")
    db = client['table']
    collection = db[collection]
    return collection
