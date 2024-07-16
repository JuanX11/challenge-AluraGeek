import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearCard(evento) {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        await conexionAPI.crearCard(nombre, precio, imagen);
        
        listarCards();
    } catch (error) {
        console.error('Error al crear la tarjeta:', error);
    }
}

formulario.addEventListener("submit", crearCard);
