import { useState, useEffect } from "react";
import API from "./Backend.ts"
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Setting from "./Setting.tsx";

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

function testGet() {
  fetch("http://localhost:8000")
  .then(res => res.json().then(json => console.log(json)))
  .catch(err => console.error(err))
}

// async function testPost() {
//   console.log(await api.post("/", {"name": "string"}))
// }

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("hello");
  const [controlling, setControlling] = useState(false);

  let data: JoystickData;

  // const updateController = () => {
  //   const myJoystick = navigator.getGamepads()[0];
  //   if (myJoystick) {
  //     data = {
  //       x: `Axis1: ${myJoystick.axes[0]}`,
  //       y: `Axis2: ${myJoystick.axes[1]}`,
  //       z: `Axis3: ${myJoystick.axes[2]}`,
  //       button1: `Button1: ${myJoystick.buttons[0].pressed}`,
  //       button2: `Button2: ${myJoystick.buttons[1].pressed}`,
  //     };
  //     if (controlling) {
  //       console.log("bruh")
  //       const pos: JoystickPosition = {
  //         x: myJoystick.axes[0],
  //         y: myJoystick.axes[1],
  //         z: myJoystick.axes[2],
  //       };
  //       moveLinRelWrf(pos);
  //     }
  //   }
  // }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(`Controlling, State: ${controlling}`)
  //     updateController()
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [controlling])
  // // console.log(navigator.getGamepads())

  return (
    <>
      <div>
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
        <button onClick={() => {console.log(name)}}>output name</button>
        <button onClick={() => {setControlling(!controlling);}}>{controlling? "Stop Controlling" : "Start Controlling"} </button>
        <br />
        <Setting uniqueID="a" setValue={setName} name="Name"/>
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
  );
}

export default App;
