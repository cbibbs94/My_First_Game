//This Constructs the Playable Character
class Player extends GameObject {
    constructor(config) {
        super(config);
        this.movingProgressRemaining = 0;
        this.isPlayerControlled = config.isPlayerControlled || false;

        this.directionUpdate = {
            "up": ["y", -1],
            "down": ["y", 1],
            "left": ["x", -1],
            "right": ["x", 1],
        }
    }

    //this essentially calls both the updatePosititon and updateSprite methods
    update(state) {
        this.updatePosition();
        // this.updateSprite(state);

        if(this.isPlayerControlled && this.movingProgressRemaining === 0 && state.arrow) {
            this.direction = state.arrow;
            this.movingProgressRemaining = 1;
        }
    }

    //this updates the Position
    updatePosition() {
        if (this.movingProgressRemaining > 0) {
            const [property, change] = this.directionUpdate[this.direction]
            this[property] += change;
            this.movingProgressRemaining -= 1;
        }
    }


    //this updates the sprite animation based on wether or not the sprite is moving
    updateSprite(state){
        console.log(this.direction)
        this.sprite.setAnimation("idle"+ this.direction);

        if(this.movingProgressRemaining > 0) {
            this.sprite.setAnimation("walk"+this.direction);
        }
    }

}