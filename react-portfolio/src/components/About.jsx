import { useState } from 'react';

const CERTS = [
  'GCP Professional Data Engineer',
  'PCAP Python',
  'OCA Java SE 8',
  'AZ-900 Azure',
  'AI-900 AI Fundamentals',
];

const EDUCATION = [
  {
    icon: 'fa-graduation-cap',
    degree: 'Diploma in IT: Intelligent Industrial Systems (NQF 6)',
    school: 'Tshwane University of Technology',
    year: '2019 – 2023 (Paused)',
    note: 'Software, electronics, automation & robotics',
  },
  {
    icon: 'fa-school',
    degree: 'National Senior Certificate',
    school: 'Tshivhidzo Masiagwala Secondary School',
    year: '2019',
  },
];

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-kicker">About</p>
          <h2 className="section-title">
            Engineer. Builder. <span>Data Thinker.</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Portrait */}
          <div
            className={`portrait reveal${imgError ? ' no-image' : ''}`}
            aria-label="Arnold Mukwevho profile photo"
          >
            {!imgError && (
              <img
                src="assets/images/profile.jpg"
                alt="Arnold Mukwevho"
                onError={() => setImgError(true)}
              />
            )}
            <div className="portrait-fallback" aria-hidden="true">AM</div>
          </div>

          {/* Bio */}
          <div className="about-body reveal">
            <p>
              I build systems that connect raw data to real outcomes. My background spans
              <strong> software engineering, cloud data infrastructure, and analytics</strong> —
              grounded in hands-on experience architecting production pipelines on Google Cloud
              Platform and shipping AI-powered applications used in the real world.
            </p>
            <p>
              At Jutomate, I owned end-to-end ELT pipelines processing live business data with
              99.9% availability. At Scale AI, I shaped large language model behaviour through
              rigorous code evaluation. I don&rsquo;t just write code — I solve problems and
              deliver measurable impact.
            </p>
            <p>
              <strong>Currently exploring:</strong> full-time roles in data engineering, software
              development, or data analysis — remote or on-site in South Africa.
            </p>
            <div className="certs">
              {CERTS.map((c) => (
                <span className="chip" key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="reveal">
          <p className="section-kicker" style={{ marginTop: '0.5rem' }}>Education</p>
          <div className="edu-grid">
            {EDUCATION.map(({ icon, degree, school, year, note }) => (
              <div className="edu-card" key={degree}>
                <div className="edu-icon">
                  <i className={`fa-solid ${icon}`} />
                </div>
                <div>
                  <div className="edu-degree">{degree}</div>
                  <div className="edu-school">{school}</div>
                  <div className="edu-year">{year}{note && ` · ${note}`}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
