const map = L.map("map").setView(
    [8.413360785679169, 124.8246448114502], 15
);

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }
).addTo(map);

const marker = L.marker([8.413360785679169, 124.8246448114502])
    .addTo(map);

marker.bindPopup(
    "<b>Barangay Lunocan</b><p>Welcome to Lunocan!</p>"
);

L.circle([8.413360785679169, 124.8246448114502], {
color: "violet",
fillColor: "#a130ec",
fillOpacity: 0.3,
radius: 500
}).addTo(map);

map.on("click", function(event) {
const lat = event.latlng.lat;
const lng = event.latlng.lng;

L.popup()
.setLatLng(event.latlng)
.setContent(
"Latitude: " + lat.toFixed(5) +
"<br>Longitude: " + lng.toFixed(5)
)
.openOn(map);
});

const locations = [
{ name: "Lawis Canyon", lat: 8.4837532, lng: 124.8407297 },
{ name: "Catholic Church", lat: 8.414035472911674, lng:  124.8248904037355},
{ name: "Lunocan Elementary School", lat: 8.413286823711402, lng: 124.82606202350597 }, 
];

locations.forEach(function(place) {
L.marker([place.lat, place.lng])
.addTo(map)
.bindPopup(place.name);
});

