function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-linear-to-br from-primary-dark to-primary flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
         <div className="grid md:grid-cols-2 gap-12 items-center py-20">
          {/* texte */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin mt-4 mb-4 animate-fade-in">
              Bienvenue.
            </h1>

            <p className="text-6-xl md:text-xl text-white/90 leading-relaxed max-w-2xl mb-4 ">
              Je suis <strong className="font-semibold text-white">Romain</strong>, 
              développeur web front-end passionné par la création d'interfaces modernes et intuitives. Je termine actuellement mon parcours d'intégrateur web chez OpenClassRooms. Spécialisé en React et Tailwind CSS, je transforme vos idées en expériences utilisateur mémorables.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects"
                className="px-8 py-3 bg-accent-blue hover:bg-[#60a5fa] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Voir mes projets
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary-dark font-semibold rounded-lg transition-all duration-300"
              >
                Me contacter
              </a>               
            </div>
          </div>

          {/* Image */}
          <div className="-mt-3 md:mt-15">
          <img 
            src={`${import.meta.env.BASE_URL}images/laptop-3d.png`} 
            alt="Developer workspace" 
            className="w-full max-w-lg mx-auto animate-float drop-shadow-2xl rounded-4xl"
          />
          </div>
        </div>
      </div>

      {/* Séparateur arrondi */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            fill="#f9fafb"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>

    </section>
  )
}

export default Hero