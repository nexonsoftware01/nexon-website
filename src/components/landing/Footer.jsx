export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-20 pb-10 panel-ink">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-12 gap-10 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <div className="inline-flex items-center bg-white rounded-[14px] px-4 py-3 mb-5">
              <img
                src="/nexlogo.png"
                alt="Nexon Software"
                className="h-8 w-auto select-none"
                draggable="false"
              />
            </div>
            <p className="text-[15px] leading-[1.6] max-w-[420px]" style={{ color: 'var(--color-muted-3)' }}>
              IT staffing and custom software studio based in Noida — serving teams across India,
              the US, and the UK. Your data is 100% secure with us.
            </p>
          </div>

          <div className="col-span-6 lg:col-span-3 lg:col-start-7">
            <div className="text-[12.5px] font-bold uppercase tracking-wider mb-5" style={{ color: 'var(--color-lime)' }}>Reach us</div>
            <ul className="space-y-3">
              <li>
                <a href="mailto:sales@nexonsolution.com" className="text-[14.5px] font-medium hover:text-[var(--color-lime)] transition-colors" style={{ color: 'var(--color-bg)' }}>
                  sales@nexonsolution.com
                </a>
              </li>
              <li>
                <a href="tel:+919953315229" className="text-[14.5px] font-medium hover:text-[var(--color-lime)] transition-colors" style={{ color: 'var(--color-bg)' }}>
                  +91 99533 15229
                </a>
              </li>
              <li className="pt-2 text-[13px]" style={{ color: 'var(--color-muted-3)' }}>
                D-23, Sector 59<br/>Noida 201301, IN
              </li>
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <div className="text-[12.5px] font-bold uppercase tracking-wider mb-5" style={{ color: 'var(--color-lime)' }}>Index</div>
            <ul className="space-y-3">
              <li><a href="#services" className="text-[14.5px] font-medium hover:text-[var(--color-lime)] transition-colors" style={{ color: 'var(--color-bg)' }}>Services</a></li>
              <li><a href="#why" className="text-[14.5px] font-medium hover:text-[var(--color-lime)] transition-colors" style={{ color: 'var(--color-bg)' }}>Why Nexon</a></li>
              <li><a href="#contact" className="text-[14.5px] font-medium hover:text-[var(--color-lime)] transition-colors" style={{ color: 'var(--color-bg)' }}>Get started</a></li>
              <li><a href="/privacy" className="text-[14.5px] font-medium hover:text-[var(--color-lime)] transition-colors" style={{ color: 'var(--color-bg)' }}>Privacy policy</a></li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div
            className="font-extrabold tracking-[-0.04em] leading-none select-none"
            style={{
              fontSize: 'clamp(64px, 14vw, 220px)',
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(255,255,255,0.18)',
            }}
          >
            NEXON<span style={{ WebkitTextStroke: '0', color: 'var(--color-lime)' }}>.</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="text-[12.5px]" style={{ color: 'var(--color-muted-3)' }}>
            © {year} Nexon Software Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[12.5px]" style={{ color: 'var(--color-muted-3)' }}>
            <span>Crafted in Noida — shipped worldwide</span>
            <span className="pulse-dot" />
          </div>
        </div>
      </div>
    </footer>
  );
}
