import { useState, useEffect, useRef } from 'react';
import { CheckCircle, AlertTriangle, X } from 'lucide-react';

const Notification = ({ type, message, onClose }) => {
  const [exiting, setExiting] = useState(false);

  // Ref guards against double-dismiss (timer + manual click race)
  const dismissedRef = useRef(false);
  // Keep onClose fresh without adding it as effect dependency
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const dismiss = () => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    setExiting(true);
    setTimeout(() => onCloseRef.current(), 360);
  };

  useEffect(() => {
    const t = setTimeout(dismiss, 5000);
    return () => clearTimeout(t);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps — intentional: run once on mount

  const isSuccess  = type === 'success';
  const accent     = isSuccess ? '#22c55e' : '#ef4444';
  const accentDim  = isSuccess ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.14)';
  const Icon       = isSuccess ? CheckCircle : AlertTriangle;
  const title      = isSuccess ? 'Message sent!' : 'Something went wrong';

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 w-[320px] rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(12,12,12,0.97)',
        border: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        boxShadow: `0 0 0 1px ${accent}30, 0 28px 70px rgba(0,0,0,0.65)`,
        animation: exiting
          ? 'notif-out 0.36s cubic-bezier(0.55,0,1,0.45) forwards'
          : 'notif-in  0.52s cubic-bezier(0.34,1.56,0.64,1) forwards',
      }}
    >
      {/* Left accent stripe */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: `linear-gradient(to bottom, ${accent}, ${accent}88)` }}
      />

      {/* Body */}
      <div className="flex items-start gap-3 px-4 pt-4 pb-3 pl-5">
        {/* Icon pill */}
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ background: accentDim }}
        >
          <Icon size={17} strokeWidth={2} style={{ color: accent }} />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0 pt-0.5">
          <p className="text-sm font-semibold mb-0.5" style={{ color: 'var(--c-text)' }}>
            {title}
          </p>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--c-muted)' }}>
            {message}
          </p>
        </div>

        {/* Dismiss button */}
        <button
          onClick={dismiss}
          aria-label="Dismiss notification"
          className="p-1.5 rounded-lg flex-shrink-0 mt-0.5 transition-all duration-200"
          style={{ color: 'var(--c-faint)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.color = 'var(--c-text)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--c-faint)';
          }}
        >
          <X size={14} />
        </button>
      </div>

      {/* Countdown progress bar — shrinks left-to-right over 5 s */}
      <div style={{ height: 2, background: 'rgba(255,255,255,0.05)' }}>
        <div
          style={{
            height: '100%',
            background: `linear-gradient(to right, ${accent}, ${accent}99)`,
            transformOrigin: '0% 50%',
            animation: 'notif-progress 5s linear forwards',
          }}
        />
      </div>
    </div>
  );
};

export default Notification;
