import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

interface LeafletMapProps {
  className?: string;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ className = "" }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // JNU School of Engineering coordinates
    const jnuCoords: [number, number] = [28.53614910079396, 77.1608593147919];

    // Initialize map
    const map = L.map(mapRef.current, {
      center: jnuCoords,
      zoom: 15,
      zoomControl: true,
    });

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add marker for School of Engineering
    const marker = L.marker(jnuCoords).addTo(map);
    marker.bindPopup(`
      <div style="text-align: center;">
        <h3 style="margin: 0 0 8px 0; color: #1e40af; font-weight: bold;">School of Engineering</h3>
        <p style="margin: 0; color: #6b7280; font-size: 14px;">Jawaharlal Nehru University</p>
        <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 12px;">New Delhi, India</p>
      </div>
    `).openPopup();

    // Store map instance for cleanup
    mapInstanceRef.current = map;

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-full rounded-lg ${className}`}
      style={{ minHeight: '384px' }}
    />
  );
};

export default LeafletMap;
  