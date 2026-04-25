import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';

const DeferredSections = lazy(() => import('./HomeDeferredSections'));

export default function Home() {
  const [shouldLoadDeferred, setShouldLoadDeferred] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const currentHash = window.location.hash.replace(/^#/, '');
    if (currentHash && !['home', 'about'].includes(currentHash)) {
      setShouldLoadDeferred(true);
    }

    let idleHandle = null;
    if ('requestIdleCallback' in window) {
      idleHandle = window.requestIdleCallback(() => setShouldLoadDeferred(true), { timeout: 1500 });
    } else {
      idleHandle = window.setTimeout(() => setShouldLoadDeferred(true), 1200);
    }

    const sentinel = sentinelRef.current;
    let observer = null;
    if (sentinel && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry?.isIntersecting) {
            setShouldLoadDeferred(true);
            observer.disconnect();
          }
        },
        { rootMargin: '700px 0px' }
      );
      observer.observe(sentinel);
    }

    return () => {
      if ('cancelIdleCallback' in window && typeof idleHandle === 'number') {
        window.cancelIdleCallback(idleHandle);
      } else {
        window.clearTimeout(idleHandle);
      }
      observer?.disconnect();
    };
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <div ref={sentinelRef} aria-hidden="true" />
      {shouldLoadDeferred ? (
        <Suspense fallback={null}>
          <DeferredSections />
        </Suspense>
      ) : null}
    </main>
  )
}
