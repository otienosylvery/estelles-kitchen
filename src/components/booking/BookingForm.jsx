import { useState, useEffect } from "react";
import services from "../../data/services";

export default function BookingForm({ selectedService, setSelectedService }) {
  const WHATSAPP_NUMBER = "254796742028";
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/maeezrbe";

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Automatically clear success and error messages after five seconds.
  useEffect(() => {
    if (status !== "success" && status !== "error") return;

    const timer = setTimeout(() => {
      setStatus("idle");
      setErrorMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [status]);

  async function submit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Unable to submit your enquiry. Please try again.");
      }

      setStatus("success");
      form.reset();
      setSelectedService("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error.message || "Something went wrong. Please try again.",
      );
    }
  }

  // Open WhatsApp with the customer's enquiry details.
  function sendViaWhatsApp(e) {
    e.preventDefault();

    const form = e.currentTarget.closest("form");

    if (!form.reportValidity()) return;

    const data = new FormData(form);

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

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      enquiryMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="field">
        <label htmlFor="enquiry-name">Name *</label>
        <input id="enquiry-name" name="name" required placeholder="Full name" />
      </div>

      <div className="field">
        <label htmlFor="enquiry-phone">Phone / WhatsApp *</label>
        <input
          id="enquiry-phone"
          name="phone"
          type="tel"
          required
          placeholder="07xx xxx xxx"
        />
      </div>

      <div className="field">
        <label htmlFor="enquiry-service">Experience *</label>
        <select
          name="service"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          required
        >
          <option value="">Select a service</option>

          {services.map((service) => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="enquiry-date">Preferred date</label>
        <input id="enquiry-date" type="date" name="date" />
      </div>

      <div className="field">
        <label htmlFor="enquiry-guests">Number of guests</label>
        <select id="enquiry-guests" name="guests">
          <option>Not sure yet</option>
          <option>1–2</option>
          <option>3–6</option>
          <option>7–12</option>
          <option>13–25</option>
          <option>26+</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="enquiry-budget">Estimated budget (KSh)</label>
        <select id="enquiry-budget" name="budget">
          <option>Not sure yet</option>
          <option>Under 10,000</option>
          <option>10,000–25,000</option>
          <option>25,000–50,000</option>
          <option>50,000–100,000</option>
          <option>100,000+</option>
        </select>
      </div>

      <div className="field full">
        <label htmlFor="enquiry-details">Tell us a little more</label>
        <textarea
          id="enquiry-details"
          name="details"
          rows="4"
          placeholder="Occasion, location, food preferences, dietary requirements..."
        />
      </div>

      <button
        className="btn gold full"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending enquiry..." : "Submit Enquiry ↗"}
      </button>

      <button
        className="btn outline-dark full"
        type="button"
        onClick={sendViaWhatsApp}
      >
        Enquire via WhatsApp ↗
      </button>

      {status === "success" && (
        <div className="result full success-message" role="status">
          <p>
            Thank you! Your enquiry has been submitted successfully. Estelle's
            Kitchen will be in touch.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="result full" role="alert">
          <p>{errorMessage}</p>
          <p>You can also send your enquiry directly through WhatsApp.</p>
        </div>
      )}

      <p className="note full">
        Your enquiry is sent directly to Estelle's Kitchen. Alternatively, use
        WhatsApp to contact us.
      </p>
    </form>
  );
}
