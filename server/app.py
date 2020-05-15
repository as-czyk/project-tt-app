from flask import Flask, request, jsonify, render_template
import os
import sys
import pymongo

# For deployment
from server.application.trips import trip_routes
from server.application.user import user_routes
from server.application.reservation import reservation_routes
from server.application.event import event_routes

# for local use
# from application.trips import trip_routes
# from application.user import user_routes
# from application.reservation import reservation_routes
# from application.event import event_routes


client = pymongo.MongoClient(
    "mongodb+srv://yannik:techtalents2020@connext-en64e.mongodb.net/test?retryWrites=true&w=majority")

port = 5000

# Init app
app = Flask(__name__, instance_relative_config=False)

app.config["MONGO_DBNAME"] = "table"
app.config["MONGO_URI"] = "mongodb+srv://yannik:techtalents2020@connext-en64e.mongodb.net/test?retryWrites=true&w=majority"
app.config['SECRET_KEY'] = 'thisisasecret'
app.register_blueprint(trip_routes.trips_bp)
app.register_blueprint(user_routes.user_bp)
app.register_blueprint(reservation_routes.reservation_bp)
app.register_blueprint(event_routes.event_bp)

# Serve App
@app.route('/')
def index():
    return render_template('index.html')

# Run Server
if __name__ == '__main__':
    app.run(debug=True, port=port)
