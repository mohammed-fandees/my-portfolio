import { Mail, Linkedin, Github } from 'lucide-react';

const CONTACT_LINKS = [
  { Icon: Github, href: 'https://github.com/mohammed-fandees', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/mohammed-fandees', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:mohammed.fandees@gmail.com', label: 'Email' },
];

const ContactSocialLinks = ({ revealRef }) => (
  <div ref={revealRef} className="flex items-center gap-4 mb-20">
    {CONTACT_LINKS.map((item) => {
      const SocialIcon = item.Icon;
      return (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          aria-label={item.label}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{ border: '1px solid var(--c-border)', color: 'var(--c-muted)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)';
            e.currentTarget.style.color = 'var(--c-accent)';
            e.currentTarget.style.background = 'var(--c-accent-dim)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--c-border)';
            e.currentTarget.style.color = 'var(--c-muted)';
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <SocialIcon size={16} />
        </a>
      );
    })}
  </div>
);

export default ContactSocialLinks;
