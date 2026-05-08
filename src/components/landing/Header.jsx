import { useEffect, useState } from 'react';

export default function Header({ onCtaClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-[background,border-color,box-shadow,backdrop-filter] duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
        borderBottom: `1px solid ${scrolled ? 'var(--color-line)' : 'transparent'}`,
        backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(11,28,46,0.04)' : 'none',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center group" aria-label="Nexon Software — Home">
          <img
            src="/nexlogo.png"
            alt="Nexon Software"
            className="h-9 sm:h-10 lg:h-11 w-auto select-none"
            draggable="false"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-[14.5px] font-medium hover:text-[var(--color-lime-3)] transition-colors" style={{ color: 'var(--color-ink-2)' }}>Services</a>
          <a href="#why" className="text-[14.5px] font-medium hover:text-[var(--color-lime-3)] transition-colors" style={{ color: 'var(--color-ink-2)' }}>Why Nexon</a>
          <a href="#contact" className="text-[14.5px] font-medium hover:text-[var(--color-lime-3)] transition-colors" style={{ color: 'var(--color-ink-2)' }}>Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919953315229"
            className="hidden lg:inline-flex items-center gap-2 text-[13.5px] font-medium hover:text-[var(--color-lime-3)] transition-colors"
            style={{ color: 'var(--color-ink-2)' }}
          >
            <span className="pulse-dot" />
            +91 99533 15229
          </a>
          <button onClick={onCtaClick} className="btn btn-lime !py-[10px] !px-5 !text-[14px]">
            Hire Now
            <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
