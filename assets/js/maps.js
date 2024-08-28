let map;

async function initMap() {
    // The location of Uluru
    const position = { lat: 46.619261, lng: -33.134766 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
        zoom: 3,
        center: position,
        mapId: "MAP_ID",
    });

    // Marker labels
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Locations for the markers
    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }
    ];

    // Create markers
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            map: map,
            title: labels[i % labels.length]
        });
    });

}

initMap();
