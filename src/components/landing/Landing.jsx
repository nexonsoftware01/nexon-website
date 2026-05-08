import { useCallback, useRef } from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Stats from './Stats';
import TrustLogos from './TrustLogos';
import LeadForm from './LeadForm';
import Footer from './Footer';
import StickyCall from './StickyCall';

export default function Landing() {
  const formRef = useRef(null);

  const scrollToForm = useCallback(() => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    const top = window.scrollY + rect.top - 80;
    window.scrollTo({ top, behavior: 'smooth' });
    setTimeout(() => {
      const firstInput = formRef.current.querySelector('input, select');
      firstInput && firstInput.focus({ preventScroll: true });
    }, 650);
  }, []);

  return (
    <>
      <Header onCtaClick={scrollToForm} />
      <main>
        <Hero onCtaClick={scrollToForm} />
        <Services />
        <LeadForm innerRef={formRef} />
        <Stats />
        <TrustLogos />
      </main>
      <Footer />
      <StickyCall />
    </>
  );
}
