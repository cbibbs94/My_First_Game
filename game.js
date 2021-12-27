// Makes the whole GameBoard 
class Gameboard {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d")
        this.map = null;
    }

    //constantly clears and redraws the map to account for any changes to objects that moved 
    startGameLoop() {
        const step = () => {
            this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);

            // //Establish Camera person - work in progress
            // const cameraPerson = this.map.gameObjects.player

            //update all objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                   arrow: this.directionInput.direction,
                   map: this.map, 
                })
            })
            
            //Draw the Map
            this.map.drawMapImage(this.ctx)
            
            //Draw the OBjects
            Object.values(this.map.gameObjects).sort((a,b) => {
                return a.y - b.y;
            }).forEach(object => {
                object.sprite.draw(this.ctx,);                   
            })
        
            
           requestAnimationFrame(() =>{
                step();
            })
        }
        step();
    }


    init() {
        this.map = new GameMap(window.GameMaps.OrinDale);
        this.map.mountObjects();


        this.directionInput = new DirectionInput();
        this.directionInput.init();

    
        this.startGameLoop();
        // this.map.startCutscene([
        //     { who: "player", type: "walk", direction: "Up" },
        //     { who: "player", type: "walk", direction: "Up"},
        //     { who: "player", type: "walk", direction: "Right"},
        //     { who: "player", type: "walk", direction: "Up"},
        //     { who: "player", type: "walk", direction: "Up"},
        //     { who: "player", type: "walk", direction: "Up"},
        //     { who: "player", type: "walk", direction: "Up"},
        //     {who: "villain", type: "stand", direction: "Up", time: 3300}

            
        // ])
        
     
    }
}
