import galleryItems from "../data/gallery";

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <div className="gallery-heading">
          <span className="eyebrow">A Visual Experience</span>

          <h2>Food, Moments &amp; Memories</h2>

          <p>
            A glimpse into the art of thoughtful food presentation, beautiful
            dining experiences and memorable occasions.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article className="gallery-item" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.parentElement.classList.add(
                    "image-unavailable",
                  );
                }}
              />

              <div className="gallery-overlay">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
