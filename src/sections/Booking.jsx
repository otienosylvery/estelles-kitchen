import { Leaf } from "lucide-react";
import BookingForm from "../components/booking/BookingForm";

export default function Booking({ selectedService, setSelectedService }) {
  return (
    <section className="booking" id="booking">
      <div className="wrap booking-layout">
        <div>
          <span className="eyebrow">Let's start a conversation</span>

          <h2>Something delicious begins here.</h2>

          <p className="muted">
            Share a few details and we'll help you explore the right experience
            for your occasion.
          </p>

          <div className="contact-note">
            <Leaf size={20} />

            <span>
              Based in Nairobi, Kenya
              <br />
              Available for enquiries about private dining, events and tailored
              culinary services.
            </span>
          </div>
        </div>

        <BookingForm
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      </div>
    </section>
  );
}
