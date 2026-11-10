import faqs from "../data/faqs";

export default function FAQ() {
  return (
    <section className="faq section" id="faq">
      <div className="wrap faq-layout">
        <div className="faq-intro">
          <span className="eyebrow">GOOD TO KNOW</span>

          <h2>
            Questions, <em>answered.</em>
          </h2>

          <p>
            A little more information to help you plan your next memorable
            dining experience.
          </p>

          <a href="#booking" className="text-link">
            Have another question? Get in touch ↗
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <details className="faq-item" key={index}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-toggle">+</span>
              </summary>

              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}