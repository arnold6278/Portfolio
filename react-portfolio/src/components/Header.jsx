import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact', cta: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  // Scroll-spy: highlight nav link for visible section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header>
      <div className="container">
        <nav style={{ position: 'relative' }}>
          <a className="logo" href="#home">
            Arnold<span>.</span>
          </a>

          <ul className={`nav-links${open ? ' open' : ''}`}>
            {NAV_ITEMS.map(({ label, href, cta }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`${active === href ? 'active' : ''}${cta ? ' nav-cta' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="menu-toggle"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        </nav>
      </div>
    </header>
  );
}
