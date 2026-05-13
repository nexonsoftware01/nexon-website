import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What staffing models do you offer?',
    a: 'We offer Corp-to-Corp (C2C), Contract-to-Hire (C2H), and permanent placement models. We can also build dedicated teams that work exclusively on your projects.',
  },
  {
    q: 'How quickly can you provide IT professionals?',
    a: 'We typically share the first shortlist of qualified candidates within 48 hours. For urgent requirements, we can expedite the process further depending on the role and technology stack.',
  },
  {
    q: 'Do you work with startups or only large enterprises?',
    a: 'We work with companies of all sizes  from early-stage startups needing their first engineering hire to enterprises scaling teams across multiple geographies.',
  },
  {
    q: 'What technologies does your development team specialize in?',
    a: 'Our team works across modern stacks including React, Node.js, Python, Java, .NET, Flutter, and React Native. We also have dedicated AI/ML engineers working with TensorFlow, PyTorch, and LLM integrations.',
  },
  {
    q: 'Where is Nexon Software Solutions located?',
    a: 'We are based in Noida, Sector 59, Uttar Pradesh, India. We work with clients across India and internationally, with flexible engagement models for remote collaboration.',
  },
  {
    q: 'How do you ensure quality in software delivery?',
    a: 'Every project includes dedicated QA  both manual and automated testing. We follow agile practices with regular demos, code reviews, and CI/CD pipelines to maintain high delivery standards.',
  },
];

function FAQItem({ faq, isOpen, toggle }) {
  return (
    <div
      className="py-5"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <span className="text-white font-medium text-[15px]">{faq.q}</span>
        <span
          className="text-dark-500 shrink-0 transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-dark-400 text-sm leading-relaxed pt-3">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 lg:py-24 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Frequently asked questions
            </h2>
            <p className="text-dark-400 text-[15px] leading-relaxed">
              Can't find what you're looking for? Reach out to us directly at{' '}
              <a href="mailto:sales@nexonsolution.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                sales@nexonsolution.com
              </a>
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIdx === i}
                toggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
