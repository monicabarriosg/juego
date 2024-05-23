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
let reiniciarBtn = document.getElementById("reiniciarBtn");
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
 let index2
//  for (let index = 0; index < ticTacToe.length; index++) {
//     ticTacToe[index].addEventListener('click', function() {
//         // Verificar si el juego ha terminado
//         if (!juegoTerminado) {
//             // Lógica del juego aquí...
//             // Cuando el juego termina, establece juegoTerminado en true
//             if (gane()) {
//                 juegoTerminado = true;
//                 // Remover el event listener de todas las celdas
//                 for (let i = 0; i < ticTacToe.length; i++) {
//                     ticTacToe[i].removeEventListener('click', arguments.callee); // Remover el event listener actual
//                 }
//             }
//         }
//     });
// }

// este for me ayuda a iterar lo que declare dentro de ticTacToe
for (let index = 0; index < ticTacToe.length; index++) {
    // esta en la escucha de cada click en las celdas 
    ticTacToe[index].addEventListener('click', function  () {
        
        // ahora bien el jugador va a ser O por ende cuando de click en las celdas O es lo que se va a poner 
        ticTacToe[index].innerHTML = "O";
        //una bandera en verdadero para iniciar el while
        flag = true;
        //el contador va a empezar en 0 y va a ir sumanso miestras se vaya jugando 
        let cont = 0;
        while (flag) {
            cont++;
            index2 = Math.floor(Math.random() * 9)
            if (ticTacToe[index2].innerHTML != "O" && ticTacToe[index2].innerHTML != "X") {
                //setTime es para que el bot tenga un tiemo para poner la ficha en este caso sera de 1 segundo
                //para no tire de una vez la ficha y parezca que esta calculando donde poner la ficha 
                setTimeout(() => {
                    //console.log(ticTacToe[index2]); 
                    ticTacToe[index2].innerHTML = "X"
                }, 1000);     
                flag = false;
                //termina la funcion y entonces pasa a falso
                //es decir cuando mi contador vea que es igual igual a 9 la bandera cambia a falso
            }else if (cont == 9) {
                flag = false;
            }
        }
        //if para el gane de  mi funcion 
        if (gane()) {
        
              
    
        }
    
    } 
    
    
) 


// console.log()

}


    // funcion para velidar el ganador
    function gane() {
        // esta variable es para que si todas las celdas del tic tac toe estan marcadas ero no se cumplio 
        //ninguna condicion anterior entonces sea un empate
        let marcadas = 0;
        // esta variale es para que el for sepa co que van a jugar
        let fichas = ["X", "O"];
    
        // es for es mi filtro para saber prmedi de las fichas cual es el gane si horizontal vertical o  en diagonal
        for (let index = 0; index < fichas.length; index++) {
            // ganes en horizontal
            if ((b00.innerHTML == fichas[index] && b01.innerHTML == fichas[index] && b02.innerHTML == fichas[index]) ||
                (b10.innerHTML == fichas[index] && b11.innerHTML == fichas[index] && b12.innerHTML == fichas[index]) ||
                (b20.innerHTML == fichas[index] && b21.innerHTML == fichas[index] && b22.innerHTML == fichas[index])) {
                return alert("Ganaste", fichas[index]);
            }
            // ganes en vertical
            if ((b00.innerHTML == fichas[index] && b10.innerHTML == fichas[index] && b20.innerHTML == fichas[index]) ||
                (b01.innerHTML == fichas[index] && b11.innerHTML == fichas[index] && b21.innerHTML == fichas[index]) ||
                (b02.innerHTML == fichas[index] && b12.innerHTML == fichas[index] && b22.innerHTML == fichas[index])) {
                return alert("Ganaste", fichas[index]);
            }
            // ganes de las diagonales
            if ((b00.innerHTML == fichas[index] && b11.innerHTML == fichas[index] && b22.innerHTML == fichas[index]) ||
                (b20.innerHTML == fichas[index] && b11.innerHTML == fichas[index] && b02.innerHTML == fichas[index])) {
                return alert("Ganaste", fichas[index]);
            }
        }
    
        // Verificar si hay empate
        for (let i = 0; i < ticTacToe.length; i++) {
            if (ticTacToe[i].innerHTML !== "") {
                marcadas++;
            }
        }
        // Si todas las celdas están marcadas y no hay ganador, es un empate
        if (marcadas === ticTacToe.length) {
            return alert("Empate");
        }
    }
    

    //   console.log()
    //   console.log();
    ///funcion para mostrar el ganador 
    //darGanador ("ganador" + espacio)
    // function darGanador(ganador) {
    //     document.getElementById("ganaste").innerHTML = ganador 
    //     if (gane()) {
        
    //         ticTacToe[index].removeEventListener('click',function  () {
                        
    //         } );
    
    //      }
    // }
              
            


    
    //boton para borrar el tablero
    reiniciarBtn.addEventListener("click", reiniciarTablero);
    
    //declaro la funcion 
    function reiniciarTablero() {
        //y utilizo este for que toma todo mi tablero y lo vacia al hacer click en el btn
        for (let i = 0; i < ticTacToe.length; i++) {
            ticTacToe[i].innerHTML = "";
        }
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



