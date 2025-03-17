// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos =[];


function asignarElementoHTML(elemento, texto) {
    let elementoHTML = document.querySelector(elemento) || document.getElementById(elemento);
    if (elementoHTML) {
        elementoHTML.textContent = texto;
    } else {
        console.error(`Elemento ${elemento} no encontrado.`);
    }
}

function limpiarCaja(){
    document.getElementById('amigo').value ="";
}

function sorteoAmigo(){
    if(listaAmigos.length === 0){
        asignarElementoHTML('h2','No hay amigos en la lista para hacer el sorteo');
        return;
    }
        let aleatorio = Math.floor(Math.random() * listaAmigos.length);
        let amigoSorteado = listaAmigos[aleatorio];

        let resultado = document.getElementById('resultado');
        resultado.textContent = `El afortunado seleccionado es: ${amigoSorteado}`;

        listaAmigos.splice (aleatorio, 1);
        actualizarLista();
        actualizarEstadoBoton();       
    }

function actualizarLista(){
    let lista = document.getElementById ('listaAmigos');
    lista.innerHTML = '';

    listaAmigos.forEach (elemento => {
        let li = document.createElement('li');
        li.textContent = elemento;
        lista.appendChild(li);
    });
}

function reinicio(){
    listaAmigos = [];
    asignarElementoHTML('h2', 'La lista de amigos ha sido reiniciada.¡Puedes agregar mas amigos!');
    document.getElementById ('listaAmigos').innerHTML = "";
    document.getElementById ('resultado').textContent = "";
    actualizarEstadoBoton ();
}

function agregarNombre(){
    asignarElementoHTML('h2', '!Escribe el nombre de tus amigos¡');
    let amigos = document.getElementById('amigo').value.trim();

    if (listaAmigos.includes(amigos)){
        asignarElementoHTML ('h2', 'Este nombre ya esta registrado,escribe otro o escribelo de forma diferente');
        limpiarCaja();
        return;
     }
    if (amigos ===''){
       asignarElementoHTML('h2', 'lo siento, escribie un nombre');
       limpiarCaja();
       return;
     }
        
        listaAmigos.push(amigos);
        actualizarLista();
        asignarElementoHTML('h2', `${amigos} ha sido agregado a la lista.`);
        limpiarCaja();
        actualizarEstadoBoton();
    }
    function actualizarEstadoBoton(){
        document.getElementById('botonSorteo').disabled = listaAmigos.length === 0;
    }

