import {getEmpresas } from "./api.js";

/*declaracion de carga del documento DOM */
document.addEventListener("DOMContentLoaded", getDataEmpresas);
/*Decalracion de globales*/
const ciudad = document.querySelector('#cdd');
const nombre = document.querySelector('#srv');
let empresas;

async function getDataEmpresas() {
    empresas = await getEmpresas();
    showBarbers(empresas)
}

/* Declaracion de objeto para criterio de búsqueda */
const criterioBusqueda = {
    ciudad: '',
    nombre: ''
}

/* eventListener para capturar los input de buscar*/

ciudad.addEventListener('input', (e) => {
    criterioBusqueda.ciudad = e.target.value
    filterService()
})

nombre.addEventListener('input', (e) => {
    criterioBusqueda.nombre = e.target.value
    filterService()
})


/*funcion mostrar cartas empresas */
function showBarbers(companies) {
    const contenedor = document.querySelector('.cardsContainer');
    limpiar()

    console.log(companies);
    companies.forEach((company) => {
        const { id, urlImg, nombre, direccion} = company;
        const populares = document.createElement('p');
        populares.innerHTML = `
            <div class="card">
                <img src="${urlImg}" class="imgCard" alt="..." ids = "${id}">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="card-text">${direccion}</p>
                </div>
            </div>   
        `;
        contenedor.appendChild(populares);
    })
}

/* declaracion de funcion filterService */
function filterService() {
    const busqueda = empresas
        .filter(filtrarNombre)
        .filter(filtrarCiudad);
    showBarbers(busqueda)
}


/* funcion de filtrado */
function filtrarCiudad(popular) {
    if (criterioBusqueda.ciudad) {
        return popular.ubicacion.toLowerCase() === criterioBusqueda.ciudad.toLowerCase();
    } else {
        return popular;
    }
}

function filtrarNombre(popular) {
    if (criterioBusqueda.nombre) {
        return popular.name.toLowerCase() === criterioBusqueda.nombre.toLowerCase();
    } else {
        return popular;
    }
}

function limpiar() {
    const parrafos = document.querySelectorAll('p');
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].remove();
    }
}

const cards = document.querySelector(".cardsContainer")

cards.addEventListener("click", selectedCard)

function selectedCard(e) {
    console.log(e)
    e.preventDefault();
    if (e.target.classList.contains("imgCard")) {
        const electedCompany = e.target.parentElement.parentElement;
        console.log(electedCompany);
        details(electedCompany);
    }
}

/*seleccionar una carta y redirige a aliados */
let arrayDetails = [];

function details(electedCompany) {
    const detailsCompany = {
        id: electedCompany.querySelector("img").getAttribute("ids")
    };

    arrayDetails = detailsCompany;
    localStorage.setItem('aliado', JSON.stringify(arrayDetails));
    window.location.href = './aliados.html';
}