# Post Journey 
# Input in der Datenbank bzw. als document speichern 

@app.route('/api/journey', methods=['POST'])
def post_jounrey():
    return 'Route to post a journey'

# Update a journey
@app.route('/api/journey:journeyID', methods=['PUT'])
def put_jounrey():
    return 'Route to put /verändern a journey'

# Delete a journey
@app.route('/api/journey:journeyID', methods=['DELETE'])
def delete_jounrey():
    return 'Delete journey'

# Get Journey
@app.route('/api/journey', methods=['GET'])
def get_jounrey():
    return 'Route to get jounrey based on ID'

@app.route('/api/journey/', methods=['GET'])
def get_journey():
    #query = request.args
    journeylist = client.table.journey
    journeys = []
    journey = journeylist.find()
    for j in journey:
        j.pop("_id")
        journeys.append(j)
    return jsonify(journeys), 200
    
    # journeys = client.table.journey
    # journey = journeys.find(id=id)
    # return jsonify(journeys)
    #return 'Route to get journey based on ID'