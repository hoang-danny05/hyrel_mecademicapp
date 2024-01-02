// TEST FILE FOR USING NODE TO ACCESS THE GPIO PINS
// npm i --save rpi-gpio 
// npm install --save @types/rpi-gpio
const gpio = require('rpi-gpio')
//gpio.setMode(gpio.MODE_BCM)
const gpiop = gpio.promise;

const pinNo = 7

function printerr(err) {
	console.log(err)
}

try {
	//pin has not been exported for write => you are dumb and put input instead of output
  gpiop.setup(pinNo, gpiop.DIR_OUT, gpiop.EDGE_NONE)
    .then(() => {
      console.log("turning ON")
      return gpiop.write(pinNo, true)
    })//returns a promise that returns whatever gpiop.write returns
    .catch(printerr)
    .then(() => {
      console.log("waiting...")
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("turning OFF")
          resolve(gpiop.write(pinNo, false))
        }, 2000)
      })
    })
    .then(() => {
      //console.log("template")
    })
    .then(() => {
      console.log("this is the very last thing")
      gpiop.destroy()
        .then(() => console.log("IT WORKED"))
        .catch(() => console.log("something happened, bad destruction :("))
    })
} catch (err) {
  console.log("an error has occured: " + err)
} finally {
  //this destroys it super fast, not good
  gpiop.destroy()
    .then(() => console.log("successfully destroyed"))
    .catch(() => console.log("something happened, bad destruction :("))
}
