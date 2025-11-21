import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

 
  useEffect(() => {
    const checkToken = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", checkToken);
    return () => window.removeEventListener("storage", checkToken);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center bg-[#0f0b1c] text-white">
      <Link to="/" className="font-bold text-lg">SoundMap BCN</Link>

      <div className="flex gap-6 items-center">
        <Link to="/explorar">Explorar</Link>
        <Link to="/subir-audio">Subir Audio</Link>

        
        {token && (
          <Link
            to="/profile"
            className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            Tu perfil
          </Link>
        )}

        
        {!token && (
          <div className="flex gap-4">
            <Link
              to="/login"
              className="bg-purple-300 text-black font-semibold px-4 py-2 rounded-lg text-sm hover:bg-purple-400 transition"
            >
              Log in
            </Link>

            <Link
              to="/register"
              className="bg-purple-300 text-black font-semibold px-4 py-2 rounded-lg text-sm hover:bg-purple-400 transition"
            >
              Sign in
            </Link>
          </div>
        )}

        {token && (
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Cerrar sesión
          </button>
        )}
      </div>
    </nav>
  );
}
