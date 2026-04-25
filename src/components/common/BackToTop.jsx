import { ArrowUp } from 'lucide-react';

// Matches the dark cinematic design token language — no more theme ternaries,
// no colored background. Minimal ghost button with accent border + glow on hover.
const BackToTop = ({ visible, onClick }) => (
  <button
    onClick={onClick}
    aria-label="Back to top"
    className="fixed bottom-7 right-7 z-40 w-11 h-11 rounded-full flex items-center justify-center
               transition-all duration-300"
    style={{
      background: 'var(--c-surface)',
      border: '1px solid var(--c-border)',
      color: 'var(--c-muted)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(8px)',
      pointerEvents: visible ? 'auto' : 'none',
      boxShadow: visible ? '0 0 20px var(--c-accent-glow)' : 'none',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'rgba(168,85,247,0.6)';
      e.currentTarget.style.color = 'var(--c-accent)';
      e.currentTarget.style.background = 'var(--c-accent-dim)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'var(--c-border)';
      e.currentTarget.style.color = 'var(--c-muted)';
      e.currentTarget.style.background = 'var(--c-surface)';
    }}
  >
    <ArrowUp size={16} />
  </button>
);

export default BackToTop;
