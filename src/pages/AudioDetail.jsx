import { FaPlay, FaUndo, FaVolumeUp, FaPause } from "react-icons/fa";

export default function AudioDetail() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white px-4 py-10">
      <main className="max-w-5xl mx-auto bg-[#241f2e] p-8 rounded-3xl shadow-xl border border-white/5">

        {/* TITLE + DATE */}
        <h1 className="text-2xl font-bold">PlacadelSolatMidnight</h1>
        <p className="text-gray-400 text-sm mb-6">Recorded on August 12, 2023 — 2:30 min</p>

        {/* WAVEFORM FAKE */}
        <div className="w-full h-24 bg-gradient-to-r from-purple-300/20 to-purple-500/20 rounded-lg mb-4"></div>

        {/* SEEKBAR */}
        <input type="range" className="w-full accent-purple-500 mb-4" />

        {/* CONTROLS */}
        <div className="flex items-center gap-6 mb-8 justify-center">
          <FaUndo className="text-xl cursor-pointer" />
          <button className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
            <FaPause className="text-white" />
          </button>
          <FaVolumeUp className="text-xl cursor-pointer" />
        </div>

        {/* DESCRIPTION + MAP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-gray-300">
            The lively chatter of people enjoying the warm night, mixed with distant street music...
          </p>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Barcelona_Map.png"
            alt="Barcelona map"
            className="rounded-lg border border-white/10"
          />
        </div>

      </main>
    </div>
  );
}
