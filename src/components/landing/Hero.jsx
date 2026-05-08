export default function Hero({ onCtaClick }) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Soft lime shape */}
      <div
        className="hero-shape"
        style={{ top: '-80px', right: '-120px', width: '520px', height: '520px', background: '#B8F456' }}
      />
      <div
        className="hero-shape"
        style={{ bottom: '-160px', left: '-140px', width: '460px', height: '460px', background: '#B8F456', opacity: 0.35 }}
      />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 relative">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: headline + CTAs */}
          <div className="col-span-12 lg:col-span-7">
            <div className="reveal reveal-1 mb-7">
              <span className="tag tag-lime">
                <span className="dot" />
                Accepting engagements · Q2 2026
              </span>
            </div>

            <h1
              className="display reveal reveal-2 text-[34px] xs:text-[40px] sm:text-[52px] md:text-[62px] lg:text-[68px] xl:text-[88px]"
              style={{ color: 'var(--color-ink)' }}
            >
              Hire top-tier<br />
              developers &amp; IT talent<br />
              <span className="relative inline-block">
                <span className="relative z-[1]">in 24 hours.</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-[6%] h-[18%] -z-0"
                  style={{ background: 'var(--color-lime)', borderRadius: 4 }}
                />
              </span>
            </h1>

            <p
              className="reveal reveal-3 mt-8 text-[17.5px] sm:text-[19px] leading-[1.55] max-w-[580px]"
              style={{ color: 'var(--color-muted)' }}
            >
              High-intent IT staffing and custom software solutions tailored to your business needs.
              Vetted engineers, contract-to-hire and permanent placements — delivered with precision and urgency.
            </p>

            <div className="reveal reveal-4 mt-10 flex flex-wrap gap-3 items-center">
              <button onClick={onCtaClick} className="btn btn-lime">
                Get Started
                <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </button>
              <a href="#services" className="btn btn-outline">
                Browse services
              </a>

              <div className="hidden md:flex items-center gap-3 ml-4 pl-6 border-l" style={{ borderColor: 'var(--color-line-2)' }}>
                <div className="flex -space-x-2">
                  {['#B8F456', '#0B1C2E', '#FF7A5C', '#7E8B99'].map((c, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-[2.5px] border-white"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <div className="text-[13px] leading-tight">
                  <div className="font-semibold" style={{ color: 'var(--color-ink)' }}>500+ placements</div>
                  <div style={{ color: 'var(--color-muted-2)' }}>across India · US · UK</div>
                </div>
              </div>
            </div>

            {/* mini stats strip */}
            <div className="reveal reveal-5 mt-12 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-[640px]">
              {[
                ['24h', 'Avg. time to hire'],
                ['500+', 'Placements'],
                ['96%', 'Retention'],
              ].map(([n, l]) => (
                <div key={l} className="pt-4 sm:pt-5 border-t-[2px]" style={{ borderColor: 'var(--color-ink)' }}>
                  <div className="text-[26px] sm:text-[34px] md:text-[42px] font-extrabold tracking-[-0.03em] leading-none" style={{ color: 'var(--color-ink)' }}>{n}</div>
                  <div className="mt-2 text-[11.5px] sm:text-[12.5px] font-medium" style={{ color: 'var(--color-muted)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: glass card with illustration */}
          <div className="col-span-12 lg:col-span-5 reveal reveal-3">
            <div className="relative">
              <div
                className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden p-5 sm:p-7 lg:p-10"
                style={{ background: 'linear-gradient(160deg, #0B1C2E 0%, #1A3052 100%)' }}
              >
                {/* Lime glow */}
                <div
                  className="absolute -top-20 -right-20 w-[280px] h-[280px] rounded-full blur-[80px]"
                  style={{ background: 'rgba(184, 244, 86, 0.45)' }}
                />

                <div className="relative">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="pulse-dot" />
                    <span className="text-[12.5px] font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      Live — Hiring dashboard
                    </span>
                  </div>

                  <div className="text-white/95 text-[13px] sm:text-[14px] font-medium mb-1">Open brief · Senior React Engineer</div>
                  <div className="flex items-center justify-between gap-3 mb-6 sm:mb-7 flex-wrap">
                    <div className="text-white font-extrabold text-[22px] sm:text-[26px] md:text-[28px] tracking-tight">NXN-12840</div>
                    <span className="px-3 py-1 rounded-full text-[10.5px] sm:text-[11.5px] font-semibold whitespace-nowrap" style={{ background: 'var(--color-lime)', color: 'var(--color-lime-ink)' }}>
                      SHORTLIST READY
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { name: 'Priya S.', role: 'Senior · 8 yrs', match: 98 },
                      { name: 'Rahul K.', role: 'Senior · 7 yrs', match: 94 },
                      { name: 'Aisha M.', role: 'Senior · 9 yrs', match: 91 },
                    ].map((c) => (
                      <div
                        key={c.name}
                        className="flex items-center justify-between rounded-[14px] px-4 py-3"
                        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-[13px]" style={{ background: 'var(--color-lime)', color: 'var(--color-lime-ink)' }}>
                            {c.name[0]}
                          </div>
                          <div>
                            <div className="text-white font-semibold text-[14px] leading-tight">{c.name}</div>
                            <div className="text-[11.5px]" style={{ color: 'rgba(255,255,255,0.65)' }}>{c.role}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-[64px] h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }}>
                            <div className="h-full rounded-full" style={{ width: c.match + '%', background: 'var(--color-lime)' }} />
                          </div>
                          <span className="text-white font-semibold text-[12.5px] w-8 text-right">{c.match}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between pt-5 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                    <div className="text-[12.5px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      Opened <span className="text-white font-semibold">11 hrs ago</span>
                    </div>
                    <div className="flex items-center gap-1 text-[12.5px] font-semibold" style={{ color: 'var(--color-lime)' }}>
                      View brief →
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <div
                className="hidden md:block absolute -bottom-8 -left-8 rounded-[20px] bg-white p-5 pr-7"
                style={{ boxShadow: '0 24px 48px -20px rgba(11, 28, 46, 0.18), 0 8px 18px -6px rgba(11, 28, 46, 0.08)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[14px] bg-[var(--color-lime)] flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E3200" strokeWidth="2.4">
                      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-extrabold text-[20px] leading-none tracking-tight" style={{ color: 'var(--color-ink)' }}>24 hours</div>
                    <div className="text-[12.5px] mt-1" style={{ color: 'var(--color-muted)' }}>Shortlist → signed offer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
