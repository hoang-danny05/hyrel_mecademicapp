//does stuff without getting stuff back

export const ZeroArgList = [
    "GripperOpen",
    "GripperClose" ,
    "ActivateRobot",
    "ActivateSim" ,
    "DeactivateSim",
    "ClearMotion",
    "DeactivateRobot",
    "BrakesOn",
    "BrakesOff",
    "Home",
    "PauseMotion",
    "ResetError",
    "ResetPStop",
    "ResumeMotion",
    "StopSaving",
    "SwitchToEtherCAT",
    "TCPDumpStop",
    "GetFwVersion" ,
    // "GetProductType",
    // "GetRobotSerial",
    //user defined values,
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
    //real time data that we'll actually u,
    "GetCmdPendingCount",
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

export const OneArgList = [
    "Delay",
    "GripperOpen",
    // "SetAutoConf",
    // "SetAutoConfTurn",
    // "SetBlending",
    // "SetCartAcc",
    "SetCartAngVel",
    "SetCartLinVel",
    "SetCheckpoint",
    "SetConfTurn",
    "SetGripperForce",
    "SetGripperVel",
    "SetJointAcc",
    "SetJointVel",
    // "SetVelTimeout",
    "EnableEtherNetIP",
    // "GetModelJointLimits",
    // "LogTrace",
    // "SetEOB",
    // "SetEOM",
    // "SetJointLimitsCfg",
    // "SetMonitoringInterval",
    // "SetOfflineProgramLoop",
    // "SetRTC",
    // "StartProgram",
    // "StartSaving",
    "TCPDump" 
]

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

export const SixArgList = [
    "MoveJoints",
    "MoveJointsVel",
    "MoveLin",
    "MoveLinRelTRF",
    "MoveLinRelWRF",
    "MoveLinVelTRF",
    "MoveLinVelWRF",
    "MovePose",
    "SetTorqueLimit",
    // "SetTRF",
    // "SetWRF"
    // "SetNetworkOptions"
]

export type SixArgCommand = 
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

type ArgList = {
    numArgs: number,
    list: Array<string>
}
export const ListOfArgTypes : Array<ArgList> = [
    {
        numArgs: 0,
        list: ZeroArgList
    },
    {numArgs: 1, list: OneArgList},
    {numArgs: 6, list: SixArgList}
]
// ######################################################################
// LIST OF THE MAIN CATEGORIES OF COMMANDS
// ######################################################################
export const MovementInstructions = [
    "MoveJoints",
    "MoveLinRelWRF",
    "MoveLinRelTRF",
    "MovePose",
    //setting speed
    "SetCartAngVel",
    "SetCartLinVel",
    "SetGripperForce",
    "SetGripperVel",
    "SetJointAcc",
    "SetJointVel",
    "BrakesOn",
    "BrakesOff",
]


export const Requests = [
    "GetJoints" ,
    "GetPose",
    "GetStatusGripper",
    "GetStatusRobot"
]

export const ControlInstructions = [
    "Delay",
    "GripperOpen",
    "GripperClose",
    "ClearMotion",
    "ResumeMotion",
    "PauseMotion"
]

export const SetupInstructions = [
    "ActivateRobot",
    "DeactivateRobot",
    "Home",
    "ResetError",
    "ResetPStop"
]
//Speeds
//assertVaccumSensorOn


type InstructionType = {
    type: string,
    innerColor: string, 
    borderColor: string,
    instructions: Array<string>
};

export const InstructionTypes : Array<InstructionType> = [
    {
        type: "Movement",
        //blue
        innerColor: "rgb(76, 150, 255)",
        borderColor: "rgb(51, 115, 204)",
        instructions: MovementInstructions
    },
    {
        type: "Requests",
        //red
        innerColor: "rgb(255, 102, 128)",
        borderColor: "rgb(255, 51, 85)",
        instructions: Requests
    }, 
    {
        type: "Control",
        //green
        innerColor: "rgb(89, 192, 89)",
        borderColor: "rgb(56, 148, 56)",
        instructions: ControlInstructions
    },
    {
        type: "Setup",
        //yellow
        innerColor: "rgb(255, 191, 0)",
        borderColor: "rgb(204, 153, 0)",
        instructions: SetupInstructions
    }
]

// ######################################################################
// TYPES FOR UI INSTRUCTIONS 
// ######################################################################

export type SixArgumentInstruction = {
    command: SixArgCommand,
    //take in six numbers :)
    args: [number, number, number, number, number, number]
}

export type OneArgumentInstruction = {
    command: OneArgCommand,
    arg: number
}

export type ZeroArgumentInstruction = {
    command: ZeroArgCommand
}

export type Instruction = SixArgumentInstruction | OneArgumentInstruction | ZeroArgumentInstruction