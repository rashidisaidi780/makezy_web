import { useState } from 'react';
import { Send, Mail, User, Phone, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  selectedService?: string;
}

export const ContactForm = ({ selectedService = '' }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService,
    message: '',
  });

  // ====================================================
  // HANDLE FORM SUBMIT USING EMAILJS
  // ====================================================
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    emailjs
      .send(
        'service_zy4jksg',    // Service ID 
        'template_m26byvn',   // Template ID 
        templateParams,
        '-zTCvs7KEWw2tv8bG'     // Public Key 
      )
      .then(
        () => {
          alert("Message sent successfully");

          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
          });
        },
        (error) => {
          console.error(error);
          alert("Failed to send message");
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-blue dark:text-white">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ready to start your project? Fill out the form below and I'll get back to you soon.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  <User className="w-4 h-4 inline mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-yellow focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-yellow focus:border-transparent transition-all"
                  placeholder="youemail@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-yellow focus:border-transparent transition-all"
                  placeholder="+255 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-yellow focus:border-transparent transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="System Development">System Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Website Design & Development">Website Design & Development</option>
                  <option value="CCTV Camera Installation">CCTV Camera Installation</option>
                  <option value="Car Tracking Device Installation">Car Tracking Device Installation</option>
                  <option value="Other IT & Technology Services">Other IT & Technology Services</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-yellow focus:border-transparent transition-all resize-none"
                placeholder="Tell us briefly about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary-yellow text-primary-blue font-semibold rounded-lg hover:bg-primary-yellow/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Send className="w-5 h-5" />
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};