import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 px-5 sm:px-8">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Got a project? A role to fill?<br />
          <span className="text-dark-400">Let's figure it out together.</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-sm">
            Start a conversation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
          <a href="mailto:sales@nexonsolution.com" className="text-dark-400 text-sm font-medium hover:text-white transition-colors">
            or email sales@nexonsolution.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}
