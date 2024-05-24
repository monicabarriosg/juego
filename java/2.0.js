let ticTacToe = document.getElementsByClassName("celda");
let reiniciarBtn = document.getElementById("reiniciarBtn");
let turnoActual = document.getElementById("turnoActual");

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
let jugadorO = "🍓";
let jugadorX = "🍇";
//la matriz que va a recorrer el for
const matriz = [
  [b00, b01, b02],
  [b10, b11, b12],
  [b20, b21, b22],
];
let index2;
// Variables para mantener el seguimiento del jugador actual
let jugadorActual = jugadorO;

/////////////////////////////////////////////////////////////////////////////////////////////////
// este for me ayuda a iterar lo que declare dentro de ticTacToe
for (let index = 0; index < ticTacToe.length; index++) {
  // esta en la escucha de cada click en las celdas

  ticTacToe[index].addEventListener("click", function () {
    //operador ternario
    
//condición                                    ? verdadero : falso;
// jugadorActual = (jugadorActual === jugadorO) ? jugadorX : jugadorO;
    jugadorActual = jugadorActual === jugadorO ? jugadorX : jugadorO;
    document.getElementById("turnoActual").innerText =
      "Turno de: " + jugadorActual;
    // ahora bien el jugador va a ser O por ende cuando de click en las celdas O es lo que se va a poner
    ticTacToe[index].innerHTML = "🍓";
    //una bandera en verdadero para iniciar el while
    flag = true;
    //el contador va a empezar en 0 y va a ir sumanso miestras se vaya jugando
    let cont = 0;
    while (flag) {
      cont++;
      index2 = Math.floor(Math.random() * 9);
      if (
        ticTacToe[index2].innerHTML != "🍓" &&
        ticTacToe[index2].innerHTML != "🍇"
      ) {
        //setTime es para que el bot tenga un tiemo para poner la ficha en este caso sera de 1 segundo
        //para no tire de una vez la ficha y parezca que esta calculando donde poner la ficha
        setTimeout(() => {
          //console.log(ticTacToe[index2]);
          ticTacToe[index2].innerHTML = "🍇";
        }, 1000);
        flag = false;
        //termina la funcion y entonces pasa a falso
        //es decir cuando mi contador vea que es igual igual a 9 la bandera cambia a falso
      } else if (cont == 9) {
        flag = false;
      }
    }
    //if para el gane de  mi funcion
    if (gane()) {
    }
  });
}

//////////////////////////////////////////////////////////////////////////////////////////////////
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
    if (
      (b00.innerHTML == fichas[index] &&
        b01.innerHTML == fichas[index] &&
        b02.innerHTML == fichas[index]) ||
      (b10.innerHTML == fichas[index] &&
        b11.innerHTML == fichas[index] &&
        b12.innerHTML == fichas[index]) ||
      (b20.innerHTML == fichas[index] &&
        b21.innerHTML == fichas[index] &&
        b22.innerHTML == fichas[index])
    ) {
      return alert("¡felicidades! " + fichas[index] + "ganaste.");
    }
    /////////////////////////////////////////////
    // ganes en vertical
    if (
      (b00.innerHTML == fichas[index] &&
        b10.innerHTML == fichas[index] &&
        b20.innerHTML == fichas[index]) ||
      (b01.innerHTML == fichas[index] &&
        b11.innerHTML == fichas[index] &&
        b21.innerHTML == fichas[index]) ||
      (b02.innerHTML == fichas[index] &&
        b12.innerHTML == fichas[index] &&
        b22.innerHTML == fichas[index])
    ) {
      return alert("¡felicidades!" + fichas[index] + "ganaste.");
    }
    /////////////////////////////////////////////////
    // ganes de las diagonales
    if (
      (b00.innerHTML == fichas[index] &&
        b11.innerHTML == fichas[index] &&
        b22.innerHTML == fichas[index]) ||
      (b20.innerHTML == fichas[index] &&
        b11.innerHTML == fichas[index] &&
        b02.innerHTML == fichas[index])
    ) {
      return alert("¡felicidades! " + fichas[index] + "ganaste.");
    }
  }
  ///////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////////////
//boton para borrar el tablero
reiniciarBtn.addEventListener("click", reiniciarTablero);

//declaro la funcion
function reiniciarTablero() {
  //y utilizo este for que toma todo mi tablero y lo vacia al hacer click en el btn
  for (let i = 0; i < ticTacToe.length; i++) {
    ticTacToe[i].innerHTML = "";
  }
}

