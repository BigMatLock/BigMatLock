const options = {
    // Required: API key
    key: 'ZIIok3hlfPGrmUhK7Ugv89yzCeMUqrqg', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: -38.65,
    lon: 178.997,
    zoom: 5,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([-38.65, 178.997])
        .setContent('Hello World')
        .openOn(map);
});
