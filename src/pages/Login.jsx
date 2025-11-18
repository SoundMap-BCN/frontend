import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center px-4">

      {/* MAIN CARD */}
      <main
        role="main"
        className="bg-[#241f2e] w-full max-w-md p-10 rounded-2xl shadow-xl border border-white/5"
      >
        <h1 className="text-center mb-8 text-lg font-semibold">Iniciar Sesión</h1>

        {/* EMAIL */}
        <label className="block mb-4 text-sm text-gray-300">
          Correo electrónico
          <input
            type="email"
            placeholder="tu@email.com"
            className="mt-1 w-full bg-[#2c2636] p-3 rounded-lg outline-none text-gray-200 placeholder-gray-400"
          />
        </label>

        {/* PASSWORD */}
        <label className="block mb-6 text-sm text-gray-300">
          Contraseña
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Introduce tu contraseña"
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

        <button className="w-full bg-purple-500 hover:bg-purple-600 transition-all py-3 rounded-lg font-semibold">
          Entrar
        </button>

        <p className="text-center text-sm text-gray-400 mt-4 cursor-pointer hover:text-gray-200">
          ¿Has olvidado tu contraseña?
        </p>
      </main>
    </div>
  );
}
