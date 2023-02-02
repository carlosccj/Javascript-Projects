
class Block {
    constructor(xAxis, yAxis, blockWidth, blockHeight) {
        this.blockWidth = blockWidth
        this.blockHeight = blockHeight
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
    
    getBlockWidth() {
        return this.blockWidth
    }

    getBlockHeight() {
        return this.blockHeight
    }

    getBottomRight() {
        return this.bottomRight
    }

    getBottomLeft() {
        return this.bottomLeft
    }

    getTopRight() {
        return this.topRight
    }

    getTopLeft() {
        return this.topLeft
    }
}

export default Block