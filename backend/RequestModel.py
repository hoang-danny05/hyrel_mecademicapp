from pydantic import BaseModel
from typing import List
# commented values will not be used

ZeroArgCommand = [
    "GripperOpen",
    "GripperClose" ,
    "ActivateRobot",
    #"ActivateSim" ,
    #"DeactivateSim",
    "ClearMotion",
    "DeactivateRobot",
    "BrakesOn",
    "BrakesOff",
    "Home",
    "PauseMotion",
    "ResetError",
    #"ResetPStop",
    "ResumeMotion",
    #"StopSaving",
    #"SwitchToEtherCAT",
    #"TCPDumpStop" 
]

class ZeroArgCommandBody(BaseModel):
    name: str

def checkZeroArgCommand(body: ZeroArgCommandBody):
    try: 
        assert body.name in ZeroArgCommand, "Invalid Zero Argument command! Not adding to commands."
    except AssertionError as errmsg: 
        return {"success": False, "error": errmsg}
    return {"success": True}

ZeroArgRequest = [
    "GetFwVersion" ,
    "GetProductType",
    "GetRobotSerial",
    "GetAutoConf",
    "GetAutoConfTurn",
    "GetBlending",
    "GetCartAcc",
    "GetCartAngVel",
    "GetCheckpoint",
    "GetConf",
    "GetConfTurn",
    "GetGripperForce",
    "GetGripperVel",
    "GetJointAcc",
    "GetJointLimitsCfg",
    "GetJointVel",
    "GetMonitoringInterval",
    "GetNetworkOptions",
    "GetRealTimeMonitoring",
    "GetTourqueLimits",
    "GetTourqueLimitsCfg",
    "GetTRF",
    "GetVelTimeout",
    "GetWRF",
    "GetCmdPendingCount",
    # probably will only use this one
    "GetJoints",
    "GetPose",
    "GetRTC",
    "GetRtCartPos",
    "GetRtCartVel",
    "GetRtConf",
    "GetRtConfTurn",
    "GetRtJointPos",
    "GetRtJointTorq",
    "GetRtJointVel",
    "GetRtTargetCartPos",
    "GetRtTargetCartVel",
    "GetRtTargetConf",
    "GetRtTargetConfTurn",
    "GetRtTargetJointPos",
    "GetRtTargetJointVel",
    "GetStatusGripper",
    "GetStatusRobot",
    "GetTorqueLimitsSatus" 
]

class ZeroArgRequestBody(BaseModel):
    name: str

def checkZeroArgRequest(body: ZeroArgRequestBody):
    try: 
        assert body.name in ZeroArgRequest, "Invalid One Argument request!! Not adding to commands."
    except AssertionError as errmsg: 
        return {"success": False, "error": errmsg}
    return {"success": True}

OneArgCommand = [
    "Delay",
    "GripperOpen",
    # // "SetAutoConf",
    # // "SetAutoConfTurn",
    # // "SetBlending",
    # // "SetCartAcc",
    "SetCartAngVel",
    "SetCartLinVel",
    "SetCheckpoint",
    "SetConfTurn",
    "SetGripperForce",
    "SetGripperVel",
    "SetJointAcc",
    "SetJointVel",
    # // "SetVelTimeout",
    "EnableEtherNetIP",
    # // "GetModelJointLimits",
    # // "LogTrace",
    # // "SetEOB",
    # // "SetEOM",
    # // "SetJointLimitsCfg",
    # // "SetMonitoringInterval",
    # // "SetOfflineProgramLoop",
    # // "SetRTC",
    # // "StartProgram",
    # // "StartSaving",
    # "TCPDump" 
]

class OneArgCommandBody(BaseModel):
    name: str
    argument: int

def checkOneArgCommand(body: OneArgCommandBody):
    try: 
        assert body.name in OneArgCommand, "Invalid One Argument command! Not adding to commands."
    except AssertionError as errmsg: 
        return {"success": False, "error": errmsg}
    return {"success": True}

OneArgRequest = [
    "GetJointLimits",
    "GetRtAccelerometer"
]

class OneArgRequestBody(BaseModel):
    name: str
    argument: int

def checkOneArgRequest(body: OneArgRequestBody):
    try: 
        assert body.name in OneArgRequest, "Invalid One Argument request! Not adding to commands."
    except AssertionError as errmsg: 
        return {"success": False, "error": errmsg}
    return {"success": True}


SixArgCommand = [
    "MoveJoints",
    "MoveJointsVel",
    "MoveLin",
    "MoveLinRelTRF",
    "MoveLinRelWRF",
    "MoveLinVelTRF",
    "MoveLinVelWRF",
    "MovePose",
    "SetTorqueLimit",
    # // "SetTR,
    # // "SetWR,
    # // "SetNetworkOptions"
]

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