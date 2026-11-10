import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";
import Services from "./sections/Services";
import Experience from "./sections/Experience";
import Processes from "./sections/Processes";
import FAQ from "./sections/FAQ";
import Booking from "./sections/Booking";


// Main application
export default function App() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <>
      {/* Navigation */}
      <Header />

      <main>
        {/* Hero */}
        <Hero />
        {/* Introduction */}
        <Introduction />
        {/* Services */}
        <Services setSelectedService={setSelectedService} />
        {/* Experience */}
        <Experience />
        {/* Process */}
        <Processes />
        <FAQ />
        {/* Booking */}
        <Booking
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
