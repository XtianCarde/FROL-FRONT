btnReservar = document.querySelector('.botonReserva');

/* function rellenarAliados() {
    const { imagen, description, tipoNegocio, petFriendly, instrucciones, nombre, ubicacion } = infoAliado //destructuracion de datos
    const imgAliado = document.querySelector(".imgAliado");
    const descrip = document.querySelector(".descrip");
    const tpNeg = document.querySelector(".tpNeg");
    const pet = document.querySelector(".pet");
    const instru = document.querySelector(".instrucc");
    let nombreAliado = document.querySelector(".nombreAliado");
    let ubicacionAliado = document.querySelector(".ubicacionAliado");
    imgAliado.innerHTML = `
    <img src="${imagen}" alt="" >
    `
    instru.textContent = `${instrucciones}`
    pet.textContent = `${petFriendly}`
    tpNeg.textContent = `${tipoNegocio}`
    descrip.textContent = `${description}`
    nombreAliado.textContent = `${nombre}`;
    ubicacionAliado.textContent = `${ubicacion}`;
}

rellenarAliados(); */

document.addEventListener('DOMContentLoaded', () => {
    // Recupera el ID de la carta seleccionada del almacenamiento local
    const cardId = JSON.parse(localStorage.getItem('aliado')).id;
    const imgAliado = document.querySelector(".imgAliado");
    const descrip = document.querySelector(".descrip");
    const tpNeg = document.querySelector(".tpNeg");
    const pet = document.querySelector(".pet");
    let nombreAliado = document.querySelector(".nombreAliado");
    let ubicacionAliado = document.querySelector(".ubicacionAliado");
    if (cardId) {
        const url = `http://localhost:8080/api/v1/company/${cardId}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                nombreAliado.innerText = data.nombre;
                ubicacionAliado.innerText = data.direccion;
                tpNeg.innerText = data.servicio;
                descrip.innerText = data.descripcion;
                pet.innerText = data.nit;
                imgAliado.innerHTML = `
                    <img src="${data.urlImg}" alt="" >
                    `
            })
            .catch(error => {
                console.error('Error al realizar la consulta:', error);
            });
    } else {
        console.error('No se encontró ningún ID de carta en el almacenamiento local.');
    }
});

btnReservar.addEventListener("click",()=>{
    let bodie = document.querySelector('.bodie');
    bodie.style.display = "flex";
})