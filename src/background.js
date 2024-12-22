let background = null;

async function showBackground() {
    let canvas = document.getElementById("background-canvas")
    if (canvas) return
    canvas = document.createElement("canvas")
    canvas.id = "background-canvas"
    document.body.appendChild(canvas)
    const mainColor = window.getComputedStyle(document.body).getPropertyValue("--bs-body-danger")
    const primaryColor = window.getComputedStyle(document.body).getPropertyValue("--bs-info")
    const backgroundColor = window.getComputedStyle(document.body).getPropertyValue("--bs-body-bg")
    const configs = {
        node: canvas,
        mainColor: mainColor,
        primaryColor: primaryColor,
        backgroundColor: backgroundColor
    }
    if (!background) background = new BackgroundPoints(configs)
    else background.setConfigs(configs)
    await background.start()
}


function radiansToDegrees(radians) {
    return radians * (180 / Math.PI)
}

class Vector {
    constructor(x, y) {
        this.x = typeof x === 'number' ? x : 0
        this.y = typeof y === 'number' ? y : 0
    }

    addVector(vector) {
        if (!(vector instanceof Vector)) throw new TypeError();
        this.x += vector.x;
        this.y += vector.y
    }

    mulVector(vector) {
        if (!(vector instanceof Vector)) throw new TypeError();
        return this.x * vector.x + this.y * vector.y
    }

    mul(number) {
        return new Vector(this.x * number, this.y * number)
    }

    rotate(angle) {
        let cs = Math.cos(angle);
        let sn = Math.sin(angle)
        let x = this.x * cs - this.y * sn
        let y = this.x * sn + this.y * cs
        this.x = x;
        this.y = y
    }

    getDistance(vector) {
        return Math.sqrt(
            Math.pow((this.x - vector.x), 2) + Math.pow((this.y - vector.y), 2)
        )
    }

    getLength() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }

    getAngle(vector) {
        let defaultVector = new Vector(0, 1)
        let angle = Math.acos(
            this.x / this.getLength()
            // (this.x * 1 + this.y * 0) / this.getLength()
        )
        // console.log(angle);
        return radiansToDegrees(angle)
    }

}

class AbstractPoint {
    constructor() {
        this._coords = new Vector()
    }

    get x() {
        return this._coords.x
    }

    get y() {
        return this._coords.y
    }

    getDistance(point) {
        if (!(point instanceof AbstractPoint)) throw new TypeError();
        return this._coords.getDistance(point._coords)
    }

    move() {
    }
}

class Point extends AbstractPoint {
    colors = ["#f44", "#4f4", "#4ff"]

    constructor() {
        super()
        this._coords = new Vector(
            Math.random() * window.innerWidth, Math.random() * window.innerHeight
        )
        this._direction = new Vector(Math.random(), Math.random())
        this._direction = new Vector(0, 1)
        this._speed = 3
        this._speed = Math.random() + 1

        this._size = 4 + 3 / this._speed;
        this._color = '#00bcc2'
        this._color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this._neighboors = []

    }

    get angle() {
        return this._speed.getAngle()
    }

    get size() {
        return this._size
    }

    get color() {
        return this._color
    }

    move() {
        // if (this._coords.x > window.innerWidth || this._coords.x < 0) {
        //   this._speed.x = -this._speed.x
        //   this._coords.x = this._coords.x < 0 ? 1 : window.innerWidth - 1
        // }
        // if (this._coords.y < 0 || this._coords.y > window.innerHeight) {
        //   this._speed.y = -this._speed.y
        //   this._coords.y = this._coords.y < 0 ? 1 : window.innerHeight - 1
        // }
        this._direction.rotate((Math.random() - 0.5) * 0.05)
        this._coords.addVector(this._direction.mul(this._speed))

        if (this._coords.x < 0) {
            this._coords.x = window.innerWidth - (this._coords.x * -1)
        } else if (this._coords.x > window.innerWidth) {
            this._coords.x -= window.innerWidth
        }
        if (this._coords.y < 0) {
            this._coords.y = window.innerHeight - (this._coords.y * -1)
        } else if (this._coords.y > window.innerHeight) {
            this._coords.y -= window.innerHeight
        }
    }
}

class MousePoint extends AbstractPoint {
    constructor(node) {
        super();
        this._node = node
        this._coords.x = window.innerWidth / 2
        this._coords.y = window.innerHeight / 2
        this._isDisplayed = false
        this._eventsNodes = [document.body, this._node]
        document.body.addEventListener("mousemove", this._onMove.bind(this))
        document.body.addEventListener("touchmove", this._onMove.bind(this))
        document.body.addEventListener("touchend", this._transiteMouse.bind(this))
        document.body.addEventListener("mouseover", this._transiteMouse.bind(this))
        document.body.addEventListener("mouseout", this._transiteMouse.bind(this))
        document.body.addEventListener("hover", this._transiteMouse.bind(this))
    }

