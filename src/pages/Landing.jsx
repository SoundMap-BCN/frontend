import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaMicrophone, FaPlay } from "react-icons/fa";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col">

      
      <a 
        href="#main-content"
        className="absolute top-[-40px] left-0 bg-white text-black px-4 py-2 z-50 focus:top-0 transition-all"
      >
        
      </a>

      <header role="banner">
        <NavBar />
      </header>

      <main id="main-content" role="main" className="flex-grow">

        
        <section 
          aria-labelledby="hero-title"
          className="max-w-5xl mx-auto bg-[#b47bff] bg-gradient-to-br from-purple-400 to-purple-600 mt-10 rounded-3xl px-10 py-20 relative overflow-hidden shadow-xl"
        >
         
          <div
            aria-hidden="true"
            className="absolute top-10 left-5 w-40 h-40 bg-white/20 rounded-full blur-3xl opacity-40"
          ></div>

          <div
            aria-hidden="true"
            className="absolute bottom-0 right-10 w-52 h-52 bg-white/10 rounded-full blur-2xl opacity-30"
          ></div>

          <h1 id="hero-title" className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow">
            El sonido de Barcelona
          </h1>

          <p className="max-w-xl text-white/90 mb-10 text-lg">
            Tu guia para las melodias únicas de Barcelona. Explora, graba y comparte la vibra!
          </p>

          <div className="flex gap-6 flex-wrap">

            
            <button
              aria-label="Explore the map of Barcelona sounds"
              onClick={() => navigate("/explorar")}
              className="flex items-center gap-2 bg-white text-gray-900 font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-purple-900/40 transition-all"
            >
              <FaMapMarkerAlt aria-hidden="true" className="text-gray-700" />
              <span>Explora el Mapa</span>
            </button>

            
            <button
              aria-label="Add your own sound to the map"
              onClick={() => navigate("/subir-audio")}
              className="flex items-center gap-2 bg-black text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-black/80 transition-all"
            >
              <FaMicrophone aria-hidden="true" />
              <span>Añade tu sonido</span>
            </button>

          </div>
        </section>

        
        <section
          aria-labelledby="how-title"
          className="max-w-5xl mx-auto px-6 mt-24 mb-32"
        >
          <p className="text-purple-300 uppercase text-sm tracking-wide text-center">
            Como funciona
          </p>

          <h2 id="how-title" className="text-3xl font-extrabold text-center mt-2 mb-6">
            Mapea la vibra en 3 pasos
          </h2>

          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-14">
            Unete a la comunidad y añuda a construi una coleccion de música.
            Es simple, divertido y te hace formar parte de la historia de Barcelona.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <article className="bg-[#242424] p-8 rounded-2xl text-center shadow-lg" aria-labelledby="step1-title">
              <div className="w-12 h-12 bg-purple-700/40 rounded-full flex justify-center items-center mx-auto mb-4">
                <FaMicrophone aria-hidden="true" className="text-purple-200" />
              </div>
              <h3 id="step1-title" className="font-semibold mb-2 text-lg">
                Grabalo & subelo
              </h3>
              <p className="text-gray-400 text-sm">
                Captura un sonido de la ciudad. Cada canción cuenta una historia.
              </p>
            </article>

            <article className="bg-[#242424] p-8 rounded-2xl text-center shadow-lg" aria-labelledby="step2-title">
              <div className="w-12 h-12 bg-purple-700/40 rounded-full flex justify-center items-center mx-auto mb-4">
                <FaMapMarkerAlt aria-hidden="true" className="text-purple-200" />
              </div>
              <h3 id="step2-title" className="font-semibold mb-2 text-lg">
                Pin on the Map
              </h3>
              <p className="text-gray-400 text-sm">
                Agrega el sonido exactamente donde lo escuchaste
              </p>
            </article>

            <article className="bg-[#242424] p-8 rounded-2xl text-center shadow-lg" aria-labelledby="step3-title">
              <div className="w-12 h-12 bg-purple-700/40 rounded-full flex justify-center items-center mx-auto mb-4">
                <FaPlay aria-hidden="true" className="text-purple-200" />
              </div>
              <h3 id="step3-title" className="font-semibold mb-2 text-lg">
                Explora & escucha
              </h3>
              <p className="text-gray-400 text-sm">
                descubre los sonidos compartidos por la comunidad.
              </p>
            </article>

          </div>
        </section>

      </main>

      <footer role="contentinfo">
        <Footer />
      </footer>

    </div>
  );
}
