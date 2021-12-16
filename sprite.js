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

        function newPlayableCharacter(x, y) {
            const element = newImage('assets/green-character/static.gif')
            element.style.zIndex = 1;
        
            function handleDirectionChange(direction) {
                if (direction === null) {
                    element.src = `assets/green-character/static.gif`
                }
                if (direction === 'west') {
                    element.src = `assets/green-character/west.gif`
                }
                if (direction === 'north') {
                    element.src = `assets/green-character/north.gif`
                }
                if (direction === 'east') {
                    element.src = `assets/green-character/east.gif`
                }
                if (direction === 'south') {
                    element.src = `assets/green-character/south.gif`
                }
            }
        
            move(element).withArrowKeys(x, y, handleDirectionChange)
        
            return {
                element: element
            }
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

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y) 
        this.isLoaded && ctx.drawImage(this.image, 0, 0, 32, 45, x, y, 32, 32)
    }
}