    test(event) {
        console.log(event.type);
        if (!this._eventsNodes.includes(event.target)) return
        for (let touch of event.targetTouches) {
            this._coords.x = touch.pageX
            this._coords.y = touch.pageY
        }
    }

    _onMove(event) {
        if (!this._eventsNodes.includes(event.target)) return
        switch (event.type) {
            case "mousemove":
                this._coords.x = event.offsetX
                this._coords.y = event.offsetY
                break
            case "touchmove":
                this._isDisplayed = true
                for (let touch of event.targetTouches) {
                    this._coords.x = touch.pageX
                    this._coords.y = touch.pageY
                }
                break
        }
    }

    _transiteMouse(event) {
        if (!this._eventsNodes.includes(event.target)) return
        switch (event.type) {
            case "mouseover":
                this._isDisplayed = true;
                break;
            case "mouseout":
                this._isDisplayed = false;
                break;
            default:
                this._isDisplayed = false
        }

    }
}


class BackgroundPoints {

    constructor(configs) {
        this.setConfigs(configs);
        this.ctx = this._node.getContext("2d")
        this._resize()

        this._isWork = false
        this._distances = []
        this._max_distance = 150
        this._fps = 60
        this._mousePoint = new MousePoint(this._node)
        this._setStyles()
        window.addEventListener("resize", this._resize.bind(this))
    }

    setConfigs(configs) {
        this._mainColor = configs.mainColor
        this._primaryColor = configs.primaryColor
        this._node = configs.node
    }

    _resize() {
        this._node.width = window.innerWidth
        this._node.height = window.innerHeight
        this._scale = window.devicePixelRatio
        this._points = []
        const countPoints = Math.round(this._node.width * this._node.height / 10000)
        this._createPoints(countPoints)
    }

    _setStyles() {
        this._node.style.zIndex = "-1"
        this._node.style.top = "0"
        this._node.style.left = "0"
        this._node.style.position = "absolute"
    }

    _draw_line(x, y, xEnd, yEnd, width, color) {
        this.ctx.beginPath()
        this.ctx.moveTo(x, y)
        this.ctx.lineTo(xEnd, yEnd)
        this.ctx.lineWidth = width
        this.ctx.strokeStyle = color
        this.ctx.stroke()
    }

    _draw() {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        this._computeNeighboors();

        for (let distance of this._distances) {
            if (distance.length > this._max_distance) continue
            let lineWidth = 500 / Math.pow(distance.length, 2)
            if (lineWidth > 5) lineWidth = 5
            this._draw_line(
                distance.point.x, distance.point.y,
                distance.anotherPoint.x, distance.anotherPoint.y,
                lineWidth, this._primaryColor
            )
        }

        for (let point of this._points) {
            let distanceToMouse = point.getDistance(this._mousePoint)
            if (distanceToMouse < this._max_distance && this._mousePoint._isDisplayed) {
                let lineWidth = 1
                this._draw_line(
                    point.x, point.y,
                    this._mousePoint.x, this._mousePoint.y,
                    lineWidth, this._mainColor
                )
            }

            continue
            this.ctx.beginPath();
            this.ctx.arc(point.x, point.y, point.size, 0, 2 * Math.PI, false)
            this.ctx.fillStyle = point.color
            this.ctx.fill()

            // this.ctx.stroke();
            if (!(point instanceof Point)) continue
            this.ctx.fillText("   " + parseInt(point._direction.getAngle()), point.x, point.y);
        }
    }

    _computeNeighboors() {
        this._distances = []

        for (let i = 0; i < this._points.length; i++) {
            for (let j = i + 1; j < this._points.length; j++) {
                let distance = this._points[i].getDistance(this._points[j])
                // if (distance < this._max_distance) {
                //   // this._points[i]._neighboors.push
                // }
                this._distances.push({
                    point: this._points[i], anotherPoint: this._points[j],
                    length: distance
                })
            }
        }
    }

    _createPoints(countPoints) {
        for (let x = 0; x < countPoints; x++) {
            this._points.push(new Point(this._width, this._height))
            // console.log(this._points[x].color);
        }
    }


    async start() {
        if (this._isWork) console.warn("Background already started!!!");
        this._isWork = true
        while (this._isWork) {
            for (let point of this._points) point.move()
            this._draw()
            await new Promise(r => setTimeout(r, 1000 / this._fps));
        }
    }

    async stop() {
        if (!this._isWork) console.warn("Background not running!!!");
        this._isWork = false
    }
}

document.addEventListener('DOMContentLoaded', showBackground)