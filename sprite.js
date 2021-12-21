class Sprite {
    constructor(config) {
        
        //set up image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }
        
        
        //Shadow
        // this.shadow = new Image()
        // this.useShadow = true;
        // if (this.useShadow) {
        //     this.shadow.src = null;
        // } 
        // this.shadow.onload = () => {
        //     this.isShadowLoaded = true;
        // }

        

        // Animation and Sprite Initial state
        this.animation = config.animation || {
            "idleDown": [ [0, 0] ],
            "idleLeft": [ [0,1] ],
            "idleRight": [ [0,2] ],
            "idleUp": [ [0,3] ],
            "walkDown": [ [1,0], [0,0], [3,0], [0,0] ],
            "walkLeft":[ [1,1], [0,1], [3,1], [0,1] ],
            "walkRight": [ [1,2], [0,2], [3,2], [0,2] ],
            "walkUp": [ [1,3], [0,3], [3,3], [0,3] ]  

        }

        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        //Was supposed to control frame progress and  how fast naimation looked - not currently working as expected, does not control the speed of animation

        this.animationFrameLimit = config.animationFrameLimit || 16;
        this.animationFrameProgress = this.animationFrameLimit;

        //game object
        this.gameObject = config.gameObject;
    }
    
    //Grabs the Frame browser is currently on 
    get frame() {
        return this.animation[this.currentAnimation][this.currentAnimationFrame];
    }


   //Animation for Sprite Movement
    setAnimation(key){
        if (this.currentAnimation !== key) {
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }


    updateAnimationProgress() {
        //downtick Frame Progress
        if(this.aniamtionFrameProgress > 0 ) {
            this.animationFrameProgress -= 1;
            return;
        }

        //reset the counter
        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;
        if (this.frame === undefined) {
            this.currentAnimationFrame = 0;
        }
    }


    //Draws the content to the screen
    draw(ctx, cameraPerson) {
        const x = this.gameObject.x  
        const y = this.gameObject.y


        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y) 

        const [frameX, frameY] = this.frame;

        this.isLoaded && ctx.drawImage(this.image, frameX * 32, frameY * 49 , 32, 45, x, y, 32, 32)

        this.updateAnimationProgress();
    }
}