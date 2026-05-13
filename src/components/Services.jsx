import { motion } from 'framer-motion';
import { HiUserGroup, HiCodeBracket, HiShieldCheck, HiLightBulb, HiCpuChip, HiArrowRight } from 'react-icons/hi2';
import { SERVICES } from '../data/constants';

const iconMap = { HiUserGroup, HiCodeBracket, HiShieldCheck, HiLightBulb, HiCpuChip };
const accents = ['#6366f1', '#3b82f6', '#06b6d4', '#f59e0b', '#10b981'];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8" style={{ background: 'rgba(15,23,42,0.3)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
            What we do
          </h2>
          <p className="text-dark-400 text-sm sm:text-[15px] max-w-2xl mx-auto px-2">
            End-to-end IT solutions  whether you need people, products, or both.
          </p>
        </motion.div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-3 sm:mb-5">
          {SERVICES.slice(0, 3).map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-7 transition-all duration-300"
                style={{ background: 'rgba(30,41,59,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${accents[i]}30`; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = ''; }}
              >
                <div
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-5"
                  style={{ background: `${accents[i]}12` }}
                >
                  {Icon && <Icon className="w-5 sm:w-6 h-5 sm:h-6" style={{ color: accents[i] }} />}
                </div>
                <h3 className="text-white font-display font-semibold text-base sm:text-lg mb-2">{service.title}</h3>
                <p className="text-dark-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">{service.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-5">
                  {service.features.map((f) => (
                    <span key={f} className="text-xs text-dark-400 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      {f}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium transition-colors" style={{ color: accents[i] }}>
                  Get started <HiArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom row: 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          {SERVICES.slice(3).map((service, i) => {
            const realIndex = i + 3;
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: (realIndex) * 0.06 }}
                className="group rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-7 transition-all duration-300"
                style={{ background: 'rgba(30,41,59,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${accents[realIndex]}30`; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = ''; }}
              >
                <div
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-5"
                  style={{ background: `${accents[realIndex]}12` }}
                >
                  {Icon && <Icon className="w-5 sm:w-6 h-5 sm:h-6" style={{ color: accents[realIndex] }} />}
                </div>
                <h3 className="text-white font-display font-semibold text-base sm:text-lg mb-2">{service.title}</h3>
                <p className="text-dark-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">{service.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-5">
                  {service.features.map((f) => (
                    <span key={f} className="text-xs text-dark-400 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      {f}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium transition-colors" style={{ color: accents[realIndex] }}>
                  Get started <HiArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
