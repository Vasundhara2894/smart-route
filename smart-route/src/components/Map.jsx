import React, { useRef, useEffect, useState } from 'react';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';
import * as ttapi from '@tomtom-international/web-sdk-services';

function Map() {
  const mapElement = useRef();
  const mapInstance = useRef(null);
  const [sourceQuery, setSourceQuery] = useState('');
  const [destinationQuery, setDestinationQuery] = useState('');
  const [sourcePosition, setSourcePosition] = useState(null);
  const [destinationPosition, setDestinationPosition] = useState(null);
  const [routeLayers, setRouteLayers] = useState([]);
  const API_KEY = 'ZyE651ie3JVxkgHqKQmWjD4eyC6GtTSP'; // <-- Replace with your key

  useEffect(() => {
    mapInstance.current = tt.map({
      key: API_KEY,
      container: mapElement.current,
      center: [-74.0060, 40.7128],
      zoom: 13,
    });
    return () => mapInstance.current && mapInstance.current.remove();
  }, []);

  const searchLocation = async (query, isSource) => {
    try {
      const response = await ttapi.services.fuzzySearch({
        key: API_KEY,
        query,
        countrySet: 'US,IN,DE,FR,GB',
      });

      if (response.results.length > 0) {
        const position = response.results[0].position;
        const address = response.results[0].address.freeformAddress;

        new tt.Marker({ color: isSource ? 'green' : 'red' })
          .setLngLat(position)
          .setPopup(new tt.Popup().setHTML(`${isSource ? 'Source' : 'Destination'}: ${address}`))
          .addTo(mapInstance.current);

        if (isSource) setSourcePosition(position);
        else setDestinationPosition(position);
      }
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const clearRoutes = () => {
    routeLayers.forEach(id => {
      if (mapInstance.current.getLayer(id)) mapInstance.current.removeLayer(id);
      if (mapInstance.current.getSource(id)) mapInstance.current.removeSource(id);
    });
    setRouteLayers([]);
  };

  const addRoutesToMap = (routeResults) => {
    const colors = ['#4a90e2'];
    const layers = [];

    routeResults.forEach((route, index) => {
      const coordinates = route.legs[0].points.map(p => [p.longitude, p.latitude]);
      const geoJson = {
        type: 'Feature',
        geometry: { type: 'LineString', coordinates },
      };

      const id = `route-${index}`;
      mapInstance.current.addSource(id, { type: 'geojson', data: geoJson });
      mapInstance.current.addLayer({
        id,
        type: 'line',
        source: id,
        paint: {
          'line-color': colors[index % colors.length],
          'line-width': 6,
          'line-opacity': 0.8,
        },
      });
      layers.push(id);
    });

    setRouteLayers(layers);
  };

  const sendRouteToBackend = () => {
  if (!sourcePosition || !destinationPosition) {
    return alert("Set both source and destination");
  }

  fetch('http://127.0.0.1:5000/api/traffic_analysis', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      start: { lat: sourcePosition.lat, lng: sourcePosition.lng },
      end: { lat: destinationPosition.lat, lng: destinationPosition.lng },
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === 'success') {
        const bestRoute = data.data.routes[0];
        console.log("Route data from backend:", bestRoute);

        const km = (bestRoute.lengthInMeters / 1000).toFixed(2);
        const minutes = (bestRoute.travelTimeInSeconds / 60).toFixed(1);

        alert(`Best route loaded!\nDistance: ${km} km\nETA: ${minutes} mins`);

        clearRoutes();
        addRoutesToMap([{ legs: bestRoute.legs }]);
      } else {
        alert("Backend failed: " + data.message);
      }
    })
    .catch(err => {
      console.error("Backend error:", err);
      alert("Could not reach backend");
    });
};


  return (
    <div>
      
      <input
        type="text"
        value={sourceQuery}
        onChange={e => setSourceQuery(e.target.value)}
        placeholder="Enter source location"
      />
      <button onClick={() => searchLocation(sourceQuery, true)}>Set Source</button>

      <input
        type="text"
        value={destinationQuery}
        onChange={e => setDestinationQuery(e.target.value)}
        placeholder="Enter destination location"
      />
      <button onClick={() => searchLocation(destinationQuery, false)}>Set Destination</button>
      

      <button onClick={sendRouteToBackend}>Submit</button>

      <div ref={mapElement} style={{ height: '500px', width: '100%' }} />
      </div>
   
  );
}

export default Map;
