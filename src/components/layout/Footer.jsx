import { Github, Linkedin, Mail } from 'lucide-react';
import { navItems } from '../../data/navItems';

// Minimal footer — no three-column grid, no repeating contact info that's
// already in the Contact section above. Just: logo + nav + socials + copy.
const Footer = () => (
  <footer
    className="py-10 border-t"
    style={{ background: 'var(--c-bg)', borderColor: 'var(--c-border-dim)' }}
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:pl-20">
      <div className="flex flex-wrap items-center justify-between gap-6">
        {/* Logo */}
        <a href="#home" className="text-sm font-mono tracking-[0.2em] uppercase" style={{ color: 'var(--c-muted)' }}>
          MF<span style={{ color: 'var(--c-accent)' }}>.</span>
        </a>

        {/* Nav */}
        <nav className="flex flex-wrap gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs transition-colors duration-300 hover:text-white"
              style={{ color: 'var(--c-faint)' }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {[
            { Icon: Github, href: 'https://github.com/mohammed-fandees', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/mohammed-fandees', label: 'LinkedIn' },
            { Icon: Mail, href: 'mailto:mohammed.fandees@gmail.com', label: 'Email' },
          ].map((item) => {
            const SocialIcon = item.Icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={item.label}
                className="transition-colors duration-300 hover:text-white"
                style={{ color: 'var(--c-faint)' }}
              >
                <SocialIcon size={16} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="divider my-8" />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs" style={{ color: 'var(--c-faint)' }}>
          © {new Date().getFullYear()} Mohammed Fandees. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: 'var(--c-faint)' }}>
          Built with React · GSAP · Lenis
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
