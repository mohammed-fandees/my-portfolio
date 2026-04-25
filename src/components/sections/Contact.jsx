import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from '../../animation/gsap';
import { EASE, BREAKPOINT } from '../../animation/tokens';
import useReveal from '../../hooks/useReveal';
import Notification from '../common/Notification';
import ContactSocialLinks from './contact/ContactSocialLinks';
import ContactForm from './contact/ContactForm';

const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

// Final scene — deliberately minimal. The email address IS the CTA.
// A secondary form sits below for those who prefer it. The hierarchy says:
// "Here's how to reach me" before "Here's a form."
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef(null);
  const displayRef = useRef(null);

  const eyebrowRef = useReveal('fade');
  const headingRef = useReveal('fade-up', { delay: 60 });
  const emailRef = useReveal('fade-up', { delay: 160 });
  const socialRef = useReveal('fade-up', { delay: 240 });
  const formRef = useReveal('fade-up', { delay: 320 });

  // Magnetic glow on the email link — tracks cursor on desktop
  useEffect(() => {
    const el = displayRef.current;
    if (!el) return;
    const mm = gsap.matchMedia();

    mm.add(BREAKPOINT.desktopMotion, () => {
      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, {
          x: x * 0.08,
          y: y * 0.08,
          duration: 0.4,
          ease: 'power2.out',
        });
      };
      const onLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: EASE.spring });
      };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      return () => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      };
    });

    return () => mm.revert();
  }, []);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setNotification({ show: true, type: 'error', message: 'Contact form not configured.' });
      setIsSubmitting(false);
      return;
    }
    try {
      const { default: emailjs } = await import('emailjs-com');
      await emailjs.send(
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, subject: formData.subject || 'Contact Form', message: formData.message },
        EMAILJS_PUBLIC_KEY
      );
      setNotification({ show: true, type: 'success', message: 'Message sent! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setNotification({ show: true, type: 'error', message: 'Send failed — try emailing me directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen flex flex-col justify-center py-32 lg:py-40 bg-[#080808] overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Glow — bottom-center, emanating upward, signals "end of journey" */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(168,85,247,0.15) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 xl:pl-20 w-full">

        {/* Chapter eyebrow */}
        <div ref={eyebrowRef} className="mb-12">
          <p className="eyebrow mb-4" style={{ color: 'var(--c-accent)' }}>07 — Contact</p>
          <div className="divider w-12" />
        </div>

        <div ref={headingRef} className="mb-4">
          <h2
            id="contact-heading"
            className="display-xl mb-4"
            style={{ color: 'var(--c-text)' }}
          >
            Let's build
            <br />
            <span className="text-outline">something great.</span>
          </h2>
        </div>

        <p className="text-base max-w-md mb-16 leading-relaxed" style={{ color: 'var(--c-muted)' }}>
          Whether it's a new product, a redesign, or a conversation — reach out.
          I respond to every message.
        </p>

        {/* Primary CTA — the email itself */}
        <div ref={emailRef} className="mb-10">
          <p className="eyebrow mb-4" style={{ color: 'var(--c-faint)' }}>Email</p>
          <a
            ref={displayRef}
            href="mailto:mohammed.fandees@gmail.com"
            className="email-display group inline-flex items-center gap-3 hover-glow"
            style={{ display: 'inline-flex' }}
          >
            mohammed.fandees@gmail.com
            <ArrowUpRight
              size={28}
              className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
              style={{ color: 'var(--c-accent)' }}
            />
          </a>
        </div>

        <ContactSocialLinks revealRef={socialRef} />

        <ContactForm
          revealRef={formRef}
          formData={formData}
          isSubmitting={isSubmitting}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>

      {notification.show && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification((p) => ({ ...p, show: false }))}
        />
      )}
    </section>
  );
};

export default Contact;
