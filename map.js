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
    }
    else {
        ll = new L.LatLng(data.center.lat, data.center.lon);
    }
    map.setView(ll);
    L.marker(ll).addTo(map);

    map.attributionControl._attributions = {};
    map.attributionControl.addAttribution('&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | ' +
    '<a href="https://www.openstreetmap.org/note/new#map=18/' + data.lat + '/' + data.lon + '" target="_blank">Report a map error</a>')
}
