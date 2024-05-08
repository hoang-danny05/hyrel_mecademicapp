import sys
import traceback
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mecademicpy import robot as rbt
from mecademicpy import robot_classes

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:5173"
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
from RequestModel import ZeroArgCommandBody, checkZeroArgCommand

@app.post("/robot/ZeroArgCommand")
async def ZeroArgCommand(cmd: ZeroArgCommandBody):
    result = checkZeroArgCommand(cmd)
    if result["success"]:
        cmd = f"{cmd.name}()"
        print("Executing: ", cmd)
        return {"success": True, "command": cmd}
    else:
        return {"success": False, "error": str(result["error"])}

from RequestModel import ZeroArgRequestBody, checkZeroArgRequest

@app.post("/robot/ZeroArgRequest")
async def ZeroArgRequest(cmd: ZeroArgRequestBody):
    result = checkZeroArgRequest(cmd)
    if result["success"]:
        cmd = f"{cmd.name}()"
        print("Executing: ", cmd)
        return {"success": True, "command": cmd, "value": "your mom!"}
    else:
        return {"success": False, "error": str(result["error"])}

from RequestModel import OneArgCommandBody, checkOneArgCommand

@app.post("/robot/OneArgCommand")
async def OneArgCommand(cmd: OneArgCommandBody):
    result = checkOneArgCommand(cmd)
    if result["success"]:
        cmd = f"{cmd.name}()"
        print("Executing: ", cmd)
        return {"success": True, "command": cmd}
    else:
        return {"success": False, "error": str(result["error"])}

from RequestModel import OneArgRequestBody, checkOneArgRequest

@app.post("/robot/OneArgRequest")
async def OneArgRequest(cmd: OneArgRequestBody):
    result = checkOneArgRequest(cmd)
    if result["success"]:
        cmd = f"{cmd.name}()"
        print("Executing: ", cmd)
        return {"success": True, "command": cmd, "value": "your mom!"}
    else:
        return {"success": False, "error": str(result["error"])}

from RequestModel import SixArgCommandBody, checkSixArgCommand

@app.post("/robot/SixArgCommand")
async def run_sixarg_command(cmd: SixArgCommandBody):
    result = checkSixArgCommand(cmd)
    if result["success"]:
        cmd = f"{cmd.name}({cmd.arguments[0]},{cmd.arguments[1]},{cmd.arguments[2]},{cmd.arguments[3]},{cmd.arguments[4]},{cmd.arguments[5]})"
        print("Executing: ", cmd)
        return {"success": True, "command": cmd}
    else:
        return {"success": False, "error": str(result["error"])}
