from flask import Flask, request, jsonify, render_template
import os

# Init app
app = Flask(__name__)

# Serve Application
@app.route('/')
def index():
    return render_template('index.html')

# User Routes
@app.route('/api/user', methods=['GET'])
def get_user():
    return 'Route to get a user'

@app.route('/api/user', methods=['POST'])
def post_user():
    return 'Route to create a user'

# Run Server
if __name__ == '__main__':
    app.run(debug=True)
