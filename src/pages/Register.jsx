import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !email || !password) {
      alert("Rellena todos los campos.");
      return;
    }

    if (password !== password2) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      await api.post("/auth/register", {
        username,
        email,
        password,
      });

      alert("Cuenta creada correctamente 🎉");
      navigate("/login");

    } catch (error) {
      console.error(error);
      alert("Error creando la cuenta. ¿Email o usuario ya registrado?");
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col">

      {/* HEADER */}
      <header role="banner">
        <NavBar />
      </header>

      {/* MAIN */}
      <main className="flex-grow flex items-center justify-center py-16 px-4">

        <div className="bg-[#241f2e] w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-white/5">

          {/* LEFT PANEL */}
          <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-10 flex flex-col justify-center text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4 drop-shadow-lg">
              Únete a SoundMap BCN
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Crea tu cuenta y empieza a compartir los sonidos que definen tu Barcelona.
            </p>
            <div className="text-6xl opacity-70">🎧</div>
          </div>

          {/* RIGHT PANEL */}
          <div className="p-10 bg-[#1d1925] flex flex-col justify-center">

            <h1 className="text-2xl font-bold mb-8 text-center">Crear Cuenta</h1>

            {/* USERNAME */}
            <label className="block mb-4 text-sm text-gray-300">
              Nombre de usuario
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ej: AnaDev"
                className="mt-2 w-full bg-[#2c2636] p-3 rounded-lg outline-none text-gray-200 placeholder-gray-400"
              />
            </label>

            {/* EMAIL */}
            <label className="block mb-4 text-sm text-gray-300">
              Correo electrónico
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="mt-2 w-full bg-[#2c2636] p-3 rounded-lg outline-none text-gray-200 placeholder-gray-400"
              />
            </label>

            {/* PASSWORD */}
            <label className="block mb-4 text-sm text-gray-300">
              Contraseña
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Introduce tu contraseña"
                  className="mt-2 w-full bg-[#2c2636] p-3 rounded-lg outline-none text-gray-200 placeholder-gray-400 pr-10"
                />
                <button
                  type="button"
                  aria-label="Mostrar contraseña"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-5 text-gray-400 hover:text-gray-200"
                >
                  👁
                </button>
              </div>
            </label>

            {/* CONFIRM PASSWORD */}
            <label className="block mb-6 text-sm text-gray-300">
              Confirmar Contraseña
              <div className="relative">
                <input
                  type={showPassword2 ? "text" : "password"}
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  placeholder="Repite tu contraseña"
                  className="mt-2 w-full bg-[#2c2636] p-3 rounded-lg outline-none text-gray-200 placeholder-gray-400 pr-10"
                />
                <button
                  type="button"
                  aria-label="Mostrar contraseña"
                  onClick={() => setShowPassword2(!showPassword2)}
                  className="absolute right-3 top-5 text-gray-400 hover:text-gray-200"
                >
                  👁
                </button>
              </div>
            </label>

            {/* TERMS */}
            <label className="flex items-center gap-2 text-sm text-gray-300 mb-6 cursor-pointer">
              <input type="checkbox" className="accent-purple-500" />
              Acepto los términos y condiciones
            </label>

            {/* SUBMIT */}
            <button
              onClick={handleRegister}
              className="w-full bg-purple-500 hover:bg-purple-600 transition-all py-3 rounded-lg font-semibold"
            >
              Crear Cuenta
            </button>

            <p className="text-center text-sm text-gray-400 mt-5">
              ¿Ya tienes cuenta?{" "}
              <a href="/login" className="text-purple-300 hover:text-purple-100">
                Inicia sesión aquí
              </a>
            </p>

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
