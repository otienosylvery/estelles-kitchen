const galleryItems = [
  {
    id: 1,
    title: "Culinary Creations",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    title: "Elegant Dining",
    category: "Private Dining",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    title: "Beautifully Presented",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    title: "Special Occasions",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    title: "Thoughtful Details",
    category: "Private Dining",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    title: "A Taste of Elegance",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=85",
  },
];

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
