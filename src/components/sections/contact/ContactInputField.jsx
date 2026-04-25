const ContactInputField = ({ id, label, type = 'text', value, onChange, disabled, className = '' }) => (
  <div className={className}>
    <label htmlFor={id} className="eyebrow block mb-2" style={{ color: 'var(--c-faint)' }}>
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={label.replace(' (optional)', '')}
      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
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
);

export default ContactInputField;
