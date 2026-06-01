import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ICONS = {
  augment: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  capacity: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>
    </svg>
  ),
  global: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
};

const SERVICES = [
  {
    title: 'Custom Application Development',
    description: 'Designing and developing tailor-made applications that address specific business challenges and drive digital transformation',
  },
  {
    title: 'Application Modernization',
    description: 'Upgrading and modernizing legacy applications to enhance performance, scalability, and user experience while reducing technical debt',
  },
  {
    title: 'Application Integration',
    description: 'Integrating disparate systems, applications, and data sources to streamline workflows, improve data visibility, and enable seamless interoperability',
  },
  {
    title: 'Application Maintenance and Support',
    description: 'Providing ongoing maintenance, troubleshooting, and support services to ensure the reliability, availability, and security of mission-critical applications',
  },
  {
    title: 'Mobile Application Development',
    description: 'Creating intuitive, feature-rich mobile applications for iOS, Android, and cross-platform environments to engage customers and employees on the go',
  },
];

const SERVICE_CATEGORIES = [
  'Experience Design',
  'Data Engineering',
  'Product Engineering',
  'Cloud Engineering',
  'Cyber Security',
  'Artificial Intelligence and Machine Learning',
  'Intelligent Process Automation',
];

function ServiceItem({ title, description, isOpen, toggle }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggle}
        className="w-full py-4 px-4 flex items-center justify-between gap-3 text-left transition-colors hover:bg-gray-50"
      >
        <span className="text-sm font-semibold transition-colors" style={{ color: isOpen ? 'var(--color-steel)' : '#111827' }}>
          {title}
        </span>
        <span
          className="text-gray-400 shrink-0 transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7-7m0 0L5 14m7-7v12" />
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
            className="overflow-hidden bg-gray-50"
          >
            <div className="px-8 py-4">
              <p style={{ color: '#4b5563' }} className="text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:translate-y-[-4px]"
      style={{ borderColor: 'rgba(64, 98, 123, 0.18)' }}
    >
      <div className="flex items-start gap-4 mb-3">
        <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{
          backgroundColor: 'rgba(64, 98, 123, 0.08)',
          color: 'var(--color-steel)'
        }}>
          {icon}
        </div>
      </div>
      <h4 className="text-[15px] font-semibold mb-2" style={{ color: '#111827' }}>{title}</h4>
      <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>{desc}</p>
    </motion.div>
  );
}

export default function ApplicationServices() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="relative py-0 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className='grid grid-cols-12 gap-8 items-center mb-16'>
          <div className='col-span-12 lg:col-span-7'>
            <p className='eyebrow mb-3'>Application Services</p>
            <h1 className='text-[40px] sm:text-[48px] md:text-[56px] font-semibold tracking-[-0.03em]' style={{ color: 'var(--color-ink)' }}>
              Application Services
            </h1>
            <p className='mt-5 max-w-xl text-[16px] leading-[1.75]' style={{ color: 'var(--color-muted)' }}>
              In today's digital age, applications are the engines that power customer experiences, operational efficiency, and digital growth.
            </p>
          </div>
          <div className='col-span-12 lg:col-span-5'>
            <div className='relative w-full max-w-[320px] mx-auto rounded-[30px] border border-[rgba(15,23,42,0.08)] bg-[rgba(255,255,255,0.95)] p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.25)]'>
              <div className='grid grid-cols-2 gap-3'>
                <div className='h-20 rounded-[24px] bg-[rgba(15,23,42,0.05)]' />
                <div className='h-20 rounded-[24px] bg-[rgba(15,23,42,0.12)] flex items-center justify-center'>
                  <div className='w-10 h-10 rounded-full bg-[rgba(15,23,42,0.16)]' />
                </div>
                <div className='h-20 rounded-[24px] bg-[rgba(15,23,42,0.12)] flex items-center justify-center'>
                  <div className='w-14 h-3 rounded-full bg-[rgba(15,23,42,0.16)]' />
                </div>
                <div className='h-20 rounded-[24px] bg-[rgba(15,23,42,0.05)] flex items-center justify-center'>
                  <div className='w-12 h-12 rounded-full border border-[rgba(15,23,42,0.12)]' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: What It Is & What We Offer */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#111827' }}>What It Is</h3>
              <p style={{ color: '#4b5563' }} className="leading-relaxed text-sm">
                In today's digital age, applications play a crucial role in driving business growth, enhancing customer experiences, and optimizing operational efficiency.
              </p>
              <p style={{ color: '#4b5563' }} className="leading-relaxed text-sm mt-4">
                Application Services portfolio encompasses the full lifecycle of application development, management, modernization and support. These services are used to build custom software solutions, modernize legacy applications, or optimize existing systems
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#111827' }}>What We Offer</h3>
              <p style={{ color: '#4b5563' }} className="leading-relaxed text-sm">
                At Mindlance, we offer comprehensive Application Services designed to empower organizations to innovate, transform, and thrive in the digital era.
              </p>
              <p style={{ color: '#4b5563' }} className="leading-relaxed text-sm mt-4">
                From initial ideation and design to implementation, optimization, and ongoing maintenance, we provide end-to-end solutions that deliver tangible business value.
              </p>
            </div>
          </motion.div>

          {/* Right: Services List & How We Do It */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="lg:col-span-2"
          >
            {/* Services Categories */}
            <div className="mb-12">
              <div className="inline-block px-3 py-1.5 rounded-full mb-4" style={{
                backgroundColor: 'rgba(214, 62, 78, 0.08)',
                border: '1px solid rgba(214, 62, 78, 0.2)'
              }}>
                <span className="text-xs font-semibold tracking-wide" style={{ color: '#d63e4e' }}>APPLICATION SERVICES</span>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                {SERVICES.map((service, i) => (
                  <ServiceItem
                    key={i}
                    title={service.title}
                    description={service.description}
                    isOpen={openIdx === i}
                    toggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                  />
                ))}
              </div>
            </div>

            {/* How We Do It */}
            <div>
              <h3 className="text-lg font-semibold mb-6" style={{ color: '#111827' }}>How We Do It</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ServiceCard
                  icon={ICONS.augment}
                  title="Staff Augmentation / Extended Team"
                  desc="We allow you to supplement your in-house team with resources having critical skill sets needed by you."
                />
                <ServiceCard
                  icon={ICONS.capacity}
                  title="Managed Capacity"
                  desc="We will provide a pool of skilled resources with diverse skillsets. You can pick the experts you need for your project and scale up and down as per your project/program needs."
                />
                <ServiceCard
                  icon={ICONS.global}
                  title="Global Talent Solutions"
                  desc="We will fulfill your needs for resources across global locations for diverse skillsets."
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
