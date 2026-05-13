import { useState, useEffect, useRef } from 'react';
import { useCountUp } from '../../hooks/useCountUp';

const STATS = [
  { value: 500, suffix: '+', label: 'Placements delivered', sub: 'Across India, US & UK' },
  { value: 50, suffix: '+', label: 'Tech projects shipped', sub: 'MVP to enterprise scale' },
  { value: 24, suffix: 'h', label: 'Average time-to-hire', sub: 'Shortlist → signed offer', highlight: true },
  { value: 96, suffix: '%', label: 'Client retention', sub: 'Year over year' },
];

function StatCard({ stat, index, start }) {
  const count = useCountUp(stat.value, 1700, start);
  return (
    <div
      key={stat.label}
      className="p-7 sm:p-9 lg:p-10"
      style={{
        borderRight: index < STATS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
        borderBottom: index < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <div className="flex items-center gap-2 mb-6">
        <span className="pulse-dot" style={{ background: 'var(--color-steel)' }} />
        <span className="text-[12px] font-semibold uppercase tracking-wider" style={{ color: 'var(--color-muted-3)' }}>
          0{index + 1} / 04
        </span>
      </div>
      <div
        className="font-extrabold leading-[0.9] tracking-[-0.04em] mb-4"
        style={{
          fontSize: 'clamp(54px, 7vw, 84px)',
          color: stat.highlight ? 'var(--color-steel)' : 'var(--color-bg)',
        }}
      >
        {count}
        {stat.suffix}
      </div>
      <div className="font-bold text-[16.5px] leading-tight mb-1.5" style={{ color: 'var(--color-bg)' }}>
        {stat.label}
      </div>
      <div className="text-[13px]" style={{ color: 'var(--color-muted-3)' }}>
        {stat.sub}
      </div>
    </div>
  );
}

export default function Stats() {
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStart(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" ref={sectionRef} className="relative py-24 sm:py-28 lg:py-32 panel-ink">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-12 gap-8 mb-14 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-4" style={{ color: 'var(--color-steel)' }}> Why Nexon</div>
            <h2 className="display-md text-[30px] sm:text-[40px] md:text-[48px] lg:text-[58px]" style={{ color: 'var(--color-bg)' }}>
              Teams that measure<br />
              twice, <span style={{ color: 'var(--color-steel)' }}>ship once.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-[16.5px] leading-[1.6] max-w-[460px]" style={{ color: 'var(--color-muted-3)' }}>
              Six years. 500+ engineers placed. A reputation for doing what we say we'll do 
              on the timeline we say we'll do it.
            </p>
          </div>
        </div>

        <div
          className="rounded-[24px] overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} start={start} />
            ))}
          </div>
        </div>

        {/* Testimonial strip */}
        <div className="mt-16 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-start gap-5">
              <span className="quote-mark">"</span>
              <p className="text-[20px] sm:text-[24px] leading-[1.35] font-medium tracking-[-0.015em]" style={{ color: 'var(--color-bg)' }}>
                Nexon plugged three senior engineers into our platform team in under a week.
                Zero ramp-up drama, and the shortlist arrived before our own recruiter had finished writing the JD.
              </p>
            </div>
            <div className="mt-7 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-[15px]" style={{ background: 'var(--color-steel)', color: 'var(--color-steel-ink)' }}>
                RK
              </div>
              <div>
                <div className="font-bold text-[15px]" style={{ color: 'var(--color-bg)' }}>Rahul Kapoor</div>
                <div className="text-[13px]" style={{ color: 'var(--color-muted-3)' }}>VP Engineering, Meridian Tech</div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {[
                ['ISO 9001', 'Certified operations'],
                ['SOC 2', 'Data & security'],
                ['GDPR', 'Privacy compliant'],
                ['SLA-backed', 'Contractual response'],
              ].map(([a, b]) => (
                <div key={a} className="p-5 rounded-[16px]" style={{ background: 'rgba(184, 244, 86, 0.06)', border: '1px solid rgba(184, 244, 86, 0.15)' }}>
                  <div className="font-bold text-[15.5px]" style={{ color: 'var(--color-steel)' }}>{a}</div>
                  <div className="text-[12.5px] mt-1" style={{ color: 'var(--color-muted-3)' }}>{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
