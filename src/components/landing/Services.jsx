const ICONS = {
  staff: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  phone: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  ),
  hr: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  ),
  user: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  ops: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
};

const SERVICES = [
  {
    icon: ICONS.staff,
    title: 'IT Staffing & Recruitment',
    desc: 'Fill critical roles in 24 hours. C2C, C2H, and permanent placements across engineering, data, and product.',
    tags: ['C2C', 'C2H', 'Perm'],
  },
  {
    icon: ICONS.code,
    title: 'Software Development',
    desc: 'Custom web platforms, internal tools, and SaaS products. Full-stack teams that ship weekly, not quarterly.',
    tags: ['Web', 'SaaS', 'APIs'],
  },
  {
    icon: ICONS.phone,
    title: 'App Development',
    desc: 'High-performance native and cross-platform mobile apps for iOS and Android — crafted, not templated.',
    tags: ['iOS', 'Android', 'Flutter'],
  },
  {
    icon: ICONS.hr,
    title: 'HR Solutions & RPO',
    desc: 'Outsourced recruitment that plugs into your ATS. Scale hiring without scaling headcount or overhead.',
    tags: ['RPO', 'ATS', 'Intake'],
  },
  {
    icon: ICONS.user,
    title: 'Dedicated Developers',
    desc: 'Hire vetted engineers on contract or permanent basis. Ramp in days, not weeks. You manage, we support.',
    tags: ['Contract', 'Perm', 'Remote'],
  },
  {
    icon: ICONS.ops,
    title: 'DevOps & Infrastructure',
    desc: 'Streamline deployment pipelines, harden infrastructure, and unlock continuous delivery with senior SREs.',
    tags: ['CI/CD', 'K8s', 'Cloud'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28 lg:py-32" style={{ background: 'var(--color-bg-soft)' }}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-12 gap-8 mb-14 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-4">— Core Capabilities</div>
            <h2 className="display-md text-[30px] sm:text-[40px] md:text-[48px] lg:text-[58px]" style={{ color: 'var(--color-ink)' }}>
              Everything you need to<br />
              scale — in <span style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{ position: 'relative', zIndex: 1 }}>one team.</span>
                <span aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, bottom: '8%', height: '22%', background: 'var(--color-lime)', borderRadius: 3, zIndex: 0 }} />
              </span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-[16.5px] leading-[1.6] max-w-[460px]" style={{ color: 'var(--color-muted)' }}>
              Six core disciplines, one operating principle — bring your hardest problem first.
              We staff, design, and ship what your in-house team doesn't have the capacity for.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <article key={s.title} className="card card-soft">
              <div className="icon-chip">{s.icon}</div>

              <h3 className="mt-7 text-[22px] font-bold tracking-[-0.02em] leading-tight" style={{ color: 'var(--color-ink)' }}>
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.55]" style={{ color: 'var(--color-muted)' }}>
                {s.desc}
              </p>

              <div className="mt-7 flex items-center justify-between pt-5 border-t border-dashed" style={{ borderColor: 'var(--color-line-2)' }}>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11.5px] font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: 'var(--color-bg-2)', color: 'var(--color-ink-2)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center transition-all" style={{ background: 'var(--color-ink)', color: 'var(--color-bg)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
