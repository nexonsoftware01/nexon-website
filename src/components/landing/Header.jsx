import { useEffect, useState } from 'react';

function usePath() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => {
      setPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return path;
}

export default function Header({ onCtaClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const path = usePath();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      if (path === '/') {
        const sections = ['services', 'why', 'career', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);

          if (element) {
            const { offsetTop, offsetHeight } = element;

            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
      } else {
        setActiveSection('');
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener('scroll', onScroll);
  }, [path]);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;

      if (hash) {
        const id = hash.replace('#', '');

        setTimeout(() => {
          const el = document.getElementById(id);

          if (el) {
            el.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }, 100);
      }
    };

    scrollToHash();

    window.addEventListener('popstate', scrollToHash);

    return () => {
      window.removeEventListener('popstate', scrollToHash);
    };
  }, []);

  const handleNav = (target) => (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // Career page
    if (target === 'career') {
      window.location.href = '/career';
      return;
    }

    // If already on homepage, scroll directly
    if (window.location.pathname === '/') {
      const el = document.getElementById(target);

      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        window.history.pushState(
          null,
          '',
          `/#${target}`
        );
      }

      return;
    }

    // If on another page, go to homepage section
    window.location.href = `/#${target}`;
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-[background,border-color,box-shadow,backdrop-filter] duration-300"
      style={{
        background: scrolled
          ? 'rgba(255,255,255,0.88)'
          : 'transparent',
        borderBottom: `1px solid ${scrolled ? 'var(--color-line)' : 'transparent'
          }`,
        backdropFilter: scrolled
          ? 'saturate(180%) blur(12px)'
          : 'none',
        WebkitBackdropFilter: scrolled
          ? 'saturate(180%) blur(12px)'
          : 'none',
        boxShadow: scrolled
          ? '0 1px 0 rgba(11,28,46,0.04)'
          : 'none',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center group"
          aria-label="Nexon Software Home"
        >
          <img
            src="/nexlogo.png"
            alt="Nexon Software"
            className="!h-8 sm:!h-10 lg:!h-11 !w-auto select-none"
            draggable="false"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/#services"
            onClick={handleNav('services')}
            className={`text-[14.5px] font-medium hover:text-[var(--color-steel-3)] transition-all duration-300 px-2 py-1 border-b-2 ${activeSection === 'services'
              ? 'border-[var(--color-steel-3)]'
              : 'border-transparent hover:border-[var(--color-steel-2)]'
              }`}
            style={{ color: 'var(--color-ink-2)' }}
          >
            Services
          </a>

          <a
            href="/#contact"
            onClick={handleNav('contact')}
            className={`text-[14.5px] font-medium hover:text-[var(--color-steel-3)] transition-all duration-300 px-2 py-1 border-b-2 ${activeSection === 'contact'
              ? 'border-[var(--color-steel-3)]'
              : 'border-transparent hover:border-[var(--color-steel-2)]'
              }`}
            style={{ color: 'var(--color-ink-2)' }}
          >
            Contact
          </a>

          <a
            href="/#why"
            onClick={handleNav('why')}
            className={`text-[14.5px] font-medium hover:text-[var(--color-steel-3)] transition-all duration-300 px-2 py-1 border-b-2 ${activeSection === 'why'
              ? 'border-[var(--color-steel-3)]'
              : 'border-transparent hover:border-[var(--color-steel-2)]'
              }`}
            style={{ color: 'var(--color-ink-2)' }}
          >
            Why Nexon
          </a>

          <a
            href="/career"
            onClick={handleNav('career')}
            className={`text-[14.5px] font-medium hover:text-[var(--color-steel-3)] transition-all duration-300 px-2 py-1 border-b-2 ${activeSection === 'career'
              ? 'border-[var(--color-steel-3)]'
              : 'border-transparent hover:border-[var(--color-steel-2)]'
              }`}
            style={{ color: 'var(--color-ink-2)' }}
          >
            Career
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919953315229"
            className="hidden lg:inline-flex items-center gap-2 text-[13.5px] font-medium hover:text-[var(--color-steel-3)] transition-colors"
            style={{ color: 'var(--color-ink-2)' }}
          >
            <span className="pulse-dot" />
            +91 99533 15229
          </a>

          <button
            onClick={onCtaClick}
            className="btn btn-outline !py-1 !px-2 !text-[12px] sm:!py-[10px] sm:!px-5 sm:!text-[10px] lg:!py-[12px] lg:!px-6 lg:!text-[13px] flex items-center gap-2"
          >
            Hire Now
            <svg
              className="arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10"
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ color: 'var(--color-ink)' }}
            >
              {mobileMenuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6l-12 12" />
                </>
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--color-line)] shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-4">
            <a
              href="/#services"
              onClick={handleNav('services')}
              className="text-sm font-medium"
            >
              Services
            </a>

            <a
              href="/#contact"
              onClick={handleNav('contact')}
              className="text-sm font-medium"
            >
              Contact
            </a>

            <a
              href="/#why"
              onClick={handleNav('why')}
              className="text-sm font-medium"
            >
              Why Nexon
            </a>

            <a
              href="/career"
              onClick={handleNav('career')}
              className="text-sm font-medium"
            >
              Career
            </a>
          </div>
        </div>
      )}
    </header>
  );
}