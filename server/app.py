from flask import Flask, request, jsonify, render_template
import os

# Init app
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


# Run Server
if __name__ == '__main__':
    app.run(debug=True)
