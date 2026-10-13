// Dog Paw interactive service-area map
// Boksburg is the current base.
// West Rand is a proposed future expansion area.

document.addEventListener("DOMContentLoaded", () => {
  const mapElement = document.getElementById("service-map");

  // Stop if the map container or Leaflet is unavailable.
  if (!mapElement || typeof L === "undefined") {
    return;
  }

  // Create the map with Boksburg as the main focus.
  const map = L.map(mapElement).setView(
    [-26.211, 28.259],
    10
  );

  // Add the interactive OpenStreetMap layer.
  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }
  ).addTo(map);

  // Boksburg: current base and primary service area.
  const boksburgMarker = L.marker(
    [-26.211, 28.259]
  ).addTo(map);

  boksburgMarker.bindPopup(`
    <strong>Dog Paw NPO — Boksburg</strong><br>
    Current base: 56 Caresbee Road, Mapleton AH, Boksburg.<br>
    <br>
    Dog Paw primarily serves the East Rand and supports
    dogs and pet owners in need.
  `);

  // West Rand: proposed future expansion.
  const westRandMarker = L.marker(
    [-26.16, 27.90]
  ).addTo(map);

  westRandMarker.bindPopup(`
    <strong>West Rand — Proposed Expansion</strong><br>
    Dog Paw hopes to expand its services to this area
    in the future. A West Rand office has not yet
    been confirmed.
  `);

  // Show both markers while keeping Boksburg prominent.
  const serviceAreas = L.featureGroup([
    boksburgMarker,
    westRandMarker
  ]);

  map.fitBounds(serviceAreas.getBounds(), {
    padding: [30, 30],
    maxZoom: 10
  });

  // Ensure the map displays correctly when its container loads.
  setTimeout(() => {
    map.invalidateSize();
  }, 200);
});
