from flask import Flask, request, jsonify, render_template

# User Routes
@app.route('/api/user', methods=['GET'])
def get_user():
    return 'Route to get a user'

@app.route('/api/user', methods=['POST'])
def post_user():
    return 'Route to create a user'