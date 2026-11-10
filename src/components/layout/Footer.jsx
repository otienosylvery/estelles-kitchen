
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-main">
          <div>
            <Brand />

            <p>
              Personalised culinary experiences for the moments
              worth gathering around.
            </p>
          </div>

          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#experience">Our approach</a>
            <a href="#booking">Enquiries</a>
            <a href="#faq">FAQs</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Estelle's Kitchen
          </span>

          <span>
            Private chef experiences · Nairobi, Kenya
          </span>
        </div>
      </div>
    </footer>
  );
}
