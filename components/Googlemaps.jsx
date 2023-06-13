import React, { useEffect, useState } from 'react';

const Map = () => {
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState('');
    const lat = 44.500000;
    const lng = -89.500000;
  useEffect(() => {
    const fetchGoogleMapsApiKey = async () => {
      try {
        const response = await fetch('/api/googleMapsApiKey');
        const data = await response.json();
        setGoogleMapsApiKey(data.apiKey);
      } catch (error) {
        console.error('Error fetching Google Maps API key:', error);
      }
    };

    fetchGoogleMapsApiKey();
  }, []);

  useEffect(() => {
    if (googleMapsApiKey) {
      const initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: {  lat: lat, lng: lng },
          zoom: 12,
          mapId: 'fbb91aa492f165ea',
        });

        // Create any additional map markers, polylines, etc.
      };

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}`;
      script.defer = true;
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [googleMapsApiKey]);

  return <div id="map" style={{ width: '100%', height: '100vh' }} className='rounded'></div>;
};

export default Map;
