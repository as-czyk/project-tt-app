"""
In order to set your environ creds see here for windows/mac/linux anaconda https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#macos-and-linux
or  here for plain macOS/Linux https://www.youtube.com/watch?v=5iWhQWVXosU
"""

from flask import Flask, request, jsonify, render_template
import os, sys, pymongo

# For deployment
# from server.application.trips import trip_routes
# from server.application.user import user_routes
# from server.application.reservation import reservation_routes
# from server.application.event import event_routes

# for local use
from application.trips import trip_routes
from application.user import user_routes
from application.reservation import reservation_routes
from application.event import event_routes

port = 5000

# Init app
app = Flask(__name__, instance_relative_config=False)

app.config["MONGO_DBNAME"] = os.environ.get("DB")
app.config["MONGO_URI"] = "mongodb+srv://" + os.environ.get("DB_USER") + ":" + os.environ.get("DB_PASSWORD")  + "@connext-en64e.mongodb.net/test?retryWrites=true&w=majority"
app.config['SECRET_KEY'] = 'thisisasecret' # FIXME: What does this stand for?
app.register_blueprint(trip_routes.trips_bp)
app.register_blueprint(user_routes.user_bp)
app.register_blueprint(reservation_routes.reservation_bp)
app.register_blueprint(event_routes.event_bp)

# Serve App
@app.route("/login")
@app.route('/')
def index():
    return render_template('index.html')

# Run Server
if __name__ == '__main__':
    app.run(debug=True, port=port)
