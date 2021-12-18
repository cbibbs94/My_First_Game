//sets it all Off 

(function () {

    const gameBoard = new Gameboard({
        element: document.querySelector(".game-container")
    });
    gameBoard.init();
})();