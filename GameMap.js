//constructs and draws the map
class GameMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.walls = config.walls || [];
        this.mapImage = new Image();
        this.mapImage.src = config.mapSrc
        this.isCutScenePlaying = true;
       
    }

        drawMapImage(ctx, cameraPerson) {
            ctx.drawImage(this.mapImage, 0, 0, 700, 390 )
        }

        isSpaceTaken(currentX, currentY, direction) {
            const {x, y} = utils.nextPosition(currentX, currentY, direction);
            return this.walls['${x},${y}'] || false;
        }


        mountObjects() {
            Object.keys(this.gameObjects).forEach(key =>{
               
                let object = this.gameObjects[key];
                object.id = key;


                //TODO: need to determine if object needs to be mounted or not
               
                object.mount(this);
            })
        }

        async startCutscene(events) {
            this.isCutScenePlaying = true;
            
            for (let i=0; i < events.length; i++) {
                const eventHandler = new OverworldEvent({
                    event: events[i],
                    map: this,
                })

                await eventHandler.init();
            }

            this.isCutScenePlaying = false;

            //reset npc to idle behavior
            Object.values(this.gameOjects).forEach(object => object.doBehaviorEvent(this))
        }

        addWall(x,y) {
            this.walls[`${x},${y}`] = true;
        }
        
        removeWall(x,y) {
            delete this.walls[`${x},${y}`]
        }

        moveWall(wasX, wasY, direction) {
            this.removeWall(wasX, wasY);
            const {x,y} = utils.nextPosition(wasX, wasY, direction);
            this.addWall(x,y);
        }
        

    }


//Different Rooms that can show up in the canvas along with some defaault objects that spawn when each room is loaded
window.GameMaps = {
    RoyalRoom: {
        mapSrc: "Assets\\Objects\\Royal Room.png",
        gameObjects: {
            player: new Player({
                isPlayerControlled: true,
                x: 320,
                y: 300,
            }),
            princess: new Player({
                x: 334,
                y: 160,
                src: "Assets\\Characters\\PrincessFormal.png",
                behaviorLoop: [
                    {type: "stand", direction: "Down", time: 1500},
                    {type: "stand", direction: "Right", time: 2200},
                    {type: "stand", direction: "Down", time: 800},
                    {type: "stand", direction: "Left", time: 2200},
                ]
            }),
            villain: new Player({
                x: 390,
                y: 300,
                src: 'Assets\\Characters\\RamKing.png',
                behaviorLoop: [
                    {type: "walk", direction: "Right"},
                    {type: "stand", direction: "Left", time: 800},
                    {type: "walk", direction: "Up"},
                    {type: "walk", direction: "Left"},
                    {type: "walk", direction: "Down"},
                ]
            }),
        },
        walls: {
        //    [utils.asGridCoord(156, 240)] : true,
        //    [utils.asGridCoord(390, 300)] : true,
        //    [utils.asGridCoord(334, 160)] : true,
        //    [utils.asGridCoord(655, 240)] : true,
        //    "0,0" : true,
        //    "390, 300" : true,
        //    "160, 334" : true,
        //    "655, 240" : true,
        //    "320, 300" : true,
        } 
    },

    SecondRoom: {

    },

    ThirdRoom: {

    },


}