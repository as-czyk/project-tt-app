# this file contains the settings for MongoDB --> DO NOT TRACK IN VERSION CONTROL!
# Flask settings
import pymongo
from mongoengine import *
import mongoengine
from functools import wraps
import json
from flask import request, jsonify, Blueprint, Response, make_response
import jwt
from models import Events, User
from flask import current_app as app
# from apscheduler.schedulers.background import BackgroundScheduler
import uuid
from application.send_email import send_email
from bson import json_util
from werkzeug.security import generate_password_hash, check_password_hash
import datetime

DEBUG = True
TESTING = False
SECRET_KEY = 'thisisasecret'


# Contemporary vars - here you can exchange your name
db_user = "yannik"
db_password = "techtalents2020"
db_name = "dev"


# email creds
email_user = "eventwayco@gmail.com"
email_password = "zihju5-wejzuj-Sekkog"


# MongoDB settings
MONGO_DBNAME = "dev"
MONGO_URI = "mongodb+srv://" + db_user + ":" + db_password + "@connext-en64e.mongodb.net/" + db_name + "?retryWrites=true&w=majority"


# print connection status
print("I AM CURRENTLY CONNECT TO: ", db_name)
if db_name == "table":
    for i in range(1, 50):
        print("ATTENTION: YOU ARE WORKING ON THE PRODUCTION DATABASE!")


# connect to database
connect(
    db="journey",
    alias="default",
    host="mongodb+srv://" + db_user + ":" + db_password + "@connext-en64e.mongodb.net/" + db_name + "?retryWrites=true&w=majority"
)


def token_required(f):  # FIXME: How can I give more values to the current user?
    """This functions checks the token of the current user.

    Keyword-Arguments:
    f -- ???  # FIXME: @Aron
    """
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']
            print("THIS IS THE TOKEN: ", token)
            text_file = open("token.txt", "wt")  # YOU CAN USE THE FOLLOWING CODE FOR GETTING THE TOKEN IN THE TOKEN.TXT
            n = text_file.write(token)
            text_file.close()
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
