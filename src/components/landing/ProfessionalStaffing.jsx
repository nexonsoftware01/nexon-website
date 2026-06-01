import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ICONS = {
  augment: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  payroll: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  sourcing: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6m3-3H8"/>
    </svg>
  ),
  team: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  ),
  capacity: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>
    </svg>
  ),
  delivery: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="12" cy="19" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="19" cy="19" r="1"/><circle cx="5" cy="5" r="1"/><circle cx="19" cy="5" r="1"/><circle cx="5" cy="19" r="1"/>
    </svg>
  ),
  search: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
  ),
  rpo: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
};

const CATEGORIES = [
  {
    title: 'Engineering',
    items: ['Mechanical Engineers', 'Electrical Engineers', 'Chemical Engineers', 'Polymers / Material Engineers', 'Process Engineers', 'Quality / Reliability Engineers'],
  },
  {
    title: 'Finance',
    items: ['Corporate Accounting', 'Credit & Collections', 'Budgeting, Forecasting & Reporting', 'Internal & External Audit', 'Financial Reporting', 'Treasury', 'Tax & Advisory', 'Financial Analysis'],
  },
  {
    title: 'Office & Call Center',
    items: ['Administrative Support', 'Office Operations', 'L1 / L2 / L3 Support', 'Bi-Lingual Customer Service Representatives'],
  },
  {
    title: 'Legal',
    items: ['Attorneys', 'ParaLegal', 'Litigation Support', 'Contracts Analyst'],
  },
  {
    title: 'Procurement',
    items: ['Category Management', 'Supplier Diversity', 'Spend Capture', 'Strategic Partnerships', 'Contracts Management', 'Compliance Management'],
  },
  {
    title: 'Quantitative Risk Management',
    items: ['Product Stress Testing', 'Market Risk Capital Management', 'Risk Capital Optimization', 'Model Risk Development'],
  },
];

const CONTINGENT_SERVICES = [
  {
    icon: ICONS.augment,
    title: 'Staff Augmentation',
    desc: 'We find the functional / domain-specific contingent professionals for you to supplement your core teams.',
  },
  {
    icon: ICONS.payroll,
    title: 'Payroll',
    desc: 'You refer the talent and we take over employer-of-record responsibilities including onboarding, payroll & benefits, compliance & consultant engagement.',
  },
  {
    icon: ICONS.sourcing,
    title: 'Direct Sourcing',
    desc: 'We leverage your employer brand and our jointly curated talent pools to source, screen, onboard as an employer-of-record, and manage consultant engagement.',
  },
  {
    icon: ICONS.team,
    title: 'Team in a Box',
    desc: 'We set up the whole team, and let you manage the way that you would like.',
  },
  {
    icon: ICONS.capacity,
    title: 'Managed Capacity',
    desc: 'We not only set the team, but also manage them.',
  },
  {
    icon: ICONS.delivery,
    title: 'Project Delivery',
    desc: 'Just tell us what needs to be achieved, and we deliver on a pre-agreed statement of work (SoW).',
  },
];

const PERM_SERVICES = [
  {
    icon: ICONS.search,
    title: 'Search',
    desc: 'Leveraging our talent networks, domain/functional expertise, and your employer brand, we find that perfect professional for you to hire full-time.',
  },
  {
    icon: ICONS.rpo,
    title: 'RPO',
    desc: 'Leveraging your employer brand and our jointly curated talent pools, we seamlessly source, screen, onboard and orient full-time hires for you.',
  },
];

function CategoryItem({ category, isOpen, toggle }) {
  const hasItems = category.items.length > 0;

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggle}
        disabled={!hasItems}
        className={`w-full py-4 px-4 flex items-center justify-between gap-3 text-left transition-colors ${
          hasItems ? 'hover:bg-gray-50' : ''
        } ${!hasItems ? 'opacity-75 cursor-default' : ''}`}
      >
        <span className="text-sm font-medium transition-colors" style={{ color: isOpen ? 'var(--color-steel)' : 'var(--color-ink-3)' }}>
          {category.title}
        </span>
        {hasItems && (
          <span
            className="text-gray-400 shrink-0 transition-transform duration-300"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7-7m0 0L5 14m7-7v12" />
            </svg>
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && hasItems && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden bg-gray-50"
          >
            <div className="px-8 py-3 space-y-2">
              {category.items.map((item, i) => (
                <div key={i} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-gray-400 mt-1 text-xs">–</span>
                  <span>{item}</span>
                </div>
              ))}
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

export default function ProfessionalStaffing() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 lg:py-14 px-5 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-2 font-display" style={{ color: '#111827' }}>
            Professional Staffing
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: What We Offer */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-lg font-semibold" style={{ color: '#111827' }}>What We Offer</h3>
              <div className="w-12 h-0.5 mt-3" style={{ backgroundColor: 'var(--color-steel)' }} />
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
              {CATEGORIES.map((category, i) => (
                <CategoryItem
                  key={i}
                  category={category}
                  isOpen={openIdx === i}
                  toggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: How We Do It */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-lg font-semibold" style={{ color: '#111827' }}>How We Do It</h3>
              <div className="w-12 h-0.5 mt-3" style={{ backgroundColor: 'var(--color-steel)' }} />
            </div>

            {/* CONTINGENT Section */}
            <div className="mb-12">
              <div className="inline-block px-3 py-1.5 rounded-full mb-4" style={{
                backgroundColor: 'rgba(64, 98, 123, 0.08)',
                border: '1px solid rgba(64, 98, 123, 0.2)'
              }}>
                <span className="text-xs font-semibold tracking-wide" style={{ color: 'var(--color-steel)' }}>CONTINGENT</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CONTINGENT_SERVICES.map((service, i) => (
                  <ServiceCard
                    key={i}
                    icon={service.icon}
                    title={service.title}
                    desc={service.desc}
                  />
                ))}
              </div>
            </div>

            {/* PERM Section */}
            <div>
              <div className="inline-block px-3 py-1.5 rounded-full mb-4" style={{
                backgroundColor: 'rgba(64, 98, 123, 0.08)',
                border: '1px solid rgba(64, 98, 123, 0.2)'
              }}>
                <span className="text-xs font-semibold tracking-wide" style={{ color: 'var(--color-steel)' }}>PERM</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PERM_SERVICES.map((service, i) => (
                  <ServiceCard
                    key={i}
                    icon={service.icon}
                    title={service.title}
                    desc={service.desc}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
