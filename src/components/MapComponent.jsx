// MapComponent.jsx
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Tooltip, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// Custom Icon for the marker
const customIcon = new L.DivIcon({
    className: "",
    html: `<div class="bg-brightColor md:w-4 md:h-4 w-2 h-2 rounded-full shadow-md"></div>`,
    iconSize: [16, 16],
});

// List of marker locations
const locations = [
    { lat: 56.1304, lng: -106.3468, name: "Canada" },
    { lat: 37.0902, lng: -95.7129, name: "USA" },
    { lat: -35.6751, lng: -71.543, name: "Chile" },
    { lat: 23.6345, lng: -102.5528, name: "Mexico" },
    { lat: -14.235, lng: -51.9253, name: "Brazil" },
    { lat: 51.5074, lng: -0.1278, name: "UK" },
    { lat: 46.6034, lng: 1.8883, name: "France" },
    { lat: 51.1657, lng: 10.4515, name: "Germany" },
    { lat: 25.276987, lng: 55.296249, name: "UAE" },
    { lat: 33.2232, lng: 43.6793, name: "Iraq" },
    { lat: 31.9454, lng: 35.9284, name: "Jordan" },
    { lat: 23.8859, lng: 45.0792, name: "Saudi Arabia" },
    { lat: 25.2048, lng: 55.2708, name: "Dubai" },
    { lat: 7.8731, lng: 80.7718, name: "Sri Lanka" },
    { lat: 20.5937, lng: 78.9629, name: "India" },
    { lat: -25.2744, lng: 133.7751, name: "Australia" },
    { lat: 4.2105, lng: 101.9758, name: "Malaysia" },
    { lat: -0.7893, lng: 113.9213, name: "Indonesia" },
    { lat: 12.8797, lng: 121.774, name: "Philippines" },
];

// Utility function to fit bounds based on markers
const FitBounds = ({ locations }) => {
    const map = useMap();
    useEffect(() => {
        if (locations.length) {
            const bounds = L.latLngBounds(locations.map(loc => [loc.lat, loc.lng]));
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [locations, map]);
    return null;
};
const MapComponent = () => {
    return (
        <div className="w-full md:h-screen h-96">
            <MapContainer
                scrollWheelZoom={false}
                dragging={false}
                doubleClickZoom={false}
                zoomControl={false}
                attributionControl={false}
                className="w-full h-full z-0"
            >
                {/* Tile Layer with customized style */}
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {/* Fit Bounds Component */}
                <FitBounds locations={locations} />

                {/* Markers */}
                {locations.map((location, index) => (
                    <Marker
                        key={index}
                        position={[location.lat, location.lng]}
                        icon={customIcon}
                    >
                        <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                            <span className="text-sm font-medium">{location.name}</span>
                        </Tooltip>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapComponent;
