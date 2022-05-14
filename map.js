map = L.map('map', {
    center: [0, 0],
    zoom: 18,
    maxZoom: 19,
    minZoom: 5,
    detectRetina: true,
    zoomControl: false
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.control.zoom({
		position: 'bottomright'
	}).addTo(map);

L.control.scale({position: 'bottomleft'}).addTo(map);

function updateMap (data) {
    if (data.type == 'node') {
        ll = new L.LatLng(data.lat, data.lon);
        map.setView(ll);
        L.marker(ll).addTo(map);
    }
    else if (data.type == 'way') {
        // TODO pick a node, get it from Overpass, set map view
    }
    else if (data.type == 'relation') {
        // TODO pick a member, fetch, pick a node, fetch, set map view
    }
    // TODO: add link in layer attribution to https://www.openstreetmap.org/note/new#map=18/lat/lon
}
