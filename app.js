let main, casilla, casillaLong, numero, turno, marcador, jugadorX, ganadasX, ganadasO, contador, temp, x
ganadasX = 0;
ganadasO = 0;
contador = 0;

let ganadoras = [
    //filas
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //columnas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonales
    [0, 4, 8],
    [2, 4, 6]
]

main = document.getElementsByTagName('main')[0];
casilla = document.getElementsByClassName('casilla');


function iniciar() {
    turno = true;

    for (let i = 0; i < casilla.length; i++) {
        casilla[i].setAttribute('onclick', `ponerFicha(${i})`);
    }
    main.removeAttribute('class', 'reset')

}
iniciar();






/*funcion ponerFicha
@param numero de casilla
*/

turno = true
console.log(ganar().valueOf());
function ponerFicha(numero) {

    if (turno) {
        casilla[numero].textContent = 'X'
        console.log(turno)
        contador++;
        stop();
        crono();
    } else {
        casilla[numero].textContent = 'O'
        console.log(turno);
        contador++;
        stop();
        crono();
    }
    casilla[numero].removeAttribute('onclick')
    turno = !turno;
    ganar('O');
    ganar('X');
    if (contador == 9) {
        alert('Empate')
        reset();
        iniciar();
    }
}

/*ganar()
@param jugador que es tratado como string X u O y asi comparar fichas de uno y de otro en la misma funcion */

function ganar(jugador) {

    let victoria = false

    let fichas = []
    for (let i = 0; i < casilla.length; i++) {
        if (casilla[i].textContent == jugador) {
            fichas.push(i)
        }
    }
    for (let j = 0; j < ganadoras.length; j++) {
        if (fichas.includes(ganadoras[j][0]) && (fichas.includes(ganadoras[j][1])) && (fichas.includes(ganadoras[j][2]))) {
            setTimeout(function () { iniciar() }, 10);
            setTimeout(function () { reset() }, 200);/*Para que se veala ultima ficha lo retraso un poco*/
            cambiarMarcador()
            victoria = true;


        }
    }
    return victoria;
}


/*****************MARCADOR*******************/
marcador = document.getElementsByClassName('marcador')[0]
jugadorX = document.createElement('div')
jugadorX.setAttribute('class', 'jugadorX')
jugadorX.textContent = `Jugador X: ${ganadasX}`
marcador.appendChild(jugadorX)
jugadorO = document.createElement('div')
jugadorO.setAttribute('class', 'jugadorO')
jugadorO.textContent = `Jugador O: ${ganadasO}`
marcador.appendChild(jugadorO)


function cambiarMarcador() {
    if (turno == true) {//el turno va al reves porque se cambia antes de la funcion ganar
        ganadasO = ganadasO + 1;
        jugadorO.textContent = `Jugador O: ${ganadasO}`
    } else {
        ganadasX = ganadasX + 1;
        jugadorX.textContent = `Jugador X: ${ganadasX}`
    }
}

function reset() {
    contador = 0;
    for (c in casilla) {
        casilla[c].textContent = '';
    }
    main.setAttribute('class', 'reset');

}
/********************TEMPORIZADOR*********************** */

// temporizador=document.getElementsByClassName('temporizador')
temp = document.getElementsByClassName('temporizador')[0]

function crono() {
    x = 6;
    var objeto = setInterval(function () {

        if (x <= 0) {
            x=6
            stop()
        } else {
            x--;
            temp.textContent = x;
        }

    }, 1000);
}
function stop() {
    clearInterval(objeto)
}













