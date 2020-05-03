from flask import Flask, request, jsonify, render_template
import os
import sys
import pymongo
from trips import trip_routes
from home import home_routes
from user import user_routes

client = pymongo.MongoClient(
    "mongodb+srv://yannik:techtalents2020@connext-en64e.mongodb.net/test?retryWrites=true&w=majority")

# Init app
app = Flask(__name__, instance_relative_config=False)

app.config["MONGO_DBNAME"] = "table"
app.config["MONGO_URI"] = "mongodb+srv://yannik:techtalents2020@connext-en64e.mongodb.net/test?retryWrites=true&w=majority"
app.register_blueprint(trip_routes.trips_bp)
app.register_blueprint(home_routes.home_bp)
app.register_blueprint(user_routes.user_bp)

# Run Server
if __name__ == '__main__':
    app.run(debug=True)

