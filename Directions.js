//can move with arrows or 'wasd'
class DirectionInput {
    constructor() {
        this.heldDirection = [];
        this.map = {
            "ArrowUp": "up",
            "KeyW": "up",
            "ArrowDown": "down",
            "KeyS": "down",
            "ArrowRight": "right",
            "KeyD": "right",
            "ArrowLeft": "left",
            "KeyA": "left",
        }
    }

    get direction () {
        return this.heldDirection[0];
    }


    //Keeps track of what keys are held and not held in order to execute better movement
    init() {
        document.addEventListener("keydown", (e) => {
            const dir = this.map[e.code];
            if(dir && this.heldDirection.indexOf(dir) === -1) {
                this.heldDirection.unshift(dir);
                console.log(this.heldDirections)
            }
        });

        document.addEventListener("keyup", (e) => {
            const dir = this.map[e.code];
            const index = this.heldDirection.indexOf(dir);
            if (index > -1){
                this.heldDirection.splice(index, 1);
                console.log(this.heldDirection)
            }
        })
    }
}