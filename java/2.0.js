
let ticTacToe = document.getElementsByClassName('celda')

let b00 = document.getElementById("b00");
let b01 = document.getElementById("b01");
let b02 = document.getElementById("b02");
let b10 = document.getElementById("b10");
let b11 = document.getElementById("b11");
let b12 = document.getElementById("b12");
let b20 = document.getElementById("b20");
let b21 = document.getElementById("b21");
let b22 = document.getElementById("b22"); 

// console.log(b00)
 let jugadorO = "❤️"
 let jugadorX = "🍓"

 let jugador1 = jugadorX

 const matriz =[
 [b00,b01,b02],
 [b10,b11,b12],
 [b20,b21,b22]
 ]
// console.log(matriz)
let index2

// este for me ayuda a iterar lo que declare dentro de ticTacToe
for (let index = 0; index < ticTacToe.length; index++) {
   
    // esta en la escucha de cada click enlas celdas 
    ticTacToe[index].addEventListener('click', function() {
        
        // ahora bien el jugador va a ser O po ende cuando de click en las celdas O es lo que se va a poner 
        ticTacToe[index].innerHTML = "❤️";

        // Este if es un semaforo si esta vacia la celda entonces la puede usar 
        if (ticTacToe[index2] != "") {
            // Si está ocupada, genera un nuevo índice aleatorio y coloca una "x" en esa celda
            index2 = Math.floor(Math.random() * 9)
            ticTacToe[index2].innerHTML = "🍓"
        } else {
            // Si no está ocupada, simplemente coloca una "x" en esa celda
            index2 = Math.floor(Math.random() * 9)
            ticTacToe[index2].innerHTML = "🍓"
        }
    
    }) 
    function Gane(maquina,jugador) {
      
        
        
    }























// for (let index = 0; index < ticTacToe.length; index++) {
//     ticTacToe[index].addEventListener("click", function () {
//         ticTacToe[index].innerHTML ="X";
//         if (ticTacToe[index2] === "X") {
//             return
//         } else {
//             alert("gano")
            
//         }
        
//     })

    
// }
}
