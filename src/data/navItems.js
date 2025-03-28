import { testimonials } from "./testimonials";

export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

testimonials.length && navItems.splice( -1, 0, { name: 'Testimonials', href: '#testimonials' });
