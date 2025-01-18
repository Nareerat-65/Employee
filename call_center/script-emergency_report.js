let map;
let marker;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 13.736717, lng: 100.523186 }, // Default center (Bangkok)
        zoom: 12
    });

    map.addListener('click', (event) => {
        placeMarker(event.latLng);
    });
}

function placeMarker(location) {
    if (marker) {
        marker.setPosition(location);
    } else {
        marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }
}

function showMap(selectElement) {
    if (selectElement.value === 'google-map') {
        document.getElementById('map').style.display = 'block';
        initMap();
    } else {
        document.getElementById('map').style.display = 'none';
    }
}