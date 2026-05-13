import Header from './Header';
import Footer from './Footer';

export default function ThankYou() {
  const goHome = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <>
      <Header onCtaClick={goHome} />

      <main className="relative min-h-[calc(100vh-140px)] flex items-center justify-center px-5 sm:px-8 py-28 sm:py-32 overflow-hidden" style={{ background: 'var(--color-bg-soft)' }}>
        <div
          className="hero-shape"
          style={{ top: '-80px', right: '-120px', width: '420px', height: '420px', background: '#38c3f6' }}
        />
        <div
          className="hero-shape"
          style={{ bottom: '-120px', left: '-120px', width: '360px', height: '360px', background: '#38c3f6', opacity: 0.3 }}
        />

        <div className="relative z-[2] max-w-[720px] text-center">
          <div className="check-badge mx-auto">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>

          <div className="tag tag-lime mx-auto mb-8">
            <span className="dot" />
            Intake received · Response within 2 hours
          </div>

          <h1 className="display text-[44px] sm:text-[62px] md:text-[76px] lg:text-[96px] mb-8" style={{ color: 'var(--color-ink)' }}>
            Thank you.
          </h1>

          <p className="text-[17.5px] sm:text-[19px] leading-[1.55] max-w-[540px] mx-auto mb-12" style={{ color: 'var(--color-muted)' }}>
            Your submission is in. A member of our recruitment team will reach out within
            <strong style={{ color: 'var(--color-ink)' }}> two hours</strong>.
            In the meantime, connect with us on LinkedIn for the latest engagements and open roles.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <a
              href="https://www.linkedin.com/company/nexon-software-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lime"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
              </svg>
              Follow on LinkedIn
            </a>
            <button onClick={goHome} className="btn btn-outline">
              ← Return home
            </button>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-7 rounded-[20px] bg-white"
            style={{ border: '1px solid var(--color-line)', boxShadow: '0 18px 40px -20px rgba(11, 28, 46, 0.1)' }}
          >
            {[
              ['Response', '2 h'],
              ['Shortlist', '24 h'],
              ['Placed', '500+'],
              ['Retained', '96%'],
            ].map(([l, v]) => (
              <div key={l} className="text-center">
                <div className="text-[12px] font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--color-muted)' }}>{l}</div>
                <div className="font-extrabold text-[26px] sm:text-[30px] tracking-[-0.03em]" style={{ color: 'var(--color-ink)' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
