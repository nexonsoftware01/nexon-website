import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/constants';

const avatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80',
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8" style={{ background: 'rgba(15,23,42,0.3)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-dark-500 text-xs sm:text-sm font-medium uppercase tracking-wider mb-6 sm:mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.3 }}
        >
          What people are saying
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <blockquote className="text-dark-200 text-sm sm:text-[15px] leading-relaxed mb-4 sm:mb-6">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src={avatars[i]}
                  alt={t.name}
                  className="w-8 sm:w-9 h-8 sm:h-9 rounded-full object-cover"
                  style={{ border: '2px solid rgba(255,255,255,0.08)' }}
                  loading="lazy"
                />
                <div>
                  <p className="text-white text-xs sm:text-sm font-medium">{t.name}</p>
                  <p className="text-dark-500 text-[11px] sm:text-xs">{t.role} at {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
