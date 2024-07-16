import { conexionAPI } from './conexionAPI.js'; // Asegúrate de que la ruta sea correcta

const lista = document.querySelector('[data-lista]');

function crearCard(id, nombre, precio, imagen) {
    const card = document.createElement('li');
    card.className = 'card-item';
    card.innerHTML = `
      <li class="card" data-id="${id}">
        <img src="${imagen}" alt="${nombre}" class="card-img" />
        <div class="card-container--info">
          <p>${nombre}</p>
          <div class="card-container--bottom">
            <div class="card-container--value">
              <p>$${precio}</p>
              <button class="btnEliminar"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" /><path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" /></svg></button>
            </div>
          </div>
        </div>
      </li>
    `;
    return card;
  }
  

async function listarCards() {
  try {
    const cardsAPI = await conexionAPI.listarCards();
    lista.innerHTML = ''; // Limpiar la lista antes de volver a llenarla
    cardsAPI.forEach(card => {
      const nuevaCard = crearCard(card.id, card.nombre, card.precio, card.imagen);
      lista.appendChild(nuevaCard);
      const btnEliminar = nuevaCard.querySelector('.btnEliminar');
      btnEliminar.addEventListener('click', () => eliminarCard(card.id));
    });
  } catch (error) {
    console.error('Error al listar las tarjetas:', error);
  }
}

async function eliminarCard(id) {
  try {
    await conexionAPI.eliminarCard(id);
    listarCards(); // Vuelve a listar las tarjetas después de eliminar una
  } catch (error) {
    console.error('Error al eliminar la tarjeta:', error);
  }
}

listarCards();
