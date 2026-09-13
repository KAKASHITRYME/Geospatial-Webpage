const tamale = [9.4075, -0.8533];

const map = L.map('map', {
  center: tamale,
  zoom: 12,
  zoomControl: false,
  scrollWheelZoom: false
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
  maxZoom: 19
}).addTo(map);

L.control.zoom({ position: 'bottomright' }).addTo(map);

const locationIcon = L.divIcon({
  className: 'kaya-marker',
  html: '<span></span>',
  iconSize: [24, 24],
  iconAnchor: [12, 12]
});

L.marker(tamale, { icon: locationIcon })
  .addTo(map)
  .bindPopup('<strong>Tamale</strong><br>Our field base in northern Ghana.')
  .openPopup();

const focusButton = document.querySelector('#focus-map');
focusButton.addEventListener('click', () => {
  map.flyTo(tamale, 13, { duration: 1.2 });
});

const style = document.createElement('style');
style.textContent = `
  .kaya-marker { align-items: center; background: rgba(229, 140, 91, .22); border-radius: 50%; display: flex; height: 24px !important; justify-content: center; width: 24px !important; }
  .kaya-marker span { background: #e58c5b; border: 3px solid #f4f1e8; border-radius: 50%; box-shadow: 0 0 0 1px #e58c5b; height: 11px; width: 11px; }
  .leaflet-popup-content-wrapper, .leaflet-popup-tip { background: #18251f; color: #f4f1e8; }
  .leaflet-popup-content { font-family: 'DM Mono', monospace; font-size: 11px; line-height: 1.6; }
`;
document.head.appendChild(style);
