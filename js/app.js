const UPDATES_JSON = 'data/updates.json';
const VEHICLES_JSON = 'data/vehicles.json';

// Actualizar el año automáticamente
document.getElementById('year').innerText = new Date().getFullYear();

// Función para cargar actualizaciones
async function loadUpdates() {
  try {
    const res = await fetch(UPDATES_JSON);
    if (!res.ok) throw new Error('No se pudo cargar updates');
    const updates = await res.json();

    const list = document.getElementById('updates-list');
    const full = document.getElementById('updates-full');

    const html = updates.map(u => `
      <div class="update">
        <h3>${u.title} <small>(${u.date})</small></h3>
        <p>${u.summary}</p>
      </div>
    `).join('');

    if (list) list.innerHTML = html;
    if (full) full.innerHTML = html;

  } catch (err) {
    console.error('Error cargando updates:', err);
  }
}

// Función para cargar vehículos
async function loadVehicles() {
  try {
    const res = await fetch(VEHICLES_JSON);
    if (!res.ok) throw new Error('No se pudo cargar vehicles.json');
    const vehicles = await res.json();

    const featuredList = document.getElementById('featured-list'); // destacados
    const shopList = document.getElementById('shop-list');         // tienda

    const html = vehicles.map(v => `
      <div class="vehicle">
        <img src="${v.image}" alt="${v.name}">
        <h4>${v.name}</h4>
        <p>${v.description}</p>
        <div class="price">${v.price} €</div>
      </div>
    `).join('');

    if (featuredList) featuredList.innerHTML = html;
    if (shopList) shopList.innerHTML = html;

  } catch (err) {
    console.error("Error cargando vehículos:", err);
  }
}

// Ejecutar las funciones al cargar la página
loadUpdates();
loadVehicles();
