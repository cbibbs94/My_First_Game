
class Gameboard {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d")
    }



    init() {
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 33, 0, 94, 96, 4, 0, 659, 356)
        };
        image.src = "Assets/Objects/Floral Carpet A.png"
        
        const player = new GameObject({
            x: 123,
            y: 56
        })

        const princess = new GameObject({
            x: 123, 
            y: 100,
            src: "Assets\\Characters\\Princess.png"
        })

        const villian = new GameObject({
            x: 455,
            y: 115,
            src: 'Assets\\Characters\\RamKing.png'
        })

       setTimeout(() => {
           player.sprite.draw(this.ctx);
           princess.sprite.draw(this.ctx);
       },200) 
     
    }
}
