
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
        

        const x = null  
        const y = null

        const player = new Image();
        player.onload = () => {
            this.ctx.drawImage(player, 0, 0, 32, 45, 1, 0, 60, 60  )
        }
        player.src = "Assets\\Characters\\HeroBroke.png"
        

        let element = player
        move(element).withArrowKeys(x, y, player)


    }
}
