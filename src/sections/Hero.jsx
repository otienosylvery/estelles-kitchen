
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <span className="eyebrow">
          Private chef experiences · Nairobi, Kenya
        </span>

        <h1>
          Exceptional food.
          <br />
          <em>Intimate moments.</em>
        </h1>

        <p>
          Thoughtfully prepared dining experiences, created around you, your
          guests and the moments that matter.
        </p>

        <div className="actions">
          <a className="btn gold" href="#booking">
            Plan your experience
            <ArrowUpRight size={16} />
          </a>

          <a className="btn outline" href="#services">
            Explore our services
          </a>
        </div>

        <div className="signature">
          <span />
          A more personal kind of dining
        </div>
      </div>

      <div
        className="hero-image"
        role="img"
        aria-label="Elegant gourmet dining photography"
      >
        <div className="image-note">
          Good food is an art.
          <br />
          Sharing it is a feeling.
        </div>
      </div>
    </section>
  );
}
