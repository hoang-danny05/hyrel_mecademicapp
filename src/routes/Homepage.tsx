import "../App.css";
import "./Homepage.css";
import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
// import Robot from "../Robot.ts";

type JoystickData = {
  x: String;
  y: String;
  z: String;
  button1: String;
  button2: String;
};

type JoystickPosition = {
  x: number;
  y: number;
  z: number;
};

function format() {
  console.log("hello")
}

// function testGet() {
//   fetch("http://localhost:8000")
//   .then(res => res.json().then(json => console.log(json)))
//   .catch(err => console.error(err))
// }

// async function testPost() {
//   console.log(await api.post("/", {"name": "string"}))
// }

// const robot = new Robot();

// function tryConnecting() {
//   robot.attemptConnect()
// }

// function activate() {
//   if(! robot.connected) {
//     console.error("ROBOT IS NOT CONNECTED")
//     return 
//   }

//   robot.sendString("ActivateRobot")
//     .then((str) => console.log(`Activation: ${str}`))
//   robot.sendString("Home")
//     .then((str) => console.log(`Home: ${str}`))
// }

// function sendDebug() {
//   if(! robot.connected) {
//     console.error("ROBOT IS NOT CONNECTED")
//     return 
//   }

//   robot.sendString("MoveJoints(90, 0, 0, 0, 0, 0)")
//     .then((str) => console.log(`MoveJoints: ${str}`))
// }

const Homepage = () => {
  const [count, setCount] = useState(0);
  const [controlling, setControlling] = useState(false);

  let data: JoystickData;


  return (
    <>
      <div className="flex flex-row justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mecademic Robot App</h1>
      <div className="status">RobotConnection, RobotActivated</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={format}>Template</button>
        {/* <button onClick={tryConnecting}>Attempt Connection</button>
        <button onClick={activate}>ActivateAndHome</button>
        <button onClick={sendDebug}>send debug stuff</button> */}
        <button onClick={() => {setControlling(!controlling);}}>{controlling? "Stop Controlling" : "Start Controlling"} </button>
        <br />
        <label>Speed: </label>
        <input type="text"></input>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Homepage