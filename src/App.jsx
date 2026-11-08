import { useState } from "react";

import {
  Menu,
  X,
  ArrowUpRight,
  ChefHat,
  CalendarDays,
  ConciergeBell,
  House,
  Users,
  BriefcaseBusiness,
  Leaf,
} from "lucide-react";

// Services offered by Estelle's Kitchen
const services = [
  [
    "Private Dining",
    "Restaurant-worthy meals in the comfort and privacy of your own space.",
    ConciergeBell,
  ],
  [
    "Event Catering",
    "Considered menus for celebrations, milestones and meaningful gatherings.",
    Users,
  ],
  [
    "In-home Meal Preparation",
    "Freshly prepared meals shaped around your household, tastes and routine.",
    House,
  ],
  [
    "Weekly Meal Plans",
    "A little more ease in your week, with meal preparation planned around you.",
    CalendarDays,
  ],
  [
    "Cooking Classes",
    "Build confidence in the kitchen through a relaxed, hands-on experience.",
    ChefHat,
  ],
  [
    "Corporate Dining",
    "Thoughtful food and hosting for team gatherings, meetings and client occasions.",
    BriefcaseBusiness,
  ],
];

// Brand component
function Brand() {
  return (
    <a className="brand" href="#home">
      <span className="mark">
        <ChefHat size={24} />
        <i>E</i>
      </span>

      <span>
        <b>ESTELLE'S</b>
        <small>K I T C H E N</small>
      </span>
    </a>
  );
}

// Booking form component
// function BookingForm() {
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState("");

//   function submit(e) {
//     e.preventDefault();

//     const data = new FormData(e.currentTarget);

//     const enquiryMessage = [
//       "Hello Estelle's Kitchen! I'd like to enquire about a culinary experience.",
//       "",
//       `Name: ${data.get("name")}`,
//       `Phone: ${data.get("phone")}`,
//       `Service: ${data.get("service")}`,
//       `Date: ${data.get("date") || "Flexible"}`,
//       `Guests: ${data.get("guests") || "Not sure yet"}`,
//       `Budget: ${data.get("budget") || "Not sure yet"}`,
//       `Details: ${data.get("details") || "None provided"}`,
//     ].join("\n");

//     setMessage(enquiryMessage);

//     setStatus(
//       "Your enquiry is prepared. Copy it into WhatsApp; direct sending will be enabled when Estelle’s number is confirmed.",
//     );
//   }

//   return (
//     <form className="form" onSubmit={submit}>
//       <div className="field">
//         <label>Name *</label>
//         <input name="name" required placeholder="Full name" />
//       </div>

//       <div className="field">
//         <label>Phone / WhatsApp *</label>
//         <input name="phone" required placeholder="07xx xxx xxx" />
//       </div>

//       <div className="field">
//         <label>Experience *</label>

//         <select name="service" required defaultValue="">
//           <option value="" disabled>
//             Choose a service
//           </option>

//           {services.map((service) => (
//             <option key={service[0]} value={service[0]}>
//               {service[0]}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="field">
//         <label>Preferred date</label>
//         <input type="date" name="date" />
//       </div>

//       <div className="field">
//         <label>Number of guests</label>

//         <select name="guests">
//           <option>Not sure yet</option>
//           <option>1–2</option>
//           <option>3–6</option>
//           <option>7–12</option>
//           <option>13–25</option>
//           <option>26+</option>
//         </select>
//       </div>

//       <div className="field">
//         <label>Estimated budget (KSh)</label>

//         <select name="budget">
//           <option>Not sure yet</option>
//           <option>Under 10,000</option>
//           <option>10,000–25,000</option>
//           <option>25,000–50,000</option>
//           <option>50,000–100,000</option>
//           <option>100,000+</option>
//         </select>
//       </div>

//       <div className="field full">
//         <label>Tell us a little more</label>

//         <textarea
//           name="details"
//           rows="4"
//           placeholder="Occasion, location, food preferences, dietary requirements…"
//         />
//       </div>

//       <button className="btn gold full" type="submit">
//         Prepare enquiry ↗
//       </button>

//       {status && (
//         <div className="result full" role="status">
//           <p>{status}</p>

//           <textarea readOnly rows="7" value={message} />

//           <button
//             type="button"
//             className="btn outline-dark"
//             onClick={() => navigator.clipboard?.writeText(message)}
//           >
//             Copy enquiry
//           </button>
//         </div>
//       )}

//       <p className="note full">
//         Demo mode: the form does not store customer information. Direct WhatsApp
//         handoff is not yet enabled.
//       </p>
//     </form>
//   );
// }

