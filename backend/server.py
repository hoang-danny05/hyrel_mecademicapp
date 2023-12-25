from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from robot import RobotHandler

app = FastAPI()
robot = RobotHandler()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class DebugModel(BaseModel):
    name: str 

@app.get("/")
async def root():
    '''
    debug endpoint of the application
    '''
    return {"status": "Working"}

@app.post("/")
async def root(item: DebugModel):
    '''
    test recieving JSON requests and reflecting them
    ''' 
    return {"test": "success", "your_name": item.name}

@app.get("/robotstate")
async def robot_state():
    '''
    returns whether or not the robot is connected
    
    :returns: object of the robot's state <br />
    :rtype: {status: boolean}
    '''
    return {"status": robot.connected}

@app.post("/command")
async def send_command(command: str):
    """
    Returns a json object if there's an error in the request <br />
    {"error": <error-message>}
    WIP implementation
    """
    return {"reflection": command}
