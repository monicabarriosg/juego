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

//declaro los jugadores que voy a utilizar
 let jugadorO = "🍓"; 
 let jugadorX = "🍇";
// fresa es o
// uva es x

// la matriz que sera rcorrida 
 const matriz =[
 [b00,b01,b02],
 [b10,b11,b12],
 [b20,b21,b22]
 ]

let index2;


// este for me ayuda a iterar lo que declare dentro de ticTacToe
for (let index = 0; index < ticTacToe.length; index++) {

    ticTacToe[index].addEventListener('click', function() {
        
        ticTacToe[index].innerHTML = "🍓";

        
        for (let index = 0; index < 30; index++) {
            index2 = Math.floor(Math.random() * 9)

            
            if (ticTacToe[index2].innerHTML != "🍓" && ticTacToe[index2].innerHTML != "🍇") {
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
        
       
    
    }
    )
   
}

   
    // funcion para velidar el ganador
    function gane() {
        // esta variable es para que si todas las celdas del tic tac toe estan marcadas ero no se cumplio 
        //ninguna condicion anterior entonces sea un empate
        let marcadas = 0;
        // esta variale es para que el for sepa co que van a jugar
        let fichas = ["🍇", "🍓"];
    
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

























