import mecademicpy.robot as MecademicRobot

class RobotHandler: 

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
        
    
