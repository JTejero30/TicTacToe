let main, casilla, casillaLong, numero, turno, marcador, jugadorX, ganadasX, ganadasO

main = document.getElementsByTagName('main')[0];
casilla = document.getElementsByClassName('casilla');


for (let i = 0; i < casilla.length; i++) {
    casilla[i].setAttribute('onclick', `ponerFicha(${i})`);

}



/*funcion ponerFicha
@param numero de casilla
*/
turno = true
function ponerFicha(numero) {

    do{
    if (turno == true) {
        casilla[numero].textContent = 'X'
        ganar('X');
    } else {
        casilla[numero].textContent = 'O'
        ganar('O');
    }
    casilla[numero].removeAttribute('onclick')
    
    turno = !turno;
}while (!ganar) {
    
}/*no funciona*/ 
}

/*ganar()
@param jugador que es tratado como string X u O y asi comparar fichas de uno y de otro en la misma funcion */ 

function ganar(jugador) {
    let victoria= false
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
    let fichas = []

    for (let i = 0; i < casilla.length; i++) {
        if (casilla[i].textContent == jugador) {
            fichas.push(i)
        }
    }
    for (let j = 0; j < ganadoras.length; j++) {
        if (fichas.includes(ganadoras[j][0])&&(fichas.includes(ganadoras[j][1]))&&(fichas.includes(ganadoras[j][2]))) {
            victoria=true
            alert('ganan')
        }
        
    }
    return victoria
}

/*****************MARCADOR*******************/
marcador=document.getElementsByClassName('marcador')[0]
jugadorX=document.createElement('div')
jugadorX.setAttribute('class','jugadorX')
jugadorX.textContent=`Jugador X: ${ganadasX}`
marcador.appendChild(jugadorX)
jugadorO=document.createElement('div')
jugadorO.setAttribute('class','jugadorO')
jugadorO.textContent=`Jugador O: ${ganadasO}`
marcador.appendChild(jugadorO) 

function cambiarMarcador() {
    
}








