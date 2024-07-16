async function listarCards() {
    const conexion = await fetch('http://localhost:3001/productos');
    const conexionConvertida = await conexion.json(); // Asegúrate de await aquí
    return conexionConvertida;
  }
  async function crearCard(nombre, precio, imagen) {
    const conexion = await fetch('http://localhost:3001/productos',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre,
        precio: `${precio}`,
            imagen: imagen
        })
    });
    
    const conexionConvertida= conexion.json();
    return conexionConvertida;

  }

  async function eliminarCard(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return conexion;
}

  export const conexionAPI = {
    listarCards,
    crearCard,
    eliminarCard
  };
  