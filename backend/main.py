import sys
import traceback
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mecademicpy import rbt
from mecademicpy import robot_classes

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080"
]

app.add_middleware(
    CORSMiddleware, 
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

###########################################################
# general command thing
###########################################################
from pydantic import BaseModel
from typing import List

from ValidChecker import SixArgCommand
class SixArgCommandBody(BaseModel):
    name: str
    arguments: List[float]

def checkSixArgCommand(body: SixArgCommandBody):
    try: 
        assert body.name in SixArgCommand, "Invalid Six Argument command! Not adding to commands."
        assert len(body.arguments) == 6, "Invalid amount of arguments!"
    except AssertionError as errmsg: 
        return {"success": False, "error": errmsg}
    return {"success": True}

@app.post("/robot/SixArgCommand")
async def run_command(cmd: SixArgCommandBody):
    result = checkSixArgCommand(cmd)
    if result.success:
        cmd = f"{cmd.name}({cmd.arguments[0]},{cmd.arguments[1]},{cmd.arguments[2]},{cmd.arguments[3]},{cmd.arguments[4]},{cmd.arguments[5]})"
        print("Executing: ", cmd)
        return {"success": True, "command": cmd}
    else:
        return {"success": False, "error": result.error}