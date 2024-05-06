import "../App.css";
import "./Homepage.css";
import { useState } from "react";
import useWebSocket from 'react-use-websocket'
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function format() {
  console.log("hello")
}

const Homepage = () => {
  const { sendMessage, lastMessage, readyState } = useWebSocket("ws://localhost:8080")
  const [count, setCount] = useState(0);
  const [controlling, setControlling] = useState(false);

  function handleSendMessage() {
    sendMessage("why won't you work???")
  }

  function printReadyState() {
    console.log(readyState)
  }

  function printLastMessage() {
    console.log(lastMessage)
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
        <button onClick={format}>Template</button>
        <button onClick={printReadyState}>Ready Status</button>
        <button onClick={printLastMessage}>LastMessage</button>
        <button onClick={handleSendMessage}>send message?</button>
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