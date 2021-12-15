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

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y) 
        this.isLoaded && ctx.drawImage(this.image, 0, 0, 32, 45, x, y, 60, 60)
    }
}