import { ArrowRight, MessageCircle } from 'lucide-react';

interface HeroProps {
  onViewServices: () => void;
}

export const Hero = ({ onViewServices }: HeroProps) => {
  const whatsappNumber = '255758018277';
const whatsappMessage = encodeURIComponent('Hello Makezy, I would like to inquire about your services.');

const handleWhatsAppClick = () => {
  window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
};

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-blue via-primary-blue to-primary-blue/90 dark:from-gray-900 dark:via-primary-blue dark:to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZGI4MTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bS04IDI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-primary-yellow/20 backdrop-blur-sm rounded-full border border-primary-yellow/30">
            <span className="text-primary-yellow font-semibold">Professional Technology Services</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, it's <span className="text-primary-yellow">Makezy Tech Innovation</span>
          </h1>

          <p className="text-2xl md:text-3xl mb-4 text-gray-200">
            Software Developers & Tech Services
          </p>

          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Delivering innovative software solutions, mobile applications, and comprehensive technology services to help your business thrive in the digital age.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onViewServices}
              className="group px-8 py-4 bg-primary-yellow text-primary-blue font-semibold rounded-lg hover:bg-primary-yellow/90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="group px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              Contact via WhatsApp
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-yellow rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-yellow rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
