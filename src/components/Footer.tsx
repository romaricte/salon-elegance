const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Horaires */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires d'ouverture</h3>
            <ul className="space-y-2">
              <li>Lundi - Vendredi : 9h - 19h</li>
              <li>Samedi : 9h - 18h</li>
              <li>Dimanche : Fermé</li>
            </ul>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="hover:text-accent transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-accent transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#tarifs" className="hover:text-accent transition-colors">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Salon Élégance. Tous droits réservés.
            <br />
            Développé par <a href="https://github.com/RomaricTene" className="hover:text-accent transition-colors">Romaric Tene</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
