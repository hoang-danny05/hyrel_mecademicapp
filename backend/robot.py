import mecademicpy.robot as MecademicRobot
import traceback
import time
import sys
# import mecademicpy.robot_classes

class RobotHandler: 
    connected: bool
    robot: MecademicRobot.Robot

    def __init__(self):
        self.robot = MecademicRobot.Robot()
        try:
            self.robot.Connect(address="192.168.0.100")
            self.connected = True
        except Exception:
            print("Error connecting to the robot.")
            self.connected = False
    
    def get_state(self):
        return self.connected
        #assumes the robot can't disconnect once connected
    
    def attempt_reconnect(self):
        self.robot = MecademicRobot.Robot()
        try:
            self.robot.Connect(address="192.168.0.100")
            self.connected = True
            print("wooo")
        except Exception:
            print("Error connecting to the robot.")
            pass

    def activate(self):
        self.robot.ActivateAndHome()

    def MoveLinRelWrf(x,y,z,rx,ry,rz):
        self.robot.MoveLinRelWrf(x, y, z, rx, ry, rz)
        
    

#testing robot errors
robot = MecademicRobot.Robot()
robot.Connect("192.168.0.100", disconnect_on_exception=False, enable_synchronous_mode=True)
print("what the actual f")
#connection Error: TimeoutError
#argument error -> ValueError -> DisconnectError
robot.ActivateAndHome()
# try:
#     robot.MoveJoints(0)
# except ValueError:
#     print("caught")
#    print(sys.exception())
# robot.ResetError()
#out of bounds error -> Robot is in error
try:
    robot.MoveLinRelWrf(0, 0, 1000, 0, 0, 0)
except Exception:
    print("ERROR HERE ########################")
    print(sys.exception())
    print("STOP HERE ########################")
    robot.ResetError()
#collision error
#disconnected error 
#controlling error -> mecademicpy.robot_classes.CommunicationError: Connection Error id=3001
robot.MoveJoints(90, 0, 0, 0, 0, 0)
# robot.Delay(1)
# robot.ResetError()
print("disconnecting")
robot.Disconnect()