from flask import Flask, request, jsonify
import os

# Init app
app = Flask(__name__)


@app.route('/')
def index():
    return 'Hello World'


# Run Server
if __name__ == '__main__':
    app.run(debug=True)
