import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

function App() {
  const [location, setLocation] = useState(null);
  const [query, setQuery] = useState("");
  const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  });
  L.Marker.prototype.options.icon = DefaultIcon;
  function handleSearch(e) {
    e.preventDefault();
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
      .then(response => response.json())
      .then(data => {
        setLocation({
          lat: parseFloat(data[0].lat),
          lon: parseFloat(data[0].lon),
          display_name: data[0].display_name
        });
      })
      .catch(error => console.log(error));
  }

  function SearchBar() {
    const map = useMap();

    function handleSubmit(e) {
      handleSearch(e);
      map.flyTo([location.lat, location.lon], 13);
    }

    return (
      <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}
  return (
    <div>
    <MapContainer center={[13.7563, 100.5018]} zoom={13} style={{ height: "500px",width:"1000px" }} locale="th">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      
      {location && (
        <Marker position={[location.lat, location.lon]}>
          <Popup>
            {location.display_name}
          </Popup>
        </Marker>
      )}
      <SearchBar />
    </MapContainer>
    </div>
  );
}
export default App;
