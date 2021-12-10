// This is going to be the start of the main functions.

// need to create an actual init function and keep in mind JS 

(function () {

    const gameBoard = new Gameboard({
        element: document.querySelector(".game-container")
    });
    gameBoard.init();
})();