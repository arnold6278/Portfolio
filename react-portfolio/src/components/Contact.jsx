import { useState } from 'react';

const CONTACT_ITEMS = [
  {
    icon: 'fa-envelope',
    label: 'mukwevhoarnold627@gmail.com',
    href: 'mailto:mukwevhoarnold627@gmail.com',
  },
  {
    icon: 'fa-phone',
    label: '+27 069 230 6278',
    href: 'tel:+270692306278',
  },
  {
    icon: 'fa-brands fa-github',
    label: 'github.com/arnold6278',
    href: 'https://github.com/arnold6278',
    external: true,
  },
  {
    icon: 'fa-brands fa-linkedin',
    label: 'linkedin.com/in/arnold-mukwevho',
    href: 'https://linkedin.com/in/arnold-mukwevho',
    external: true,
  },
];

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">
            Let&apos;s build something <span>high-impact.</span>
          </h2>
        </div>

        <div className="contact-grid">
          {/* Info panel */}
          <aside className="contact-panel reveal">
            <p>
              Open to freelance engagements, full-time opportunities, and strategic data or cloud
              collaboration.
            </p>
            <div className="contact-list">
              {CONTACT_ITEMS.map(({ icon, label, href, external }) => (
                <a
                  key={href}
                  className="contact-item"
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <i className={`fa-solid ${icon}`} />
                  {label}
                </a>
              ))}
            </div>
            <a className="btn btn-primary" href="mailto:mukwevhoarnold627@gmail.com">
              <i className="fa-solid fa-paper-plane" />
              Send an Email
            </a>
          </aside>

          {/* Form */}
          <div className="form-wrap reveal">
            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <i
                  className="fa-solid fa-circle-check"
                  style={{ fontSize: '2.5rem', color: 'var(--ok)', marginBottom: '0.75rem' }}
                />
                <p style={{ fontWeight: 700 }}>Message sent!</p>
                <p style={{ color: 'var(--muted)', marginTop: '0.4rem', fontSize: '0.9rem' }}>
                  I&apos;ll get back to you shortly.
                </p>
                <button
                  className="btn btn-outline"
                  style={{ marginTop: '1.2rem' }}
                  onClick={() => setStatus('idle')}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/mukwevhoarnold627@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_subject"  value="New portfolio message" />
                <input type="hidden" name="_captcha"  value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" placeholder="Project inquiry" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your goals..."
                    required
                  />
                </div>

                {status === 'error' && (
                  <p style={{ color: 'var(--danger)', fontSize: '0.85rem' }}>
                    Something went wrong — please try again or email directly.
                  </p>
                )}

                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={status === 'sending'}
                >
                  <i className="fa-solid fa-paper-plane" />
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
                <p className="form-note">Messages are delivered directly to my inbox.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
