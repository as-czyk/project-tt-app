from flask import Blueprint, render_template
from flask import current_app as app
import pymongo
from flask import Flask, request, jsonify, render_template

client = pymongo.MongoClient(
    "mongodb+srv://yannik:techtalents2020@connext-en64e.mongodb.net/test?retryWrites=true&w=majority")

# Set up a Blueprint
home_bp = Blueprint('home_bp', __name__,
                     template_folder='templates',
                     static_folder='static')


# Serve Application
@home_bp.route('/')
def index():
    return "This is your home screen"