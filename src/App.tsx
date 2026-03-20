import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  const [selectedService, setSelectedService] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToSection('contact');
  };

  return (
    <div id="home" className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero onViewServices={() => scrollToSection('services')} />
      <Services onRequestService={handleRequestService} />
      <About />
      <ContactForm selectedService={selectedService} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
