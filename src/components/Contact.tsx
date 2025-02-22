import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contactez-nous
          </h2>
          <p className="text-secondary text-lg">
            Prenez rendez-vous ou posez-nous vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <PhoneIcon className="h-6 w-6 text-accent flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  Téléphone
                </h3>
                <p className="text-secondary">+33 1 23 45 67 89</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <EnvelopeIcon className="h-6 w-6 text-accent flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">Email</h3>
                <p className="text-secondary">contact@salon-elegance.fr</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPinIcon className="h-6 w-6 text-accent flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  Adresse
                </h3>
                <p className="text-secondary">
                  123 Avenue de la Beauté
                  <br />
                  75000 Paris, France
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-primary mb-2"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primary mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-primary mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
