import "../App.css";
import "./Homepage.css";
import { useState, useId } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import internal from "node:stream";

// const IP_ADDRESS = "192.168.3.14"
const localhost = "127.0.0.1"
const IP_ADDRESS = "192.168.3.14"
const PORT = 8080

const Homepage = () => {
  const [connected, setConnected] = useState(false);
  const [count, setCount] = useState(0);

  const input_cmd_id = useId()
  const [commandName, setCommandName] = useState("MoveJoints");
  const [args, setArgs] = useState([0.0,0.0,0.0,0.0,0.0,0.0])

  function format() {
    console.log(args)
  }

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

  function command_reset() {
    fetch(`http://${IP_ADDRESS}:${PORT}/robot/command/ResetError`)
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
      name: commandName,
      arguments: args
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

  function new_args(index: number, newValue: number){
    let old_args = Array.from(args);
    old_args[index] = newValue;
    return old_args;
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
        <button onClick={command_reset}>Reset</button>
        <button onClick={command_sixargs}>Test Six Argument</button>
        <br />
        <label htmlFor={input_cmd_id}>Command: </label>
        <input type="text" id={input_cmd_id} value={commandName} onInput={e => setCommandName((e.target as HTMLInputElement).value)}/>
        <br /> 
        <label>Args: </label>
        <input type="number" id="arg1" value={args[0]} 
          onInput={e => {
            setArgs(new_args(0, (parseFloat((e.target as HTMLInputElement).value))))
          }}
          className="w-16"
        />
        <input type="number" id="arg1" value={args[1]} 
          onInput={e => {
            setArgs(new_args(1, (parseFloat((e.target as HTMLInputElement).value))))
          }}
          className="w-16"
        />
        <input type="number" id="arg1" value={args[2]} 
          onInput={e => {
            setArgs(new_args(2, (parseFloat((e.target as HTMLInputElement).value))))
          }}
          className="w-16"
        />
        <input type="number" id="arg1" value={args[3]} 
          onInput={e => {
            setArgs(new_args(3, (parseFloat((e.target as HTMLInputElement).value))))
          }}
          className="w-16"
        />
        <input type="number" id="arg1" value={args[4]} 
          onInput={e => {
            setArgs(new_args(4, (parseFloat((e.target as HTMLInputElement).value))))
          }}
          className="w-16"
        />
        <input type="number" id="arg1" value={args[5]} 
          onInput={e => {
            setArgs(new_args(5, (parseFloat((e.target as HTMLInputElement).value))))
          }}
          className="w-16"
        />

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