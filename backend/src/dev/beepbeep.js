const rpio = require("rpio")

//GPIO.BOARD
//GPIO4 (7) <=> SPEAKER (+)
//GND (6) <=> SPEAKER (-)
rpio.open(7, rpio.OUTPUT)

try {
    rpio.write(7, rpio.HIGH);
    rpio.sleep(1)
    rpio.write(7, rpio.HIGH);
    rpio.sleep(1)
} catch (err) {
    console.error(err);
}