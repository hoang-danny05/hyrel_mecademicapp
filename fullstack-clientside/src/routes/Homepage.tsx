import "../App.css";
import "./Homepage.css";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

// const IP_ADDRESS = "192.168.3.14"
const localhost = "127.0.0.1"
const IP_ADDRESS = localhost
const PORT = 8080
function format() {
  console.log("hello")
}

const Homepage = () => {
  const [connected, setConnected] = useState(false);
  const [count, setCount] = useState(0);

  function command_Connect() {
    fetch(`http://${IP_ADDRESS}:${PORT}/robot/command/Connect`)
    .then(
      (response) => 
      response.json().then(
        json => setConnected(json.connected)
      )
    )
  }

  function command_ActivateAndHome() {
    fetch(`http://${IP_ADDRESS}:${PORT}/robot/command/ActivateAndHome`)
    // .then(
    //   (response) => 
    //   response.json().then(
    //     json => setConnected(json.successful)
    //   )
    // )
  }

  //async function command_sixargs(command: string, args: [number, number, number, number, number, number]) {
  async function command_sixargs() {
    const data = {
      name: "MoveJoints",
      arguments: [90,0,0,0,0,0]
    }
    const result = await fetch(`http://${IP_ADDRESS}:${PORT}/robot/SixArgCommand`, {
      method: "POST", 
      mode: "cors", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    console.table(result);
  }

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
        {connected
          ? <p>Connected!</p>
          : <button onClick={command_Connect}>Connect to Robot</button>
        }
        <button onClick={command_ActivateAndHome}>Send Home Message</button>
        <button onClick={format}>Template</button>
        <button onClick={command_sixargs}>Test Six Argument</button>
        <br />
        <label for="input-cmd">Command: </label>
        <input type="text" id="input-cmd" />
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