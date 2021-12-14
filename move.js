// function move(element) {
//     element.style.position = 'fixed'

//     function moveToCoords(left, bottom) {
//         element.style.left = left + 'px'
//         element.style.bottom = bottom +'px'
//     }

//     function moveWithArrows(left, bottom, callback) {
//         let direction = null;
//         let x = left;
//         let y = bottom;

//         element.style.left = x +'px'
//         element.style.bottom = y +'px'

        
//         }
        
//         setInterval(movePlayer, 1)

//         document.addEventListener('keydown', function(e){
//             if(e.repeat) return;

//             if(e.key === 'ArrowLeft'){
//                 direction = 'west'
//             }
//             if(e.key === 'ArrowDown') {
//                 direction = 'south'
//             }
//             if(e.key === 'ArrowRight') {
//                 direction = 'east'
//             }
//             if(e.key === 'ArrowUp') {
//                 direction = 'north'
//             }
//             callback(direction)
//         })

//         document.addEventListener('keyup', function(e){
//             direction = null
//             callback(direction)
//         })
//     }
    
//     return {
//         to: moveToCoords,
//         withArrowKeys:moveWithArrows
//     }
// }


