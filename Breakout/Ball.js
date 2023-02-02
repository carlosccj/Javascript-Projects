
class Ball {
    constructor(ballSize, ballInitialLocation, ballInitialSpeed) {
        this.xAxis = ballInitialLocation
        this.yAxis = 45 // barHeight + barBottomDistance + 1
        this.size = ballSize
        this.acceleration = 0
        this.speedX = ballInitialSpeed + this.acceleration
        this.speedY = ballInitialSpeed + this.acceleration
    }

    setAcceleration(newAcceleration) {
        this.acceleration = newAcceleration
    }
}

export default Ball