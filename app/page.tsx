'use client';
import React, { useState } from 'react';
import Navigation from './components/landing/navigation';
import Hero from './components/landing/hero';
import About from './components/landing/about';
import Benefits from './components/landing/benefits';
import VisionMission from './components/landing/visionMission';
import Footer from './components/landing/footer';
import Form from './components/landing/form';
import WhatsAppButton from "./components/landing//messageButton"
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <About />
      <Benefits />
      <VisionMission />
      <Form />
      <WhatsAppButton phoneNumber="123456789" message="Hola, necesito información sobre sus servicios." />
      <Footer />
    </div>
  );
}

export default App;