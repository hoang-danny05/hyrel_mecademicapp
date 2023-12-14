import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

console.log("Welcome :)")

setInterval(() => {
  const myGamepad = navigator.getGamepads()[0];
  if (myGamepad) {
    console.table({
      x: `Axis1: ${myGamepad.axes[0]}`,
      y: `Axis2: ${myGamepad.axes[1]}`,
      z: `Axis3: ${myGamepad.axes[2]}`,
      button1: `Button1: ${myGamepad.buttons[0].pressed}`,
      button2: `Button2: ${myGamepad.buttons[1].pressed}`
    })
  }
}, 300)