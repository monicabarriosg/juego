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

// console.log(b00)
//declaro losmjugadoresque voy a utilizar
 let jugadorO = "🍓"; 
 let jugadorX = "🍇";
// fresa es o
 let jugador1 = jugadorX

 const matriz =[
 [b00,b01,b02],
 [b10,b11,b12],
 [b20,b21,b22]
 ]
// console.log(matriz)
let index2;
let cont = 0;

// este for me ayuda a iterar lo que declare dentro de ticTacToe
for (let index = 0; index < ticTacToe.length; index++) {
   
    // esta en la escucha de cada click enlas celdas 
    ticTacToe[index].addEventListener('click', function() {
        
        // ahora bien el jugador va a ser O po ende cuando de click en las celdas O es lo que se va a poner 
        ticTacToe[index].innerHTML = "🍓";

        
        for (let index = 0; index < 30; index++) {
            index2 = Math.floor(Math.random() * 9)
            // Este if es un semaforo si esta vacia la celda entonces la puede usar 
            
            if (ticTacToe[index2].innerHTML != "🍓" && ticTacToe[index2].innerHTML != "🍇") {
                // Si está ocupada, genera un nuevo índice aleatorio y coloca una "x" en ese espacio
                // el por nueve es por la cantidad de espacios
                // math.random para que tire un numero aleatorio
                setTimeout(() => {
                    console.log(ticTacToe[index2]); 
                    ticTacToe[index2].innerHTML = "🍇"
                  }, 1000);
                
                break

            } 
        }   
        if (gane()) {
            return
        }
       
    
    }) 
}

    // funcion para ver el ganador
    function gane() {

        let espacio = ""
        // fichas es solo para qu el for sepa con que va  trabajar de la funcion
        let fichas =[ "🍇", "🍓"]
      for (let index = 0; index < fichas.length; index++) {
        //  espacio = ;

        // console.log();

        //  horizontal
        // es mi parametro de tablero 
         if (b00.innerHTML == fichas[index] && b01.innerHTML == fichas[index] && b02.innerHTML == fichas[index]) {

            
            return alert("Ganaste", fichas[index]);
         }
         
        //  dara true si todos los operandos son true. En caso contrario, será false y brinca al siguiente if .
         if (b10.innerHTML == fichas[index] && b11.innerHTML == fichas[index] && b12.innerHTML == fichas[index] ) {
            return alert("Ganaste", fichas[index]);
         }
        //  igual igual ya que debe cumplirse cada uno 
         if (b02.innerHTML == fichas[index] && b12.innerHTML == fichas[index] && b22.innerHTML == fichas[index]) {
            return alert("Ganaste", fichas[index]);
         }
         ////////////////////////////////////////////////////////////////////////////////////////////
        //  vertical 
        if (b00.innerHTML == fichas[index] && b10.innerHTML == fichas[index] && b20.innerHTML == fichas[index]) {
            return alert("Ganaste", fichas[index]);
        }
        if (b01.innerHTML == fichas[index] && b11.innerHTML == fichas[index] && b21.innerHTML == fichas[index]) {
           return alert("Ganaste", fichas[index]);
        }
        if (b20.innerHTML == fichas[index] && b21.innerHTML == fichas[index] && b22.innerHTML == fichas[index]) {
           return alert("Ganaste", fichas[index]);
        }
       
       /////////////////////////////////////////////////////////////////////////////////////////77
       // diagonales 
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

