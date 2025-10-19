import { useEffect } from "react";
import Header from "../components/Header"; // adjust this import to your folder structure

export default function AdminPage() {
  useEffect(() => {
    if (!window.L) {
      console.error("Leaflet not loaded!");
      return;
    }

    // Initialize the map
    const map = window.L.map("map", {
      center: [14.5995, 120.9842],
      zoom: 12,
      zoomControl: true,
    });

    // Add base layer
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);


    const marker = window.L.marker([14.5995, 120.9842]).addTo(map);
    marker.bindPopup("<b>Admin Control Center</b><br>Manila, PH").openPopup();

    return () => map.remove();
  }, []);

  return (
     <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100vw",
      height: "100vh",
      margin: 0,
      padding: 0,
      overflow: "hidden",
    }}
  >
    {/* Map fills full screen */}
    <div
      id="map"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        zIndex: 1, // map at base layer
      }}
    ></div>

    {/* Header overlay */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999, // ensure above map but below nothing else
        backgroundColor: "rgba(255,255,255,0.2)", // translucent header
        backdropFilter: "blur(6px)",
        padding: "8px 0",
        pointerEvents: "none", 
      }}
    >
      <Header />
    </div>
  </div>
  );
}
