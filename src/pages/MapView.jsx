import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import api from "../services/api";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function MapView() {
  const mapRef = useRef(null);
  const [sounds, setSounds] = useState([]);

  // 1️⃣ Cargar sonidos del backend
  useEffect(() => {
    const fetchSounds = async () => {
      try {
        const { data } = await api.get("/api/sounds");
        setSounds(data);
      } catch (err) {
        console.error("Error cargando sonidos:", err);
      }
    };

    fetchSounds();
  }, []);

  // 2️⃣ Inicializar mapa
  useEffect(() => {
    if (mapRef.current) return;

    const map = L.map("map", {
      zoomControl: false,
    }).setView([41.3851, 2.1734], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // 3️⃣ Crear marcadores cuando lleguen los sonidos
  useEffect(() => {
    if (!mapRef.current) return;

    sounds.forEach((sound) => {
      if (!sound.lat || !sound.lng) return;

      const marker = L.marker([sound.lat, sound.lng]).addTo(mapRef.current);

      // 🔥 AUDIO REAL SERVIDO POR SPRING BOOT
      const popupHTML = `
        <div style="width: 200px;">
          <h3 style="margin: 0 0 6px; font-weight: bold; font-size: 14px;">
            ${sound.title}
          </h3>
          <audio controls style="width: 100%; margin-top: 6px;">
            <source src="http://localhost:8080/api/sounds/audio/${sound.id}" type="audio/mpeg" />
            Tu navegador no soporta audio.
          </audio>
        </div>
      `;

      marker.bindPopup(popupHTML);
    });
  }, [sounds]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2d2153] to-[#241b45] text-white flex flex-col">

      {/* HEADER */}
      <header role="banner">
        <NavBar />
      </header>

      {/* MAIN */}
      <main className="flex-grow px-6 pt-6 pb-10">

        <div className="mt-10 rounded-3xl overflow-hidden shadow-xl relative max-w-5xl mx-auto">

          {/* BUSCADOR FLOTANTE */}
          <div className="absolute z-[500] top-4 left-1/2 -translate-x-1/2 w-[70%]">
            <div className="flex items-center bg-[#1f1a33]/80 backdrop-blur-lg rounded-full px-5 py-3 text-sm shadow-lg">
              <span className="text-red-400 mr-3 text-lg">🔍</span>
              <input
                type="text"
                placeholder="Busca una calle, barrio o lugar…"
                className="w-full bg-transparent outline-none text-white placeholder-gray-300"
              />
            </div>
          </div>

          {/* MAPA */}
          <div id="map" className="w-full h-[70vh] z-[400]"></div>

          {/* CONTROLES */}
          <div className="absolute bottom-6 right-6 flex flex-col gap-3 z-[500]">
            <button
              onClick={() => mapRef.current.zoomIn()}
              className="bg-[#1f1a33]/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-[#352c57]"
            >
              +
            </button>
            <button
              onClick={() => mapRef.current.zoomOut()}
              className="bg-[#1f1a33]/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-[#352c57]"
            >
              –
            </button>
            <button
              onClick={() => mapRef.current.locate()}
              className="bg-[#1f1a33]/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-[#352c57]"
            >
              📍
            </button>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer role="contentinfo">
        <Footer />
      </footer>

    </div>
  );
}
