import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const roles = ['IT Staffing', 'Software Development', 'QA Testing', 'AI Solutions', 'IT Consulting'];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = roles[idx];
    let t;
    if (!del) {
      t = text.length < w.length
        ? setTimeout(() => setText(w.slice(0, text.length + 1)), 80)
        : setTimeout(() => setDel(true), 2000);
    } else {
      t = text.length > 0
        ? setTimeout(() => setText(w.slice(0, text.length - 1)), 45)
        : (setDel(false), setIdx((i) => (i + 1) % roles.length), undefined);
    }
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 dot-pattern" />
      {/* Purple-blue gradient glow */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(59,130,246,0.08) 0%, transparent 50%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-28 pb-16 lg:pt-36 lg:pb-24">
        {/* Main content */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-primary-400 font-medium text-sm mb-5 tracking-widest uppercase">
            IT Staffing &bull; Development &bull; AI Solutions
          </p>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] leading-[1.1] tracking-tight text-white mb-6">
            Build Smarter.<br />
            <span className="gradient-text">Scale Faster.</span>
          </h1>

          <div className="text-lg sm:text-xl text-dark-400 mb-3">
            We specialize in{' '}
            <span className="text-white font-medium">{text}</span>
            <span className="inline-block w-0.5 h-5 bg-primary-400 align-middle ml-0.5 cursor-blink" />
          </div>

          <p className="text-dark-500 text-[15px] leading-relaxed mb-10 max-w-2xl mx-auto">
            Nexon Software Solutions connects companies with vetted IT professionals
            and delivers production-ready software — staffing, development, testing,
            AI, and consulting under one roof.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-sm">
              Let's Talk
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <a href="#services" className="btn-outline inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-dark-200 font-semibold text-sm">
              Our Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 32, divideColor: 'rgba(255,255,255,0.06)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            ['500+', 'Clients Served'],
            ['1000+', 'Professionals Placed'],
            ['98%', 'Client Satisfaction'],
            ['6+', 'Years of Delivery'],
          ].map(([num, label]) => (
            <div key={label} className="text-center px-4">
              <p className="text-white font-display font-bold text-3xl lg:text-4xl">{num}</p>
              <p className="text-dark-500 text-xs mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
