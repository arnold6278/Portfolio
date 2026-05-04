export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer-row">
        <p>
          &copy; {year} Arnold Mukwevho &mdash; Cloud &amp; Data Engineer
        </p>
        <div className="socials">
          <a
            href="https://github.com/arnold6278"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github" />
          </a>
          <a
            href="https://linkedin.com/in/arnold-mukwevho"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in" />
          </a>
        </div>
      </div>
    </footer>
  );
}
