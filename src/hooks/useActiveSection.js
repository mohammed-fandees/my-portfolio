import { useEffect, useMemo, useRef, useState } from "react";

const SECTION_IDS = [
  "home",
  "about",
  "services",
  "skills",
  "portfolio",
  "experience",
  "testimonials",
  "contact",
];
const HEADER_OFFSET = 120;

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");
  const mutationObserver = useRef(null);
  const ticking = useRef(false);

  const getAvailableSections = useMemo(
    () => () =>
      SECTION_IDS.map((id) => ({ id, el: document.getElementById(id) })).filter(
        (section) => Boolean(section.el),
      ),
    [],
  );

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = getAvailableSections();
      if (!sections.length) return;

      const scrollY = window.scrollY;
      const viewportBottom = scrollY + window.innerHeight;

      // If user reached page end, force the last available section active.
      if (Math.ceil(viewportBottom) >= document.documentElement.scrollHeight) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      let currentId = sections[0].id;
      for (let i = 0; i < sections.length; i += 1) {
        const { id, el } = sections[i];
        const sectionTop = el.offsetTop;
        if (scrollY + HEADER_OFFSET >= sectionTop) {
          currentId = id;
        } else {
          break;
        }
      }

      setActiveSection(currentId);
    };

    const scheduleUpdate = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        updateActiveSection();
        ticking.current = false;
      });
    };

    scheduleUpdate();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    mutationObserver.current = new MutationObserver(scheduleUpdate);
    mutationObserver.current.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.current?.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, [getAvailableSections]);

  return { activeSection };
};

export default useActiveSection;
