

 
            // Inicializar el mapa centrado en la ubicación de la Torre Eiffel
    const map = L.map('map').setView([20.6086, -100.3967], 50);

// Añadir el mapa base desde OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
    }).addTo(map);

// Añadir un marcador en la ubicación de la Torre Eiffel
    L.marker([20.6086, -100.3967]).addTo(map)
    .bindPopup('IMI')
    .openPopup();


