class GameMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.mapImage = new Image();
        this.mapImage.src = config.mapSrc
        
        // this.lowerImage = new Image();
        // this.lowerImage.src = config.lowerSrc;

        // this.upperImage = new Image();
        // this.upperImage.src - config.upperSrc; 
    }

    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0)
    }

    drawUpperImage(ctx) {
        ctx.drawImage(this.upperImage, 0, 0)
    }

}

// window.GameMaps = {
//     FirstRoom: {
//         mapSrc: 
//     },

//     SecondRoom: {

//     },

//     ThirdRoom: {

//     }


// }