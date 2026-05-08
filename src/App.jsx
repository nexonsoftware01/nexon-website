import { useEffect, useState } from 'react';
import Landing from './components/landing/Landing';
import ThankYou from './components/landing/ThankYou';

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
  return path === '/thank-you' ? <ThankYou /> : <Landing />;
}
