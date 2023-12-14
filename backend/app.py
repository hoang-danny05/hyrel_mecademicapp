from flask import Flask, jsonify, after_this_request, request
from robot import RobotHandler
import json
from datetime import datetime 

app = Flask(__name__)
robot = RobotHandler()

@app.route("/input", methods = ['POST', 'GET'])
def handle_inputs():
    @after_this_request
    def add_headers(response):
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
    current_time = datetime.now().strftime("%H:%M:%S")
    json_response = {"result": "successful", "time": current_time, "method": request.method}
    print(request.method == "POST")
    raw_data = request.data
    print(raw_data) #raw bytes
    joystick_pos = json.loads(raw_data)
    print(joystick_pos)

    return jsonify(json_response)

@app.route("/robotstate", methods=["GET"])
def return_robostate():
    @after_this_request
    def add_headers(response):
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
    return jsonify({"connected": robot.connected})

@app.route("/reconnect", methods=["GET"])   
def reconnect():
    @after_this_request
    def add_headers(response):
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
    robot.attempt_reconnect()
    return "tried"

@app.route("/activate", methods=["GET"])
def activate():
    @after_this_request
    def add_headers(response):
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
    robot.activate()
    return "bum ba dum"

@app.route("/control", methods=["POST"])
def move_robot():
    @after_this_request
    def add_headers(response):
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
    coordinates = json.loads(request.data)
    try:
        robot.MoveLinRelWrf(coordinates.values, 0,0,0)
    except Exception:
        return jsonify({"error": "Error controlling the robot", "debug": coordinates.values})
    
    
if __name__ == "__main__":
    app.run(port=5000, debug=True)