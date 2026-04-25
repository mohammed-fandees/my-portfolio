import { navItems } from '../../data/navItems';

const MobileMenu = ({ isOpen, activeSection, onClose }) => (
  <div
    className={`xl:hidden transition-all duration-300 overflow-hidden border-t ${
      isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
    }`}
    style={{
      background: 'rgba(8,8,8,0.96)',
      borderColor: 'var(--c-border)',
      backdropFilter: 'blur(20px)',
    }}
  >
    <div className="px-4 pt-3 pb-5 space-y-1">
      {navItems.map((item) => {
        const isActive = activeSection === item.href.substring(1);
        return (
          <a
            key={item.name}
            href={item.href}
            className="block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200"
            style={{
              background: isActive ? 'var(--c-accent-dim)' : 'transparent',
              color: isActive ? 'var(--c-accent)' : 'rgba(255,255,255,0.55)',
            }}
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
            }}
            onClick={onClose}
          >
            {item.name}
          </a>
        );
      })}

      <a
        href="#contact"
        className="block mt-2 px-4 py-2.5 rounded-full text-sm font-medium text-center text-white transition-all duration-200 hover:brightness-110"
        style={{ background: 'var(--c-accent)' }}
        onClick={onClose}
      >
        Hire Me
      </a>
    </div>
  </div>
);

export default MobileMenu;
