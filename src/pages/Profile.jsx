import { FaPlay, FaHeart } from "react-icons/fa";

export default function Profile() {
  // Datos mockeados (luego irán desde backend)
  const audios = [
    {
      id: 1,
      title: "Noche en El Gòtic",
      duration: "2:34",
      likes: 158,
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800",
    },
    {
      id: 2,
      title: "Olas en la Barceloneta",
      duration: "4:12",
      likes: 302,
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
    },
    {
      id: 3,
      title: "Campanas de la Catedral",
      duration: "1:55",
      likes: 98,
      img: "https://images.unsplash.com/photo-1506801310323-534be5e7f6c9?q=80&w=800",
    },
    {
      id: 4,
      title: "Música en el Raval",
      duration: "5:01",
      likes: 450,
      img: "https://images.unsplash.com/photo-1502462042370-146aa6b5ab5d?q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white px-4 py-10">

      <main className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-10">

          {/* PROFILE CARD */}
          <aside className="bg-[#241f2e] rounded-3xl p-8 w-full lg:w-80 shadow-xl border border-white/5">
            <img
              src="https://i.pravatar.cc/300"
              alt="User"
              className="w-40 h-40 rounded-full mx-auto mb-4"
            />
            <h2 className="text-center text-2xl font-bold">AnaDev</h2>
            <p className="text-center text-gray-400 text-sm mb-4">
              Capturando la sinfonía urbana de Barcelona.
            </p>

            <p className="bg-purple-600/40 px-4 py-2 rounded-lg text-center font-semibold mb-4">
              {audios.length} Audios Subidos
            </p>

            {/* Puedes borrarlo si no lo quieres */}
            <button className="bg-black w-full py-2 rounded-lg hover:bg-black/80 transition">
              Editar Perfil
            </button>
          </aside>

          {/* MAIN CONTENT */}
          <section className="flex-1">

            {/* TÍTULO */}
            <div className="flex gap-8 border-b border-white/10 pb-2 mb-6">
              <button className="text-purple-400 border-b-2 border-purple-400 pb-1">
                Mis Audios
              </button>
            </div>

            {/* AUDIO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {audios.map((audio) => (
                <article
                  key={audio.id}
                  className="bg-[#241f2e] rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:scale-[1.02] transition-all"
                >
                  <div className="relative">
                    <img
                      src={audio.img}
                      alt={audio.title}
                      className="w-full h-44 object-cover"
                    />

                    {/* PLAY BUTTON EN LA IMAGEN */}
                    <button className="absolute bottom-3 right-3 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg">
                      <FaPlay size={14} />
                    </button>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{audio.title}</h3>

                    <div className="flex items-center justify-between text-gray-300 text-sm">
                      <span>⏱ {audio.duration}</span>

                      <span className="flex items-center gap-1">
                        <FaHeart className="text-pink-400" />
                        {audio.likes}
                      </span>
                    </div>
                  </div>
                </article>
              ))}

            </div>

          </section>

        </div>

      </main>
    </div>
  );
}
