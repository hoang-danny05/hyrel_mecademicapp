const GPIO = require("onoff").Gpio;
const led = new GPIO(37, "out");

function blinkLED() {
    if (led.readSync() === 0) {
        led.writeSync(1);
    } else {
        led.writeSync(0);
    }
}

const bllinkInterval = setInterval(blinkLED, 1000)

setTimeout(() => {
    clearInterval(bllinkInterval);
    led.writeSync(0);
    led.unexport();
}, 5000)
