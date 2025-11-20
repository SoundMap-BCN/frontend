import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center bg-[#0f0b1c] text-white">
      <Link to="/explorar" className="font-bold text-lg">SoundMap BCN</Link>

      <div className="flex gap-6 items-center">
        <Link to="/explorar">Explorar</Link>
        <Link to="/subir-audio">Subir Audio</Link>

        {/* Si NO hay token → Log in + Sign in */}
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

        {/* Si HAY token → botón de Cerrar sesión */}
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
q