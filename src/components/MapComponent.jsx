import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = new L.DivIcon({
  className: "",
  html: `<div class="bg-brightColor md:w-4 md:h-4 w-2 h-2 rounded-full shadow-md"></div>`,
  iconSize: [16, 16],
});

const locations = [
  { lat: 37.0902, lng: -95.7129, name: "USA" },
  { lat: 55.3781, lng: -3.436, name: "UK" },
  { lat: -14.6048, lng: -59.0625, name: "Latin America" },
  { lat: 56.1304, lng: -106.3468, name: "Canada" },
  { lat: 23.685, lng: 90.3563, name: "Bangladesh" },
  { lat: 33.9391, lng: 67.71, name: "Afghanistan" },
  { lat: 23.8859, lng: 45.0792, name: "KSA" },
  { lat: 25.276987, lng: 55.296249, name: "UAE" },
  { lat: 12.8797, lng: 121.774, name: "Philippines" },
  { lat: -0.7893, lng: 113.9213, name: "Indonesia" },
  { lat: 4.2105, lng: 101.9758, name: "Malaysia" },
  { lat: 38.9637, lng: 35.2433, name: "Turkey" },
  { lat: -8.7832, lng: 34.5085, name: "Africa" },
  { lat: -30.5595, lng: 22.9375, name: "South Africa" },
  { lat: 9.082, lng: 8.6753, name: "Nigeria" },
  { lat: -1.286389, lng: 36.817223, name: "Kenya" },
  { lat: 61.524, lng: 105.3188, name: "Russia" },
  { lat: 35.8617, lng: 104.1954, name: "China" },
  { lat: 31.7917, lng: -7.0926, name: "Morocco" },
  { lat: 33.8869, lng: 9.5375, name: "Tunisia" },
  { lat: 26.3351, lng: 17.2283, name: "Libya" },
  { lat: 32.4279, lng: 53.688, name: "Iran" },
  { lat: 33.2232, lng: 43.6793, name: "Iraq" },
  { lat: 28.3949, lng: 84.124, name: "Nepal" },
  { lat: 7.8731, lng: 80.7718, name: "Sri Lanka" },
];

const FitBounds = ({ locations }) => {
  const map = useMap();
  useEffect(() => {
    if (locations.length) {
      const bounds = L.latLngBounds(locations.map((loc) => [loc.lat, loc.lng]));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [locations, map]);
  return null;
};
const MapComponent = () => {
  return (
    <div className='w-full md:h-screen h-96'>
      <MapContainer
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
        zoomControl={false}
        attributionControl={false}
        className='w-full h-full z-0'
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

        {/* Fit Bounds Component */}
        <FitBounds locations={locations} />

        {/* Markers */}
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.lat, location.lng]}
            icon={customIcon}
          >
            <Tooltip direction='top' offset={[0, -10]} opacity={1}>
              <span className='text-sm font-medium'>{location.name}</span>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
