"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet's CSS is loaded

export default function CongestionMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const hotspots = [{ lat: -1.1068, lng: 37.0133, name: "Juja" }];
  const center: LatLngExpression = [-1.1068, 37.0133];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg h-full">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        Congestion Hotspots
      </h2>
      <div className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden">
        <MapContainer
          center={center}
          zoom={14}
          className="w-full h-full"
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {hotspots.map((spot) => (
            <Marker position={[spot.lat, spot.lng]} key={spot.name}>
              <Popup>{spot.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
