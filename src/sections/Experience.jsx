import { ArrowUpRight } from "lucide-react";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div
        className="experience-image"
        role="img"
        aria-label="Private dining table"
      />

      <div className="experience-copy">
        <span className="eyebrow">The Estelle's experience</span>

        <h2>
          Your occasion.
          <br />
          Our attention to detail.
        </h2>

        <p>
          Tell us what you're celebrating, what you love to eat, and how you'd
          like your guests to feel. We'll shape a considered experience from the
          first conversation to the final plate.
        </p>

        <a href="#booking" className="btn outline-dark">
          Plan your experience <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
