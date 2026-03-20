import { Code, Smartphone, Globe, Camera, Navigation, Wrench } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServicesProps {
  onRequestService: (serviceName: string) => void;
}

const services: Service[] = [
  {
    id: 'system-dev',
    title: 'System Development',
    description: 'Custom software solutions tailored to your business needs. From enterprise applications to automation tools, we build robust systems that drive efficiency.',
    icon: <Code className="w-12 h-12" />,
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for Android and iOS. Create engaging mobile experiences that your users will love.',
    icon: <Smartphone className="w-12 h-12" />,
  },
  {
    id: 'web-dev',
    title: 'Website Design & Development',
    description: 'Modern, responsive websites that convert. From landing pages to full e-commerce solutions, we create web experiences that work.',
    icon: <Globe className="w-12 h-12" />,
  },
  {
    id: 'cctv',
    title: 'CCTV Camera Installation',
    description: 'Professional security camera installation and setup. Keep your property secure with high-quality surveillance systems.',
    icon: <Camera className="w-12 h-12" />,
  },
  {
    id: 'tracking',
    title: 'Car Tracking Device Installation',
    description: 'GPS tracking solutions for vehicles. Monitor and protect your fleet or personal vehicles with real-time tracking.',
    icon: <Navigation className="w-12 h-12" />,
  },
  {
    id: 'other-it',
    title: 'Other IT & Technology Services',
    description: 'Comprehensive IT support, network setup, hardware installation, and more. Whatever your tech needs, we have you covered.',
    icon: <Wrench className="w-12 h-12" />,
  },
];

export const Services = ({ onRequestService }: ServicesProps) => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-blue dark:text-white">
            My Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions to meet all your digital and technical needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-yellow to-secondary-orange rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-primary-blue dark:text-white">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <button
                  onClick={() => onRequestService(service.title)}
                  className="w-full px-6 py-3 bg-primary-yellow text-primary-blue font-semibold rounded-lg hover:bg-primary-yellow/90 transition-all duration-300 transform hover:scale-105"
                >
                  Request Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
