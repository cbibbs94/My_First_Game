class GameMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.mapImage = new Image();
        this.mapImage.src = config.mapSrc
       
    }

        drawMapImage(ctx) {
            ctx.drawImage(this.mapImage, 0, 0, 700, 390 )
        }
}

window.GameMaps = {
    RoyalRoom: {
        mapSrc: "Assets\\Objects\\Royal Room.png",
        gameObjects: {
            player: new GameObject({
                x: 320,
                y: 300,
            }),
            princess: new GameObject({
                x: 334,
                y: 160,
                src: "Assets\\Characters\\PrincessFormal.png"
            }),
            Villain: new GameObject({
                x: 390,
                y: 300,
                src: 'Assets\\Characters\\RamKing.png'
            })
        }
    },

    SecondRoom: {

    },

    ThirdRoom: {

    }


}