import services from "../data/services";

export default function Services({ setSelectedService }) {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-top">
          <div>
            <span className="eyebrow">Thoughtfully tailored</span>

            <h2>
              The way you'd like
              <br />
              to dine.
            </h2>
          </div>

          <p>
            Choose the experience that suits your moment. Every enquiry
            begins with a conversation about what you have in mind.
          </p>
        </div>

        <div className="cards">
          {services.map(({ title, description, icon: Icon }, index) => (
            <article className="card" key={title}>
              <span className="num">
                0{index + 1}
              </span>

              <Icon className="service-icon" />

              <h3>{title}</h3>

              <p>{description}</p>

              <a
                href="#booking"
                onClick={() => setSelectedService(title)}
              >
                Explore service ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}