import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/constants';

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-24 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              How an engagement works
            </h2>
            <p className="text-dark-400 text-[15px] leading-relaxed">
              No surprises. We keep it simple and keep you in the loop from day one.
            </p>
          </motion.div>

          {/* Right steps */}
          <div className="lg:col-span-2 space-y-0">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="flex gap-6 py-7"
                style={{ borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
              >
                <span className="text-dark-600 font-display font-bold text-4xl leading-none pt-1 shrink-0 w-14">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
