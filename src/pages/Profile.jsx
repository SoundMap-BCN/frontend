import { useEffect, useState } from "react";
import api from "../services/api";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [mySounds, setMySounds] = useState([]);
  const [editing, setEditing] = useState(null);
  const [tempDescription, setTempDescription] = useState("");

  // Cargar usuario
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data);
      } catch (err) {
        console.error("Error cargando usuario:", err);
      }
    };
    fetchUser();
  }, []);

  // Cargar sonidos
  const loadMySounds = async () => {
    try {
      const res = await api.get("/api/sounds/me");
      setMySounds(res.data);
    } catch (err) {
      console.error("Error cargando mis sonidos:", err);
    }
  };

  useEffect(() => {
    loadMySounds();
  }, []);

  // Borrar sonido
  const deleteSound = async (id) => {
    if (!confirm("¿Seguro que quieres eliminar este sonido?")) return;

    try {
      await api.delete(`/api/sounds/${id}`);
      loadMySounds();
    } catch (err) {
      alert("No se pudo borrar.");
    }
  };

  // Guardar descripción sin tocar backend
  const saveDescription = (id) => {
    const updated = mySounds.map((s) =>
      s.id === id ? { ...s, description: tempDescription } : s
    );
    setMySounds(updated);
    setEditing(null);
  };

  if (!user)
    return <div className="text-white text-center mt-20">Cargando…</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2d2153] to-[#241b45] text-white flex flex-col">
      <NavBar />

      <main className="flex-grow px-8 py-12 max-w-5xl mx-auto">

        <div className="bg-[#1f1a33]/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl">
          <h1 className="text-4xl font-extrabold mb-3">{user.username}</h1>
          <p className="text-gray-300">{user.email}</p>
          <p className="mt-4 text-purple-300">Audios subidos: {mySounds.length}</p>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-4">Mis sonidos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {mySounds.map((sound) => (
            <div
              key={sound.id}
              className="bg-[#1f1730]/70 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-purple-500/20"
            >
              <h3 className="text-lg font-semibold">{sound.title}</h3>

              {editing === sound.id ? (
                <textarea
                  value={tempDescription}
                  onChange={(e) => setTempDescription(e.target.value)}
                  className="w-full mt-2 bg-black/20 p-2 rounded-lg text-white"
                />
              ) : (
                <p className="text-gray-300 text-sm mt-2">
                  {sound.description || "Sin descripción"}
                </p>
              )}

              <audio controls className="w-full mt-3">
                <source
                  src={`http://localhost:8080/api/sounds/audio/${sound.id}`}
                  type="audio/mpeg"
                />
              </audio>

              {editing === sound.id ? (
                <button
                  onClick={() => saveDescription(sound.id)}
                  className="mt-4 bg-blue-500 px-4 py-2 rounded-lg w-full"
                >
                  Guardar descripción
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditing(sound.id);
                    setTempDescription(sound.description || "");
                  }}
                  className="mt-4 bg-blue-500 px-4 py-2 rounded-lg w-full"
                >
                  Editar descripción
                </button>
              )}

              <button
                onClick={() => deleteSound(sound.id)}
                className="mt-2 bg-red-600 px-4 py-2 rounded-lg w-full"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
