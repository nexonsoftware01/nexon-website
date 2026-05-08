import { motion } from 'framer-motion';

const numbers = [
  { value: '200+', text: 'engineers placed in the last year alone' },
  { value: '4.9/5', text: 'average client rating across all engagements' },
  { value: '<48h', text: 'typical time to first candidate shortlist' },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top — wide text block, no badge */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
            We started in 2019 with a simple bet — <br className="hidden lg:block" />
            <span className="text-dark-400">that staffing could be faster, and software could be better.</span>
          </h2>
          <p className="text-dark-400 leading-relaxed text-[15px] max-w-2xl">
            Six years later, Nexon Software Solutions is the partner companies call when they
            need reliable IT professionals or a dev team that actually ships. We're based in
            Noida and work with clients across India and internationally.
          </p>
        </motion.div>

        {/* Bottom — image + numbers side by side */}
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=500&fit=crop&q=80"
              alt="Team at work"
              className="rounded-2xl w-full object-cover"
              style={{ border: '1px solid rgba(255,255,255,0.05)', maxHeight: 380 }}
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {numbers.map(({ value, text }) => (
              <div key={value} className="pb-7" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="text-white font-display font-bold text-3xl mb-1">{value}</p>
                <p className="text-dark-400 text-sm">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
