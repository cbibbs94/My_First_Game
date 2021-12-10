
class Gameboard {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d")
    }



    // This line of code is not working right now. Image will not load to the screen
    init() {
        const image = new Image();
        image.onlaod = () => {
            this.ctx.drawImage(image, 0, 0)
        };
        image.src = "Assets/Characters/HeroClose.png";
        console.log('loaded')
    }
}