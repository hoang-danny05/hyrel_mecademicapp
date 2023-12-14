import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type JoystickData = {
  x: String,
  y: String, 
  z: String, 
  button1: String,
  button2: String
}

const flaskURL = "http://localhost:5000"

function sendJoystickData(data: JoystickData) {
  fetch(flaskURL + "/input", {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then((res) => {
      res.json()
        .then((json) => {
          console.log(json)
        })
    })
    .catch((err) => {
      console.log("Error fetching the URL. ")
      console.log(err)
    })
}

function getRobotState() {
  fetch(flaskURL + "/robotstate")
    .then((res) => {
      res.json()
        .then((json) => {
          console.log(JSON.stringify(json))
        })
    })
    .catch((err) => {
      console.error(err)
    })
}

function attemptReconnect() {
  fetch(flaskURL + "/reconnect")
    .then((res) => {
      res.text().then((text) => console.log(text))
    })
}

function activate() {
  fetch(flaskURL + "/activate")
  .then((res) => {
    res.text().then((text) => console.log(text))
  })
}

function App() {
  const [count, setCount] = useState(0)


  let data: JoystickData;

  setInterval(() => {
    const myJoystick = navigator.getGamepads()[0];
    if(myJoystick) {
      data = {
        x: `Axis1: ${myJoystick.axes[0]}`,
        y: `Axis2: ${myJoystick.axes[1]}`,
        z: `Axis3: ${myJoystick.axes[2]}`,
        button1: `Button1: ${myJoystick.buttons[0].pressed}`,
        button2: `Button2: ${myJoystick.buttons[1].pressed}`
      }
  }


  }, 200)
  // console.log(navigator.getGamepads())


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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={getRobotState}>Get Robot State</button>
        <button onClick={attemptReconnect}>Try Reconnecting</button>
        <button onClick={attemptReconnect}>Try Reconnecting</button>
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

export default App
