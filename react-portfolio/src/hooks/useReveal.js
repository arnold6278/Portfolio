import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to every .reveal element.
 * When an element enters the viewport it gets the .visible class,
 * and any .fill children (skill bars) are scaled to their data-level.
 */
export default function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          entry.target.querySelectorAll('.meter').forEach((meter) => {
            const level = Number(meter.dataset.level || 0) / 100;
            const fill = meter.querySelector('.fill');
            if (fill) fill.style.transform = `scaleX(${level})`;
          });
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
}
