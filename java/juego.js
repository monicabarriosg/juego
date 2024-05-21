// const matriz = [
// [1,2,3],
// [4,5,6],
// [7,8,9]
// ]
// console.log(matriz);
// matriz [0,0] [0,1] = "x"
// console.log(matriz)


// let valor = document.getElementsByClassName("valor");
// console.log (valor);

// valor[0,0].addEventListener("click", function () {
//     valor[0,0].innerHTML = "❤️"
// })  
// console.log(valor)
// if (condition) {
    
// }
let ticTacToe = document.getElementsByClassName("celda");
// conectado a mi html po id
let b00 = document.getElementById("b00");
let b01 = document.getElementById("b01");
let b02 = document.getElementById("b02");
let b10 = document.getElementById("b10");
let b11 = document.getElementById("b11");
let b12 = document.getElementById("b12");
let b20 = document.getElementById("b20");
let b21 = document.getElementById("b21");
let b22 = document.getElementById("b22"); 


//declaro los jugadores que voy a utilizar en este caso representados por la ficha "O" y "X"
 let jugadorO = "O";
 let jugadorX = "X";


//la matriz que va a recorrer el for
 const matriz =[
 [b00,b01,b02],
 [b10,b11,b12],
 [b20,b21,b22]
 ]

let index2;


// este for me ayuda a iterar lo que declare dentro de ticTacToe
for (let index = 0; index < ticTacToe.length; index++) {
   
    // esta en la escucha de cada click en las celdas 
    ticTacToe[index].addEventListener('click', function() {

        
        // ahora bien el jugador va a ser O por ende cuando de click en las celdas O es lo que se va a poner 
        ticTacToe[index].innerHTML = "O";
        
        for (let index = 0; index < 15; index++) {
            index2 = Math.floor(Math.random() * 9)
            
            
            if (ticTacToe[index2].innerHTML != "O" && ticTacToe[index2].innerHTML != "X") {
             
                setTimeout(() => {
                    console.log(ticTacToe[index2]); 
                    ticTacToe[index2].innerHTML = "X"
                  }, 1000);
                
                break
            } 
        }   
        
        if (gane()) {
        
    
        }
    
    } 
    
) 


}

    // funcion para ver el ganador
    function gane() {
        // fichas es solo para qu el for sepa con que va  trabajar de la funcion
        let fichas =[ "X", "O"]
      for (let index = 0; index < fichas.length; index++) {
       

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ganes en horizontal
        //  dara true si todos los operandos son true. En caso contrario, será false y brinca al siguiente if .
        // el if empieza con el nombre del id del div 
         if (b00.innerHTML == fichas[index] && b01.innerHTML == fichas[index] && b02.innerHTML == fichas[index]) {
        // luego de haber buscado si esta posibilidad de gane existe en el tictactoe si es true tira el gane y si no pasa al siguiente if
        //  dara true si todos los operandos son true. En caso contrario, será false y brinca al siguiente if .
            return alert("Ganaste", fichas[index]);
        
         }
         
     
         if (b10.innerHTML == fichas[index] && b11.innerHTML == fichas[index] && b12.innerHTML == fichas[index] ) {
            return alert("Ganaste", fichas[index]);
         }
         
         if (b02.innerHTML == fichas[index] && b12.innerHTML == fichas[index] && b22.innerHTML == fichas[index]) {
            return alert("Ganaste", fichas[index]);
         }
         ////////////////////////////////////////////////////////////////////////////////////////////
        // ganes en vertical 
        

        if (b00.innerHTML == fichas[index] && b10.innerHTML == fichas[index] && b20.innerHTML == fichas[index]) {
            return alert("Ganaste", fichas[index]);
        }
        if (b01.innerHTML == fichas[index] && b11.innerHTML == fichas[index] && b21.innerHTML == fichas[index]) {
           return alert("Ganaste", fichas[index]);
        }
        if (b20.innerHTML == fichas[index] && b21.innerHTML == fichas[index] && b22.innerHTML == fichas[index]) {
           return alert("Ganaste", fichas[index]);
        }
       
       /////////////////////////////////////////////////////////////////////////////////////////
       // ganes en diagonales 
       if (b00.innerHTML == fichas[index] && b11.innerHTML == fichas[index] && b22.innerHTML == fichas[index]) {
        return alert("Ganaste", fichas[index]);
       }
       if (b20.innerHTML == fichas[index] && b11.innerHTML == fichas[index] && b02.innerHTML == fichas[index]) {
        return alert ("Ganaste", fichas[index]);
       }
      }
      
    
    //   console.log()
    //   console.log();
    ///funcion para mostrar el ganador 
    //darGanador ("ganador" + espacio)
    function darGanador(ganador) {
        document.getElementById("ganaste").innerHTML = ganador 
        
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


