import { motion } from 'framer-motion';

const ICONS = {
  account: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" /><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /><path d="M9 12h6" /><path d="M12 9v6" />
    </svg>
  ),
  team: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  sourcing: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M11 8v6m3-3H8" />
    </svg>
  ),
  diversity: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  consultant: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  ),
  sla: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  risk: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" />
    </svg>
  ),
  office: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M7 14h10M7 18h10" />
    </svg>
  ),
};

const SERVICES = [
  { icon: 'account', title: 'Dedicated Account Management', desc: 'Dedicated account team ensuring your success and satisfaction.' },
  { icon: 'team', title: 'Dedicated, Specialized & Scalable Recruitment Team', desc: 'Expert recruitment professionals tailored to your specific needs.' },
  { icon: 'sourcing', title: 'Efficient Talent Candidate Sourcing & Screening Strategy', desc: 'Strategic approach to finding and vetting top talent efficiently.' },
  { icon: 'diversity', title: 'Customized Diversity & Inclusion Strategy & Execution', desc: 'Building diverse teams that reflect your organizational values.' },
  { icon: 'consultant', title: 'Dedicated Shared-Consultant Care', desc: 'Ongoing support and management of your contingent workforce.' },
  { icon: 'sla', title: 'Matured Performance / SLA Management & Governance', desc: 'Robust performance metrics and service level agreements.' },
  { icon: 'risk', title: 'Matured Risk & Compliance Management', desc: 'Comprehensive compliance and risk mitigation strategies.' },
  { icon: 'office', title: 'Shared Back-Office Services', desc: 'Streamlined administration and back-office support.' },
];

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
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
          style={{
            backgroundColor: 'rgba(64, 98, 123, 0.08)',
            color: 'var(--color-steel)',
          }}
        >
          {ICONS[icon]}
        </div>
      </div>
      <h4 className="text-[15px] font-semibold mb-2" style={{ color: '#111827' }}>
        {title}
      </h4>
      <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
        {desc}
      </p>
    </motion.div>
  );
}

export default function PartnershipMSP() {
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
            Partnership with MSP/VMS
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
              <h3 className="text-lg font-semibold" style={{ color: '#111827' }}>
                What We Offer
              </h3>
              <div className="w-12 h-0.5 mt-3" style={{ backgroundColor: 'var(--color-steel)' }} />
            </div>
            <p style={{ color: '#4b5563' }} className="leading-relaxed text-sm mb-4">
              Mindlance is a leading staffing partner to vendor-neutral MSP/VMS contingent labor programs. Our methodology embraces the efficiency of such programs and leverages their capability to minimize client cost and maximize response time, coverage and compliance.
            </p>
            <p style={{ color: '#4b5563' }} className="leading-relaxed text-sm">
              Our talent supply chain is specifically configured to seamlessly partner with MSP or managed VMS programs. With Mindlance, you get the best of both worlds – the efficiencies of MSP/VMS/VOP programs and the staffing outcomes that only individualized & dedicated client focus can provide.
            </p>
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
              <h3 className="text-lg font-semibold" style={{ color: '#111827' }}>
                How We Do It
              </h3>
              <div className="w-12 h-0.5 mt-3" style={{ backgroundColor: 'var(--color-steel)' }} />
            </div>

            <div>
              <div className="inline-block px-3 py-1.5 rounded-full mb-4" style={{
                backgroundColor: 'rgba(64, 98, 123, 0.08)',
                border: '1px solid rgba(64, 98, 123, 0.2)'
              }}>
                <span className="text-xs font-semibold tracking-wide" style={{ color: 'var(--color-steel)' }}>MSP/VMS SERVICES</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SERVICES.map((service, i) => (
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
