const Hero = () => {
  return (
    <section id="accueil" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          alt="Salon de coiffure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bienvenue chez Salon Élégance
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Découvrez l'art de la coiffure pour hommes et femmes
          </p>
          <a href="#contact" className="btn-primary">
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
