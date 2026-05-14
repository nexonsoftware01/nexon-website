import { useEffect, useState } from 'react';
import Landing from './components/landing/Landing';
import ThankYou from './components/landing/ThankYou';
import Career from './components/landing/Career';
import Privacy from './components/landing/Privacy';

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

export default function App() {
  const path = usePath();
  if (path === '/thank-you') return <ThankYou />;
  if (path === '/career') return <Career />;
  if (path === '/privacy') return <Privacy />;
  return <Landing />;
}
