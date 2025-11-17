const UPDATES_JSON = 'data/updates.json';
const VEHICLES_JSON = 'data/vehicles.json';

document.getElementById('year').innerText = new Date().getFullYear();

async function loadUpdates() {
  try {
    const res = await fetch(UPDATES_JSON);
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
    console.log('Error cargando updates');
  }
}

async function loadVehicles(){
  try{
    const res = await fetch(VEHICLES_JSON);
    const vehicles = await res.json();

    const list = document.getElementById('vehicle-list') || document.getElementById('shop-list');

    const html = vehicles.map(v => `
      <div class="vehicle">
        <img src="${v.image}" alt="${v.name}">
        <h4>${v.name}</h4>
        <p>${v.description}</p>
        <div class="price">${v.price} €</div>
      </div>
    `).join('');

    list.innerHTML = html;

  }catch(err){
    console.log("Error cargando vehículos");
  }
}

loadUpdates();
loadVehicles();
