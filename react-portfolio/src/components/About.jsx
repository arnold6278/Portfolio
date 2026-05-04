import { useState } from 'react';

const CERTS = [
  'GCP Professional Data Engineer',
  'PCAP Python',
  'OCA Java SE 8',
  'AZ-900 Azure',
  'AI-900 Fundamentals',
];

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-kicker">About</p>
          <h2 className="section-title">
            Engineer. Builder. <span>Problem Solver.</span>
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
              An aspiring Software and Data Engineer with a strong foundation in software
              development, cloud computing, and data engineering. Experienced in building scalable
              data pipelines on Google Cloud Platform and managing automated workflows.
            </p>
            <p>
              Proficient in <strong>Python, Java, and SQL</strong>, with a commitment to
              continuous learning and delivering high-quality, user-focused software that scales.
            </p>
            <div className="certs">
              {CERTS.map((c) => (
                <span className="chip" key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
