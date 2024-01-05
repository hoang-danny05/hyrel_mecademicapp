import Robot from "./Robot";

const robot = new Robot();

robot.connectPromise()
    .then(sendCommands)
    .catch((reason) => console.error(reason))

function sendCommands() {
    robot.sendString("ActivateRobot\r\n")
        .then((str) => console.log(str.toString()))
        .catch((reason) => console.error(reason))
    robot.sendString("Home\r\n")
        .then((str) => console.log(str.toString()))
        .catch((reason) => console.error(reason))
    robot.sendString("MoveJoints(90,0,0,0,0,0)\r\n")
        .then((str) => console.log(str.toString()))
        .catch((reason) => console.error(reason))
    robot.sendString("MoveJoints(0,0,0,0,0,0)\r\n")
        .then((str) => console.log(str.toString()))
        .catch((reason) => console.error(reason))
    robot.sendString("GetRtJointPos\r\n")
        .then((str) => console.log(str.toString()))
        .catch((reason) => console.error(reason))
    robot.sendString("MoveJoints(-90,0,0,0,0,0)\r\n")
        .then((str) => console.log(str.toString()))
        .catch((reason) => console.error(reason))
    robot.sendString("MoveJoints(90,0,0,0,0,0)\r\n")
        .then((str) => console.log(str.toString()))
        .catch((reason) => console.error(reason))
    robot.sendString("DeactivateRobot\r\n")
        .then((str) => console.log(str.toString()))
        .catch((reason) => console.error(reason))
}