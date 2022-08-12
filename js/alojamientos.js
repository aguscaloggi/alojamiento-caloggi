async function cargarProducto() {
    const res = await fetch('../data.json');
    let auxArray = await res.json();

    let htmlAux = '';
    for (let i = 0; i < auxArray.length; i++) {
        htmlAux =
          htmlAux +
          `<div class="card">
            <h1 class="card__title">${auxArray[i].cardTitle}</h1>
            <img class="card__img" src="../img/alojamiento1.webp" alt="" />
            <div class="card__description">
                <ul class="card__ul">
                    <li class="card__text">${auxArray[i].cardText}</li>
                    <li>${auxArray[i].nroHabitaciones}</li>
                    <li>${auxArray[i].direccion}</li>
                    <li>${auxArray[i].nroTelefono}</li>
                </ul>
            </div>
          </div>`;
    }
    document.getElementById('listadoDeAlojamientos').innerHTML = htmlAux;
}
cargarProducto();