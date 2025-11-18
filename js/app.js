const UPDATES_JSON = 'data/updates.json';
const VEHICLES_JSON = 'data/vehicles.json';

// Poner el año actual en el footer
document.getElementById('year').innerText = new Date().getFullYear();

// Cargar actualizaciones
async function loadUpdates() {
  try {
    const res = await fetch(UPDATES_JSON);
    const updates = await res.json();

    const list = document.getElementById('updates-list');
    const full = document.getElementById('updates-full');

    if (!list && !full) return; // Si no hay contenedores, salir

    const html = updates.map(u => `
      <div class="update">
        <h3>${u.title} <small>(${u.date})</small></h3>
        <p>${u.summary}</p>
      </div>
    `).join('');

    if (list) list.innerHTML = html;
    if (full) full.innerHTML = html;

  } catch (err) {
    console.log('Error cargando updates:', err);
  }
}

// Cargar vehículos SOLO para Shop.html
async function loadVehicles() {
  try {
    const list = document.getElementById('shop-list'); // Solo Shop

    if (!list) return; // Si no existe el contenedor, salir

    const res = await fetch(vehicles_json);
    const vehicles = await res.json();

    const html = vehicles.map(v => `
      <div class="vehicle">
        <img src="${v.image}" alt="${v.name}">
        <h4>${v.name}</h4>
        <p>${v.description}</p>
        <div class="price">${v.price} €</div>
      </div>
    `).join('');

    list.innerHTML = html;

  } catch (err) {
    console.log("Error cargando vehículos:", err);
  }
}

// Ejecutar funciones
loadUpdates();
loadVehicles();
