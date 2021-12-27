//This Constructs the Playable Character
class Player extends GameObject {
    constructor(config) {
        super(config);
        this.movingProgressRemaining = 0;
        this.isStanding = false;

        this.isPlayerControlled = config.isPlayerControlled || false;

        this.directionUpdate = {
            "Up": ["y", -1],
            "Down": ["y", 1],
            "Left": ["x", -1],
            "Right": ["x", 1],
        }
    }

    //this essentially calls both the updatePosititon and updateSprite methods
    update(state) {
        if (this.movingProgressRemaining > 0) {
        this.updatePosition();
        } else {

            //more cases can be added



            //case: keyboard ready and have arrow pressed
            if(!state.map.isCutScenePlaying && this.isPlayerControlled && state.arrow) {
             this.startBehavior(state, {
                 type: 'walk',
                 direction: state.arrow
                });
            }
            this.updateSprite(state);
        }
    }


    
    startBehavior(state, behavior) {
        //set Character Direction to whatever behavior has
        this.direction = behavior.direction;
        if(behavior.type === "walk") {
            
            //Stop at location if next space isn't free
            if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
                
                behavior.retry && setTimeout(() => {
                    startBehavior(state, behavior)
                }, 10);
                
                return;
            }
            // walk if space is free
            state.map.moveWall(this.x, this.y, this.direction);
            this.movingProgressRemaining = 16;
            this.updateSprite(state);
        }

        if (behavior.type === "stand") {
            this.isStanding = true;
            setTimeout(() => {
                utils.emitEvent("PersonStandComplete", {
                    whoId: this.id
                })
                this.isStanding = false;
            }, behavior.time);
        }
    }

    //this updates the Position
    updatePosition() {
            const [property, change] = this.directionUpdate[this.direction];
            this[property] += change;
            this.movingProgressRemaining -= 1;
        

            if (this.movingProgressRemaining === 0) {
                //Finshed the walk!
                utils.emitEvent("PersonWalkingComplete", {
                    whoId: this.id
                })

            }
    }


    //this updates the sprite animation based on wether or not the sprite is moving
    updateSprite(){
        if(this.movingProgressRemaining > 0) {
            this.sprite.setAnimation("walk"+this.direction);
            return;
        }
        this.sprite.setAnimation("idle"+this.direction);

    }

}