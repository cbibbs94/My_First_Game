const utils = {
    // withGrid(n) {
    //     return n *32;
    // },

    asGridCoord(x,y) {
        return `${x},${y}`
    },

    nextPosition(initialX, initialY, direction) {
        let x = initialX;
        let y = initialY;
        const size = 16;
        if (direction === 'left') {
            x -= size;
        }
        else if (direction === "right") {
            x += size;
        }
        else if (direction === "up") {
            y -= size;
        }
        else if (direction === "down") {
            y += size;
        }
        return {x,y};
    },
    
    
    //event Helper that creates a custom event that the browsers can recognize and listen to.
    emitEvent(name, detail) {
        const event = new CustomEvent(name, {
            detail
        });
        document.dispatchEvent(event);
    }
}