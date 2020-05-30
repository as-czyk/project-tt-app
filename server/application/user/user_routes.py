# For Deployment
# from server.settings import *

# For Development
from settings import *
from models import User


# Set up a Blueprint
user_bp = Blueprint('user_bp', __name__,
                    template_folder='templates',
                    static_folder='static')


# User Routes
# '/api/user', methods=['GET']
# Private Route
@user_bp.route('/api/user', methods=['GET'])
@token_required
def get_one_user(current_user):
    """This function GETs one user.

    Keyword-Arguments:
    email -- Unique user email, it is necessary to login
    """
    result = json.loads(User.objects(user_email=request.args.get("email")).exclude("id").to_json())  # FIXME: EMAIL SHOULD BE USER_EMAIL
    if not result:
        return jsonify({'message': 'No user found!'})
    return jsonify({'user': result[0]})


# Delete User
# '/api/user', methods=['DELETE']
# Private Route
@user_bp.route('/api/user', methods=['DELETE'])
@token_required
def delete_user(current_user):
    """This function DELETEs a user from the user collection.

    Keyword-Arguments:
    email -- Unique user email, it is necessary to login
    """
    User.objects(user_email=request.args.get("email")).delete()
    return jsonify({"message": "record deleted"})


# Get All User
# '/api/user', methods=['DELETE'] # FIXME: What is this doing here?
# Private Route
@user_bp.route('/api/allusers', methods=['GET'])
def get_all_user():
    """This function GETs all user in the user collection."""
    return jsonify({'users': json.loads(User.objects().all().exclude("id").to_json())})  # TODO: Is the return that what you wanted?


# User Routes
# '/api/auth', methods=['GET']
# Private Route
@user_bp.route('/api/auth', methods=['GET'])
@token_required
def get_auth_user(current_user):
    """This function GETs the authentication for a user."""
    result = json.loads(User.objects(user_id=current_user["user_id"]).exclude("id").to_json())
    if not result:
        return jsonify({'message': 'No user found!'})
    return jsonify({'user': result[0]})


# Create User
# '/api/user', methods=['GET']
# Public Route
@user_bp.route('/api/user', methods=['POST'])
def create_user():
    """This function POSTs a user into the user collection

    Keyword-Arguments:
    user_id -- This is a unique uuid4 user id, to identify every single user
    username -- This is the users name, it does not have to be unique
    user_email -- Unique user email, it is necessary to login
    user_password -- Users Password, which is hashed with sha256 in the database
    """
    data = request.get_json()
    try:
        email = json.loads(User.objects(user_email=data["user_email"]).exclude("id").only("user_email").to_json())
        if email:
            return make_response({'msg': 'the user already exists'}), 400
        else:
            hashed_password = generate_password_hash(data['user_password'], method='sha256')
            user = User(user_id=str(uuid.uuid4()),
                        username=data["username"],
                        user_email=data["user_email"],
                        user_password=hashed_password,
                        user_account_created=datetime.datetime.utcnow().strftime('%d.%m.%Y %H:%M:%S'),
                        user_last_login=datetime.datetime.utcnow().strftime('%d.%m.%Y %H:%M:%S'))
            user.save()
            token = jwt.encode({'user_id': user['user_id'],
                                'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60)},
                               app.config['SECRET_KEY'])
            return jsonify({'token': token.decode('UTF-8')})
    except:
        return('Server error'), 500

# Login User
# '/api/login', methods=[POST]
# Public Route


@user_bp.route('/api/auth', methods=['POST'])
def auth_user():
    """This function POSTs the authentication.

    Keyword-Arguments:
    user_email -- Unique user email, it is necessary to login
    user_password -- Users Password, which is hashed with sha256 in the database
    """
    data = request.get_json()
    email = data['user_email']
    password = data['user_password']

    if not data or not email or not password:
        return make_response({'msg': 'Please provide valid credentials'},
                             401,
                             {'WWW-Authenticate': 'Basic realm="Login required!"'})

    user = json.loads(User.objects(user_email=data["user_email"]).to_json())
    if not user:
        return make_response({'msg': 'User not found'},
                             401,
                             {'WWW-Authenticate': 'Basic realm="Login required!"'})

    if check_password_hash(user[0]['user_password'], password):
        token = jwt.encode({'user_id': user[0]['user_id'],
                            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60)},
                           app.config['SECRET_KEY'])

        return jsonify({'token': token.decode('UTF-8')})

    return make_response({'msg': 'Please provide valid credentials'},
                         401,
                         {'WWW-Authenticate': 'Basic realm="Login required!"'})
