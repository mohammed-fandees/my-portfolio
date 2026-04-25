import { Send } from 'lucide-react';
import ContactInputField from './ContactInputField';

const ContactForm = ({ revealRef, formData, isSubmitting, onChange, onSubmit }) => (
  <div ref={revealRef}>
    <div className="divider mb-10" />
    <p className="eyebrow mb-8" style={{ color: 'var(--c-faint)' }}>Or send a message</p>
    <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5 max-w-2xl">
      <ContactInputField id="name" label="Name" value={formData.name} onChange={onChange} disabled={isSubmitting} />
      <ContactInputField id="email" label="Email" type="email" value={formData.email} onChange={onChange} disabled={isSubmitting} />
      <ContactInputField id="subject" label="Subject (optional)" value={formData.subject} onChange={onChange} disabled={isSubmitting} className="sm:col-span-2" />
      <div className="sm:col-span-2">
        <label htmlFor="message" className="eyebrow block mb-2" style={{ color: 'var(--c-faint)' }}>
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={onChange}
          required
          disabled={isSubmitting}
          placeholder="Tell me about your project..."
          className="w-full px-4 py-3 rounded-xl resize-none text-sm outline-none transition-all duration-300"
          style={{
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            color: 'var(--c-text)',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = 'rgba(168,85,247,0.5)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'var(--c-border)';
          }}
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.02] disabled:opacity-50 disabled:scale-100"
          style={{ background: 'var(--c-accent)' }}
        >
          {isSubmitting ? (
            <>
              Sending…
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </>
          ) : (
            <>
              Send Message <Send size={14} />
            </>
          )}
        </button>
      </div>
    </form>
  </div>
);

export default ContactForm;
