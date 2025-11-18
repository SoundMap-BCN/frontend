// src/router/AppRouter.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORTS EXACTOS SEGÚN TUS ARCHIVOS
import Landing from "../pages/Landing";
import MapView from "../pages/MapView";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import AudioDetail from "../pages/AudioDetail";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Landing />} />

        {/* MAPA */}
        <Route path="/explorar" element={<MapView />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PERFIL */}
        <Route path="/profile" element={<Profile />} />

        {/* SUBIR AUDIO */}
        <Route path="/subir-audio" element={<Upload />} />

        {/* DETALLE DEL AUDIO */}
        <Route path="/audio" element={<AudioDetail />} />
        {/* Más adelante será: /audio/:id */}

      </Routes>
    </BrowserRouter>
  );
}
