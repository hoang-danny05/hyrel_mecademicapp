import Robot from "./Robot";

const robot = new Robot();

robot.connectPromise()
    .then(sendCommands)
    .catch((reason) => console.error(reason))

function sendCommands() {
    console.log(robot.connected)
    robot.sendString("ActivateRobot")
        .then((str) => console.log(str.toString()))
        .catch((reason) => console.error(reason))
    robot.sendString("Home")
        .then((str) => console.log(str.toString()))
        .catch((reason) => console.error(reason))
}