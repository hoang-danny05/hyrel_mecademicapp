import Robot from "../Robot.ts"

test(
    "adds 1 + 2 to equal 3",
    () => {expect(1 + 2).toBe(3)}
)

test(
    "connect to the robot",
    () => {
        const rb: Robot = new Robot()
        rb.attemptConnect()
        expect(rb.connected).toBe(true)
        rb.disconnect()
    }
)

describe("Integration testing with the robot", 
    () => {
        
    }
)