function BookingForm() {
  const WHATSAPP_NUMBER = "254725392471";

  function submit(e) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const enquiryMessage = [
      "Hello Estelle's Kitchen! I'd like to enquire about a culinary experience.",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
      `Date: ${data.get("date") || "Flexible"}`,
      `Guests: ${data.get("guests") || "Not sure yet"}`,
      `Budget: ${data.get("budget") || "Not sure yet"}`,
      `Details: ${data.get("details") || "None provided"}`,
    ].join("\n");

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiryMessage)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="field">
        <label>Name *</label>
        <input name="name" required placeholder="Full name" />
      </div>

      <div className="field">
        <label>Phone / WhatsApp *</label>
        <input name="phone" type="tel" required placeholder="07xx xxx xxx" />
      </div>

      <div className="field">
        <label>Experience *</label>
        <select name="service" required defaultValue="">
          <option value="" disabled>
            Choose a service
          </option>

          {services.map((service) => (
            <option key={service[0]} value={service[0]}>
              {service[0]}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label>Preferred date</label>
        <input type="date" name="date" />
      </div>

      <div className="field">
        <label>Number of guests</label>
        <select name="guests">
          <option>Not sure yet</option>
          <option>1–2</option>
          <option>3–6</option>
          <option>7–12</option>
          <option>13–25</option>
          <option>26+</option>
        </select>
      </div>

      <div className="field">
        <label>Estimated budget (KSh)</label>
        <select name="budget">
          <option>Not sure yet</option>
          <option>Under 10,000</option>
          <option>10,000–25,000</option>
          <option>25,000–50,000</option>
          <option>50,000–100,000</option>
          <option>100,000+</option>
        </select>
      </div>

      <div className="field full">
        <label>Tell us a little more</label>
        <textarea
          name="details"
          rows="4"
          placeholder="Occasion, location, food preferences, dietary requirements…"
        />
      </div>

      <button className="btn gold full" type="submit">
        Send Enquiry via WhatsApp ↗
      </button>

      <p className="note full">
        You'll be redirected to WhatsApp to review and send your enquiry
        directly to Estelle's Kitchen.
      </p>
    </form>
  );
}

// Main application
export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <header>
        <div className="wrap nav">
          <Brand />

          <button
            className="toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>

          <nav className={open ? "links open" : "links"}>
            {[
              ["Our approach", "#experience"],
              ["Services", "#services"],
              ["How it works", "#process"],
            ].map(([title, href]) => (
              <a href={href} key={href} onClick={() => setOpen(false)}>
                {title}
              </a>
            ))}

            <a
              className="btn gold"
              href="#booking"
              onClick={() => setOpen(false)}
            >
              Enquire now ↗
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero section */}
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
              <span />A more personal kind of dining
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

        {/* Introduction */}
        <section className="wrap intro">
          <div>
            <span className="eyebrow">A more personal kind of dining</span>

            <h2>
              Made with care.
              <br />
              Served with intention.
            </h2>
          </div>

          <div className="muted">
            <p>
              At Estelle's Kitchen, food is more than what's on the plate. It's
              the thoughtful details, the comfort of being hosted, and the
              pleasure of sharing something memorable.
            </p>

            <p>
              From a quiet dinner at home to a table full of your favourite
              people, each experience is shaped around your occasion, tastes and
              needs.
            </p>

            <div className="script">Your table, your way.</div>
          </div>
        </section>

        {/* Services */}
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
              {services.map(([title, description, Icon], index) => (
                <article className="card" key={title}>
                  <span className="num">0{index + 1}</span>

                  <Icon className="service-icon" />

                  <h3>{title}</h3>

                  <p>{description}</p>

                  <a
                    href="#booking"
                    onClick={() => {
                      const select = document.querySelector('[name="service"]');

                      if (select) {
                        select.value = title;
                      }
                    }}
                  >
                    Explore service ↗
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience section */}
        <section className="experience" id="experience">
          <div
            className="experience-image"
            role="img"
            aria-label="Private dining table"
          />

          <div className="experience-copy">
            <span className="eyebrow">More than a menu</span>

            <h2>
              Your occasion.
              <br />
              Our attention to detail.
            </h2>

            <p>
              Tell us what you're celebrating, what you love to eat, and how
              you'd like your guests to feel. We'll shape a considered
              experience from the first conversation to the final plate.
            </p>

            <a className="btn gold" href="#booking">
              Let's plan something lovely ↗
            </a>
          </div>
        </section>

        {/* Process */}
        <section className="wrap process" id="process">
          <span className="eyebrow">Simple from the start</span>

          <h2>
            From first idea to
            <br />
            the final plate.
          </h2>

          <div className="steps">
            <article>
              <span>01</span>

              <h3>Tell us what you imagine</h3>

              <p>
                Share your occasion, date, guest count and the kind of
                experience you're looking for.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>Shape your experience</h3>

              <p>
                We'll discuss menu preferences, dietary needs, location and the
                details that matter.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>Enjoy the moment</h3>

              <p>
                Once details are agreed, focus on your guests while the food
                takes centre stage.
              </p>
            </article>
          </div>
        </section>

        {/* Booking */}
        <section className="booking" id="booking">
          <div className="wrap booking-layout">
            <div>
              <span className="eyebrow">Let's start a conversation</span>

              <h2>Something delicious begins here.</h2>

              <p className="muted">
                Share a few details and we'll help you explore the right
                experience for your occasion.
              </p>

              <div className="contact-note">
                <Leaf size={20} />

                <span>
                  Based in Nairobi, Kenya
                  <br />
                  Available for enquiries about private dining, events and
                  tailored culinary services.
                </span>
              </div>
            </div>

            <BookingForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="wrap">
          <div className="footer-main">
            <div>
              <Brand />

              <p>
                Personalised culinary experiences for the moments worth
                gathering around.
              </p>
            </div>

            <div className="footer-links">
              <a href="#services">Services</a>
              <a href="#experience">Our approach</a>
              <a href="#booking">Enquiries</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Estelle's Kitchen</span>

            <span>Private chef experiences · Nairobi, Kenya</span>
          </div>
        </div>
      </footer>
    </>
  );
}
