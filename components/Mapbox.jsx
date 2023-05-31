import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude], // Set the initial center of the map
      zoom: 12, // Set the initial zoom level
    });

    return () => map.remove(); // Clean up the map instance on unmount
  }, []);

  return <div id="map" style={{ width: '100%', height: '100vh' }}></div>;
};

export default Map;
