import { useEffect, useState } from "react";

function getQueryMatch(query, fallback) {
  if (typeof window === "undefined" || !window.matchMedia) return fallback;
  return window.matchMedia(query).matches;
}

export default function useMediaQuery(query, fallback = false) {
  const [matches, setMatches] = useState(() => getQueryMatch(query, fallback));

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mediaQuery = window.matchMedia(query);
    const onChange = (event) => setMatches(event.matches);

    setMatches(mediaQuery.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", onChange);
      return () => mediaQuery.removeEventListener("change", onChange);
    }

    mediaQuery.addListener(onChange);
    return () => mediaQuery.removeListener(onChange);
  }, [query]);

  return matches;
}
