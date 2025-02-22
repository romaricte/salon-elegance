import { ScissorsIcon, SparklesIcon, SwatchIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Coupe & Coiffage',
    description: 'Coupes tendance et coiffages adaptés à votre style et morphologie.',
    icon: ScissorsIcon,
  },
  {
    name: 'Coloration',
    description: 'Colorations professionnelles pour sublimer votre personnalité.',
    icon: SwatchIcon,
  },
  {
    name: 'Soins & Traitements',
    description: 'Soins capillaires personnalisés pour des cheveux sains et brillants.',
    icon: SparklesIcon,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos Services
          </h2>
          <p className="text-secondary text-lg">
            Des prestations de qualité pour sublimer votre beauté
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="h-12 w-12 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                {service.name}
              </h3>
              <p className="text-secondary text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
