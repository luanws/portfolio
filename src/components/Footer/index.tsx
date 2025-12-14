"use client";

export default function Footer() {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container text-center">
        <a rel="noreferrer" href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/luanws/"
            target="_blank"
          >
            <i className="fa fa-linkedin fa-inverse"></i>
          </a>
          <a rel="noreferrer" href="https://github.com/luanws" target="_blank">
            <i className="fa fa-github fa-inverse"></i>
          </a>
        </div>

        <hr />

        <p className="footer__text">© 2025 - Portfolio by luanws</p>
      </div>
    </footer>
  );
}
