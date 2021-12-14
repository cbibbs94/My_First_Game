class Sprite {
    constructor(config) {
        
        //set up image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }
        
        
        // Animation Initial state
        this.animation = config.animation || {
            idleDown: [
                [0,0]
            ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        //game object
        this.gameObject = config.gameObject;
    }

    draw(ctx) {
        const x = this.gameObject.x;
        const y = this.gameObject.y;
        this.isLoaded && ctx.drawImage(this.image, 0, 0, 32, 45, x, y, 60, 60)
    }
}