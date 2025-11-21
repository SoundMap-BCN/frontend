import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Introduce tu email y contraseña.");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/login", { email, password });

   
      localStorage.setItem("token", res.data.token);

     
      navigate("/explorar");

    } catch (error) {
      console.error(error);
      alert("Credenciales incorrectas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col">

      <header role="banner">
        <NavBar />
      </header>

      <main
        role="main"
        className="flex-grow flex items-center justify-center px-4"
      >
        <form
          onSubmit={handleLogin}
          className="bg-[#241f2e] w-full max-w-md p-10 rounded-2xl shadow-xl border border-white/5"
        >
          <h1 className="text-center mb-8 text-lg font-semibold">Iniciar Sesión</h1>

         
          <label className="block mb-4 text-sm text-gray-300">
            Correo electrónico
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full bg-[#2c2636] p-3 rounded-lg outline-none text-gray-200 placeholder-gray-400"
            />
          </label>

          
          <label className="block mb-6 text-sm text-gray-300">
            Contraseña
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Introduce tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full bg-[#2c2636] p-3 rounded-lg outline-none text-gray-200 placeholder-gray-400 pr-10"
              />
              <button
                type="button"
                aria-label="Mostrar contraseña"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-200"
              >
                👁
              </button>
            </div>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-500 hover:bg-purple-600 transition-all py-3 rounded-lg font-semibold"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <p className="text-center text-sm text-gray-400 mt-4 cursor-pointer hover:text-gray-200">
            ¿Has olvidado tu contraseña?
          </p>
        </form>
      </main>


      <footer role="contentinfo">
        <Footer />
      </footer>

    </div>
  );
}
