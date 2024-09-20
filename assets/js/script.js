let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionGastos = [];

// Esta función se invoca al momento de que el usuario hace clic en el boton//
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcionGastos.push(descripcionGasto);

    //alert('Click de usuario');
    actualizarListaGastos();

}

function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById ('totalGastos');
    const descripcionElementos = document.getElementById('descripcionGastos');
    let htmlLista = '';
    let totalGastos = 0;
    let descripcionGastos ='';

    listaNombresGastos.forEach((elemento,posicion)=>{
        const valorGasto = Number (listaValoresGastos [posicion]);

        htmlLista+= `<li>${elemento} - USD ${valorGasto.toFixed(2)} 
           <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        </li>`;
        // Calculamos el valor total de gastos//
        totalGastos += Number (valorGasto);
        
    });


    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    descripcionElementos.innerHTML = descripcionGastos;
    limpiar();
    
}

function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion){
    listaNombresGastos.splice (posicion,1);
    listaValoresGastos.splice (posicion,1);
    actualizarListaGastos ();
}


let limiteGastos = 150;
if (valorGasto > limiteGastos) { 
alert(`El limite de gastos mayores es ${limiteGastos} USD`); 
} else{
alert(`Gasta dentro del limite permitido`);
}



