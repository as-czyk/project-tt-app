from flask import Flask, render_template

# For deployment
# from server import settings
# from server.application.trips import trip_routes
# from server.application.user import user_routes
# from server.application.reservation import reservation_routes
# from server.application.event import event_routes

# for local use
from application.trips import trip_routes
from application.user import user_routes
from application.reservation import reservation_routes
from application.event import event_routes
from application.home import home_routes
import settings

port = 5000

# Init app
app = Flask(__name__, instance_relative_config=False)
app.config.from_object(settings)
app.register_blueprint(trip_routes.trips_bp)
app.register_blueprint(user_routes.user_bp)
app.register_blueprint(reservation_routes.reservation_bp)
app.register_blueprint(event_routes.event_bp)
app.register_blueprint(home_routes.home_bp)



# Serve App
@app.route("/login")
@app.route('/')
def index():
    return render_template('index.html')


# Run Server
if __name__ == '__main__':
    app.run(debug=True, port=port)
