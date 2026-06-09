import {
  Code,
  Smartphone,
  Globe,
  Camera,
  Navigation,
  DoorOpen,
  BellElectric,
  Wrench,
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface ServicesProps {
  onRequestService: (serviceName: string) => void;
}

const services: Service[] = [
  {
    id: 'system-dev',
    title: 'System Development',
    description:
      'We develop custom systems and software solutions to help businesses manage their operations efficiently.the systems services include systems for businesses, hospitals, hotels, schools, rental management, inventory management, customer management, and more. We build secure, reliable, and user-friendly solutions tailored to your needs.',
    image:
      'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg',
    icon: <Code className="w-10 h-10" />,
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description:
      'We develop modern and user-friendly mobile applications for Android and iOS. The apps that help businesses improve customer experience, streamline operations, and provide convenient access to services anytime, anywhere.',
    image: 'https://images.pexels.com/photos/17077372/pexels-photo-17077372.jpeg',
    icon: <Smartphone className="w-10 h-10" />,
  },
  {
    id: 'web-dev',
    title: 'Website Design & Development',
    description:
      'We design and develop modern, responsive, and professional websites for businesses and organizations.we build secure, mobile-friendly, and tailored websites to help you showcase your brand, attract customers, and grow your business online.',
    image: 'https://images.pexels.com/photos/26694146/pexels-photo-26694146.jpeg',
    icon: <Globe className="w-10 h-10" />,
  },
  {
    id: 'cctv',
    title: 'CCTV Camera Installation',
    description:
      'We provide professional CCTV camera installation services for homes, offices, shops, hotels, schools, hospitals, and other facilities. Our solutions help improve security, monitor activities, and protect your property with reliable surveillance systems.',
    image: 'https://images.pexels.com/photos/10143239/pexels-photo-10143239.jpeg',
    icon: <Camera className="w-10 h-10" />,
  },
  {
    id: 'tracking',
    title: 'Car Tracking Device Installation',
    description:
      'We provide professional GPS and vehicle tracking device installation services for personal and business vehicles. Our solutions help you monitor vehicle locations in real time, improve fleet management, enhance security, and reduce the risk of theft.',
    image: 'https://images.pexels.com/photos/9795002/pexels-photo-9795002.jpeg',
    icon: <Navigation className="w-10 h-10" />,
  },
  {
    id: 'smart-doorbell',
    title: 'Smart Doorbell and Lock Installation',
    description:
      'We provide professional smart doorbell installation services for homes, offices, and businesses. Our smart doorbell solutions allow you to see, hear, and communicate with visitors remotely, enhancing security and convenience at your property.',
    image: 'https://images.pexels.com/photos/9461267/pexels-photo-9461267.jpeg',
    icon: <DoorOpen className="w-10 h-10" />,
  },
  {
    id: 'Electrical-fencing',
    title: 'Electrical Fencing Installation',
    description:
      'We provide professional electrical fencing installation services for homes, businesses, farms, and other properties. Our solutions help enhance perimeter security, deter unauthorized access, and provide reliable protection for your property.',
    image: 'https://images.pexels.com/photos/9537493/pexels-photo-9537493.jpeg',
    icon: <BellElectric className="w-10 h-10" />,
  },
  {
    id: 'other-it',
    title: 'Other IT & Technology Services',
    description:
      'We offer a wide range of IT and technology solutions to support businesses and organizations. Our services include IT support, network setup, system maintenance, cloud solutions, software integration, technical consulting, and other technology-related services tailored to your needs.',
    image: 'https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg',
    icon: <Wrench className="w-10 h-10" />,
  },
];

export const Services = ({ onRequestService }: ServicesProps) => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-blue dark:text-white">
            Our Services
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions to meet all your digital and
            technical needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Service Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-primary-yellow to-secondary-orange rounded-xl flex items-center justify-center text-white shadow-xl backdrop-blur-sm">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-blue dark:text-white line-clamp-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                <button
                  onClick={() => onRequestService(service.title)}
                  className="w-full px-6 py-3 bg-primary-yellow text-primary-blue font-semibold rounded-xl hover:bg-primary-yellow/90 transition-all duration-300 hover:scale-[1.02]"
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