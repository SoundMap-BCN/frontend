import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Upload() {
  const [showModal, setShowModal] = useState(false);
  const [coords, setCoords] = useState({ lat: null, lng: null });

  const mapRef = useRef(null);
  const leafletMap = useRef(null);
  const markerRef = useRef(null);

  // Inicializar mapa SOLO cuando el modal se abre
  useEffect(() => {
    if (showModal && mapRef.current && !leafletMap.current) {
      leafletMap.current = L.map(mapRef.current).setView([41.3874, 2.1686], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
        .addTo(leafletMap.current);

      // PIN DRAGGABLE
      markerRef.current = L.marker([41.3874, 2.1686], {
        draggable: true,
      }).addTo(leafletMap.current);
    }
  }, [showModal]);

  const confirmLocation = () => {
    const { lat, lng } = markerRef.current.getLatLng();
    setCoords({ lat, lng });
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2d1e46] to-[#3b2661] px-8 py-12 text-white">

      <h1 className="text-3xl font-extrabold mb-10">Sube tu Sonido Urbano</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* UPLOAD CARD */}
        <div className="bg-[#372a54] p-6 rounded-xl shadow-lg">

          <div className="border-2 border-dashed border-purple-400/40 rounded-xl p-8 text-center mb-6">
            <p className="text-purple-200 mb-3 font-semibold">Arrastra tu archivo aquí</p>
            <input type="file" id="audioFile" className="hidden" />
            <label
              htmlFor="audioFile"
              className="bg-purple-500/70 hover:bg-purple-500 px-4 py-2 rounded-full cursor-pointer"
            >
              Seleccionar Archivo
            </label>
          </div>

          <label className="text-sm">Título</label>
          <input
            type="text"
            placeholder="Dale un nombre a tu audio"
            className="w-full bg-[#2d2246] mt-1 mb-4 px-4 py-2 rounded-lg"
          />

          <label className="text-sm">Descripción</label>
          <textarea
            placeholder="Describe el ambiente grabado"
            className="w-full bg-[#2d2246] mt-1 px-4 py-2 rounded-lg h-40"
          ></textarea>


          {/* BTN PARA ABRIR EL MODAL */}
          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-purple-600 hover:bg-purple-700 transition mt-6 py-3 rounded-lg font-semibold"
          >
            Seleccionar ubicación
          </button>

          {/* Mostrar ubicación seleccionada */}
          {coords.lat && (
            <p className="text-xs text-purple-200 mt-3">
              Ubicación: {coords.lat.toFixed(5)}, {coords.lng.toFixed(5)}
            </p>
          )}

          <button className="w-full bg-purple-500 text-white font-bold mt-6 py-3 rounded-lg shadow-lg hover:bg-purple-600">
            SUBIR AUDIO
          </button>
        </div>


        {/* INFO: en vez de mapa feo gigante */}
        <div className="bg-[#372a54] p-6 rounded-xl shadow-lg">
          <h2 className="font-semibold mb-3 text-purple-200">Geolocalización</h2>
          <p className="text-xs mb-4 text-gray-300">
            Selecciona la ubicación donde grabaste tu sonido.
          </p>

          <div className="bg-[#2d2246] h-[350px] w-full rounded-xl flex items-center justify-center text-purple-300">
            {coords.lat ? (
              <div>
                <p>📍 Latitud: {coords.lat.toFixed(5)}</p>
                <p>📍 Longitud: {coords.lng.toFixed(5)}</p>
              </div>
            ) : (
              "Sin ubicación seleccionada"
            )}
          </div>
        </div>
      </div>


      {/* MODAL CON MAPA */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#1f1633] p-6 rounded-2xl shadow-xl max-w-xl w-full">

            <h2 className="text-xl font-bold text-purple-200 mb-4 text-center">
              Selecciona la ubicación
            </h2>

            <div
              ref={mapRef}
              className="h-[350px] w-full rounded-xl overflow-hidden mb-4 bg-gray-700"
            ></div>

            <button
              onClick={confirmLocation}
              className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-lg font-semibold text-white"
            >
              Confirmar ubicación
            </button>

            <button
              onClick={() => {
                setShowModal(false);
              }}
              className="w-full mt-3 bg-black/40 hover:bg-black/60 py-2 rounded-lg text-sm"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
