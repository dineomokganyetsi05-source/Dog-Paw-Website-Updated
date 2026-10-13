// Leaflet map: approximate service-area markers, not an office address.
document.addEventListener("DOMContentLoaded", () => {
  const mapElement = document.getElementById("service-map");
  if (!mapElement || typeof L === "undefined") return;
  const map = L.map(mapElement).setView([-26.20, 28.30], 10);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);
  L.marker([-26.211, 28.259]).addTo(map)
    .bindPopup("<strong>Boksburg / East Rand</strong><br>Dog Paw's base and primary service area (general area marker).");
  L.marker([-26.16, 27.90]).addTo(map)
    .bindPopup("<strong>West Rand</strong><br>Planned expansion area; current service availability is not confirmed.");
});
