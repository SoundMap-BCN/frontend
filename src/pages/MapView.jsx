import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView() {
  const mapRef = useRef(null);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2d2153] to-[#241b45] text-white px-6 pt-6 pb-10">

      {/* --- AQUI IRÁ EL NAVBAR cuando lo tengas --- */}
      {/* <NavBar /> */}

      {/* MAPA EN CARD REDONDEADO */}
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

        {/* CONTROLES PERSONALIZADOS */}
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
    </div>
  );
}
