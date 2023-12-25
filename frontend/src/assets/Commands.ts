//does stuff without getting stuff back
export type ZeroArgCommand = 
    "GripperOpen" |
    "GripperClose" | 
    "ActivateRobot" |
    "ActivateSim" | 
    "DeactivateSim" |
    "ClearMotion" |
    "DeactivateRobot" |
    "BrakesOn" |
    "BrakesOff" |
    "Home" |
    "PauseMotion" |
    "ResetError" |
    "ResetPStop" |
    "ResumeMotion" |
    "StopSaving" |
    "SwitchToEtherCAT" |
    "TCPDumpStop" 

//zero arguments but they request data
export type ZeroArgRequest =
    "GetFwVersion"  |
    // "GetProductType" |
    // "GetRobotSerial" |
    //user defined values |
    "GetAutoConf" |
    "GetAutoConfTurn" |
    "GetBlending" |
    "GetCartAcc" |
    "GetCartAngVel" |
    "GetCheckpoint" |
    "GetConf" |
    "GetConfTurn" |
    "GetGripperForce" |
    "GetGripperVel" |
    "GetJointAcc" |
    "GetJointLimitsCfg" |
    "GetJointVel" |
    "GetMonitoringInterval" |
    "GetNetworkOptions" |
    "GetRealTimeMonitoring" |
    "GetTourqueLimits" |
    "GetTourqueLimitsCfg" |
    "GetTRF" |
    "GetVelTimeout" |
    "GetWRF" |
    //real time data that we'll actually use
    "GetCmdPendingCount" |
    "GetJoints" |
    "GetPose" |
    "GetRTC" |
    "GetRtCartPos" |
    "GetRtCartVel" |
    "GetRtConf" |
    "GetRtConfTurn" |
    "GetRtJointPos" |
    "GetRtJointTorq" |
    "GetRtJointVel" |
    "GetRtTargetCartPos" |
    "GetRtTargetCartVel" |
    "GetRtTargetConf" |
    "GetRtTargetConfTurn" |
    "GetRtTargetJointPos" |
    "GetRtTargetJointVel" |
    "GetStatusGripper" |
    "GetStatusRobot" |
    "GetTorqueLimitsSatus" 

export type OneArgCommand = 
    "Delay" |
    "GripperOpen" |
    // "SetAutoConf" |
    // "SetAutoConfTurn" |
    // "SetBlending" |
    // "SetCartAcc" |
    "SetCartAngVel" |
    "SetCartLinVel" |
    "SetCheckpoint" |
    "SetConfTurn" |
    "SetGripperForce" |
    "SetGripperVel" |
    "SetJointAcc" |
    "SetJointVel" |
    // "SetVelTimeout" |
    "EnableEtherNetIP" |
    // "GetModelJointLimits" |
    // "LogTrace" |
    // "SetEOB" |
    // "SetEOM" |
    // "SetJointLimitsCfg" |
    // "SetMonitoringInterval" |
    // "SetOfflineProgramLoop" |
    // "SetRTC" |
    // "StartProgram" |
    // "StartSaving" |
    "TCPDump" 

export type OneArgRequest =
    "GetJointLimits" |
    "GetRtAccelerometer"

export type SixArgumentCommand = 
    "MoveJoints" |
    "MoveJointsVel" |
    "MoveLin" |
    "MoveLinRelTRF" |
    "MoveLinRelWRF" |
    "MoveLinVelTRF" |
    "MoveLinVelWRF" |
    "MovePose" |
    "SetTorqueLimits"
    // "SetTRF"
    // "SetWRF"
    // "SetNetworkOptions"
