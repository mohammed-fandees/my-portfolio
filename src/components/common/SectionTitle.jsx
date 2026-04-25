import useReveal from '../../hooks/useReveal';

// Used by Experience and Testimonials — upgraded to match the cinematic design
// language without touching those sections' internals. The gradient underline
// bar is gone; eyebrow + statement + muted subtitle replaces it.
const SectionTitle = ({ title, subtitle, chapter, centered = true }) => {
  const ref = useReveal('fade-up', { delay: 0 });

  return (
    <div ref={ref} className={`${centered ? 'text-center' : ''} mb-16`}>
      {chapter && (
        <p className="eyebrow mb-4" style={{ color: 'var(--c-accent)' }}>
          {chapter}
        </p>
      )}
      <h2
        id={`${title.toLowerCase().replace(/\s+/g, '-')}-title`}
        className="display-md mb-4"
        style={{ color: 'var(--c-text)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm leading-relaxed max-w-xl ${centered ? 'mx-auto' : ''}`}
          style={{ color: 'var(--c-muted)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
