
class Gameboard {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d")
        this.map = null;
    }


    startGameLoop() {
        const step = () => {
            this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
            
            //Draw the Map
            this.map.drawMapImage(this.ctx)
            
            //Draw the OBjects
            Object.values(this.map.gameObjects).forEach(object => {
                // object.update({
                //     arrow: this.directionInput.direction 
                // })
               object.sprite.draw(this.ctx);
           })
            
           requestAnimationFrame(() =>{
                step();
            })
        }
        step();
    }


    init() {
        this.map = new GameMap(window.GameMaps.RoyalRoom);
        this.directionInput.init();
    
        this.startGameLoop();
        
     
    }
}
