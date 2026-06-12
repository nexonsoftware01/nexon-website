import { useEffect, useState } from 'react';

const STAFFING_SERVICES = [
  { slug: 'technology-staffing', label: 'Technology Staffing' },
  { slug: 'digital-creative', label: 'Digital & Creative' },
  { slug: 'scientific-clinical', label: 'Scientific & Clinical' },
  { slug: 'professional-staffing', label: 'Professional Staffing' },
  { slug: 'industry-specialized', label: 'Industry Specialized Staffing' },
  { slug: 'partnership-msp', label: 'Partnership with MSP/VMS' },
];

const IT_SOLUTIONS_SERVICES = [
  { slug: 'application-services', label: 'Application Services', description: 'Full lifecycle software delivery, modernization, integration and support.' },
  { slug: 'ai-ml-solutions', label: 'AI / ML Solutions', description: 'Predictive intelligence, automation, and data-driven decision support.' },
  { slug: 'data-analyst', label: 'Data Analytics & Insights', description: 'Analytics, dashboards, reporting and business intelligence for smarter decisions.' },
  { slug: 'generative-ai', label: 'Generative AI', description: 'Content automation, knowledge assistants, and prompt-driven workflows.' },
  { slug: 'data-engineer', label: 'Data Engineering', description: 'Design and build scalable data pipelines, warehouses, and analytics foundations.' },
  { slug: 'cloud-computing', label: 'Cloud Computing', description: 'Cloud strategy, migration, infrastructure automation and managed platforms.' },
  { slug: 'it-staffing-recruitment', label: 'IT Staffing & Recruitment', description: 'Flexible technical staffing and recruitment for growth-focused teams.' },
  { slug: 'software-development', label: 'Software Development', description: 'Custom software engineering and product development services.' },
  { slug: 'app-development', label: 'App Development', description: 'Mobile and web app development for modern user experiences.' },
  { slug: 'hr-solutions-rpo', label: 'HR Solutions & RPO', description: 'Recruitment process outsourcing and HR technology transformation.' },
  { slug: 'dedicated-developers', label: 'Dedicated Developers', description: 'Focused engineering talent for long-term product delivery.' },
  { slug: 'devops-infrastructure', label: 'DevOps & Infrastructure', description: 'Cloud infrastructure, automation, and DevOps strategy services.' },
];

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
  const [staffingDropdownOpen, setStaffingDropdownOpen] = useState(false);
  const [itSolutionsDropdownOpen, setItSolutionsDropdownOpen] = useState(false);
  const [itSolutionsModalOpen, setItSolutionsModalOpen] = useState(false);

  const path = usePath();
  const activeStaffingCategory = new URLSearchParams(window.location.search).get('category') || 'technology-staffing';
  const activeITServiceCategory = new URLSearchParams(window.location.search).get('category') || 'application-services';

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

  const openItSolutionsModal = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setItSolutionsModalOpen(true);
  };

  const closeItSolutionsModal = () => {
    setItSolutionsModalOpen(false);
  };

  const handleNav = (target) => (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // Career page
    if (target === 'career') {
      window.location.href = '/career';
      return;
    }

    if (target === 'application-services') {
      window.location.href = '/application-services';
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
          {/* IT Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setItSolutionsDropdownOpen(true)}
            onMouseLeave={() => setItSolutionsDropdownOpen(false)}
          >
            <a
              href="/application-services?category=application-services"
              onClick={() => setItSolutionsDropdownOpen(false)}
              className={`text-[14.5px] font-medium hover:text-[var(--color-steel-3)] transition-all duration-300 px-2 py-1 border-b-2 cursor-pointer ${itSolutionsDropdownOpen ? 'border-[var(--color-steel-3)]' : 'border-transparent hover:border-[var(--color-steel-2)]'}`}
              style={{ color: 'var(--color-ink-2)' }}
            >
              IT Solutions
            </a>

            <div
              className={`absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-lg border border-[var(--color-line)] overflow-hidden transition-all duration-200 origin-top ${itSolutionsDropdownOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}
            >
              {IT_SOLUTIONS_SERVICES.map((service) => {
                const isActive = service.slug === activeITServiceCategory && window.location.pathname === '/application-services';
                return (
                  <a
                    key={service.slug}
                    href={`/application-services?category=${service.slug}`}
                    className={`block px-4 py-3 text-sm font-medium transition-colors border-b border-[var(--color-line)] last:border-b-0 ${isActive ? 'bg-[var(--color-steel)] text-white hover:bg-[var(--color-steel-2)]' : 'hover:bg-[var(--color-bg-soft)] text-[var(--color-ink-2)]'}`}
                    onClick={() => setItSolutionsDropdownOpen(false)}
                  >
                    {service.label}
                  </a>
                );
              })}
            </div>
          </div>
          {/* Staffing Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setStaffingDropdownOpen(true)}
            onMouseLeave={() => setStaffingDropdownOpen(false)}
          >
            <a
              href="/staffing?category=technology-staffing"
              onClick={() => setStaffingDropdownOpen(false)}
              className={`text-[14.5px] font-medium hover:text-[var(--color-steel-3)] transition-all duration-300 px-2 py-1 border-b-2 ${staffingDropdownOpen
                ? 'border-[var(--color-steel-3)]'
                : 'border-transparent hover:border-[var(--color-steel-2)]'
                }`}
              style={{ color: 'var(--color-ink-2)' }}
            >
              Staffing Services
            </a>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-[var(--color-line)] overflow-hidden transition-all duration-200 origin-top ${staffingDropdownOpen
                ? 'opacity-100 scale-y-100 pointer-events-auto'
                : 'opacity-0 scale-y-95 pointer-events-none'
                }`}
            >
              {STAFFING_SERVICES.map((service) => {
                const isActive = service.slug === activeStaffingCategory && window.location.pathname === '/staffing';
                return (
                  <a
                    key={service.slug}
                    href={`/staffing?category=${service.slug}`}
                    className={`block px-4 py-3 text-sm font-medium transition-colors border-b border-[var(--color-line)] last:border-b-0 ${isActive ? 'bg-[var(--color-steel)] text-white hover:bg-[var(--color-steel-2)]' : 'hover:bg-[var(--color-bg-soft)] text-[var(--color-ink-2)]'}`}
                    onClick={() => setStaffingDropdownOpen(false)}
                  >
                    {service.label}
                  </a>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+918929324727"
            className="hidden lg:inline-flex items-center gap-2 text-[13.5px] font-medium hover:text-[var(--color-steel-3)] transition-colors"
            style={{ color: 'var(--color-ink-2)' }}
          >
            <span className="pulse-dot" />
            +91 8929324727
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
              href="/application-services?category=application-services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium"
            >
              IT Solutions
            </a>

            <a
              href="/staffing?category=technology-staffing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium"
            >
              Staffing Services
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

            <div className="border-t border-[var(--color-line)] pt-4 mt-2">
              <div className="text-xs font-semibold text-[var(--color-steel)] uppercase tracking-wide mb-3">
                Staffing Services
              </div>
              <div className="flex flex-col gap-2">
                {STAFFING_SERVICES.map((service) => (
                  <a
                    key={service.slug}
                    href={`/staffing?category=${service.slug}`}
                    className="text-sm font-medium text-[var(--color-ink-2)] pl-3 border-l-2 border-transparent hover:border-[var(--color-steel-3)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {itSolutionsModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8"
          onClick={closeItSolutionsModal}
        >
          <div
            className="w-full max-w-3xl rounded-[22px] bg-white shadow-2xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-6 border-b border-gray-200">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] font-semibold text-[var(--color-steel)]">
                  IT Solutions
                </p>
                <h2 className="mt-3 text-3xl font-bold" style={{ color: '#06152b' }}>
                  Choose your IT service
                </h2>
                <p className="mt-3 text-sm text-[var(--color-ink-3)] max-w-2xl">
                  Select a solution and continue to the dedicated IT page for details.
                </p>
              </div>
              <button
                onClick={closeItSolutionsModal}
                className="text-[var(--color-ink)] hover:text-[var(--color-steel)]"
                aria-label="Close IT Solutions popup"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
              {IT_SOLUTIONS_SERVICES.map((service) => (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => {
                    setItSolutionsModalOpen(false);
                    window.location.href = `/application-services?category=${service.slug}`;
                  }}
                  className="group rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:border-[var(--color-steel)] hover:shadow-lg"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold" style={{ color: '#06152b' }}>
                      {service.label}
                    </h3>
                    <span className="text-[var(--color-steel)] text-sm">View</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-ink-3)]">
                    {service.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}