const prices = {
  femmes: [
    { service: 'Coupe + Brushing', prix: '45€' },
    { service: 'Coloration', prix: '55€' },
    { service: 'Mèches', prix: '75€' },
    { service: 'Balayage', prix: '85€' },
    { service: 'Soin profond', prix: '35€' },
  ],
  hommes: [
    { service: 'Coupe classique', prix: '25€' },
    { service: 'Coupe + Barbe', prix: '35€' },
    { service: 'Coloration', prix: '45€' },
    { service: 'Soin du cuir chevelu', prix: '30€' },
  ],
};

const Pricing = () => {
  return (
    <section id="tarifs" className="section-padding bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos Tarifs
          </h2>
          <p className="text-secondary text-lg">
            Des prix adaptés à tous les budgets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tarifs Femmes */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Femmes
            </h3>
            <div className="space-y-4">
              {prices.femmes.map((item) => (
                <div
                  key={item.service}
                  className="flex justify-between items-center border-b border-gray-200 pb-2"
                >
                  <span className="text-secondary">{item.service}</span>
                  <span className="text-accent font-semibold">{item.prix}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tarifs Hommes */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Hommes
            </h3>
            <div className="space-y-4">
              {prices.hommes.map((item) => (
                <div
                  key={item.service}
                  className="flex justify-between items-center border-b border-gray-200 pb-2"
                >
                  <span className="text-secondary">{item.service}</span>
                  <span className="text-accent font-semibold">{item.prix}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
