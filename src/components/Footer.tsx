import { MessageCircle, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
  {
    name: 'WhatsApp',
    icon: <MessageCircle className="w-5 h-5" />,
    url: 'https://wa.me/255758018277?text=Hello%20Makezy',
    color: 'hover:bg-green-500',
  },
  {
    name: 'Instagram',
    icon: <Instagram className="w-5 h-5" />,
    url: 'https://instagram.com/makezy_tech',
    color: 'hover:bg-red-500',
  },
  {
    name: 'Facebook',
    icon: <Facebook className="w-5 h-5" />,
    url: 'https://facebook.com/makezytechpage',
    color: 'hover:bg-blue-600',
  },
  {
    name: 'Twitter',
    icon: <Twitter className="w-5 h-5" />,
    url: 'https://twitter.com/makezytech',
    color: 'hover:bg-sky-500',
  },
];

  return (
    <footer className="bg-primary-blue dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-yellow">Makezy Tech Innovation</h3>
            <p className="text-gray-300 mb-4">
              Software Developers & Tech Services Providers
            </p>
            <p className="text-gray-400 text-sm">
              Delivering innovative solutions for your digital needs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a
                href="mailto:rashidsaidi780@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-primary-yellow transition-colors"
              >
                <Mail className="w-5 h-5" />
                rashidsaidi780@gmail.com
              </a>
              <a
                href="tel:+255123456789"
                className="flex items-center gap-3 text-gray-300 hover:text-primary-yellow transition-colors"
              >
                <Phone className="w-5 h-5" />
                +255758018277 / +255123456789
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us On</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/10 rounded-full hover:text-white transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Makezy Tech Innovation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
