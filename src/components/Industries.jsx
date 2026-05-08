import { motion } from 'framer-motion';
import { HiBuildingOffice2, HiHeart, HiShoppingCart, HiAcademicCap, HiBanknotes, HiTruck } from 'react-icons/hi2';

const industries = [
  { icon: HiBuildingOffice2, name: 'Enterprise & SaaS' },
  { icon: HiHeart, name: 'Healthcare' },
  { icon: HiShoppingCart, name: 'E-Commerce & Retail' },
  { icon: HiAcademicCap, name: 'EdTech' },
  { icon: HiBanknotes, name: 'Fintech & Banking' },
  { icon: HiTruck, name: 'Logistics & Supply Chain' },
];

export default function Industries() {
  return (
    <section className="py-20 lg:py-24 px-5 sm:px-8" style={{ background: 'rgba(15,23,42,0.3)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3">
            Industries we serve
          </h2>
          <p className="text-dark-400 text-[15px] max-w-xl mx-auto">
            Domain expertise across verticals that lets us hit the ground running on your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="group text-center rounded-xl py-8 px-4 transition-all duration-300"
              style={{ background: 'rgba(30,41,59,0.2)', border: '1px solid rgba(255,255,255,0.05)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = ''; }}
            >
              <ind.icon className="w-7 h-7 text-primary-400 mx-auto mb-3" />
              <p className="text-dark-300 text-sm font-medium">{ind.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
