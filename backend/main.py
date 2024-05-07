import sys
import traceback
from fastapi import FastAPI
from mecademicpy import rbt
from mecademicpy import robot_classes

app= FastAPI()

robot: rbt.Robot = rbt.Robot()

connected = False

@app.get("/")
def return_root():
    return {"test": "successful"}

@app.get("/robot/command/Connect")
def connect():
    try: 
        robot.Connect("192.168.0.100")
        connected = True
    except robot_classes.CommunicationError:
        connected = False
    except TimeoutError:
        connected = False
    except Exception:
        return {"error": "UNKNOWN ROBOT ERROR [ROBOT.CONNECT]"}
    finally:
        return {"connected" : connected}

@app.get("/robot/info/connected")
def getConnected():
    return {"connected" : connected}

@app.get("/robot/command/ActivateAndHome")
def activate_and_home():
    try: 
        robot.ActivateAndHome()
        return {"success": True}
    except Exception:
        return {"error": "UNKNOWN ROBOT ERROR [ROBOT.ACTIVATEANDHOME]"}