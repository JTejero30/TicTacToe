let main, casilla, casillaLong

main=document.getElementsByTagName('main')[0];
casilla=document.getElementsByClassName('casilla');
console.log(casilla);
casillaLong=document.getElementsByClassName('casilla').length;

function asignarAtributo() {
    for (let i = 0; i < casillaLong; i++) {
        console.log(casilla[i]);
        
    }
}

// for(c in casilla){

//     casilla[c].textContent='X'
// }



function ponerFicha() {
    for(c in casilla){
        casilla[c].textContent="X"
    }
}

