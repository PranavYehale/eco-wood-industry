import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Package,
  Truck,
  Shield,
  Leaf,
  Clock,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about#team' },
      { name: 'Careers', path: '/careers' },
      { name: 'News & Blog', path: '/blog' },
      { name: 'Sustainability Report', path: '/sustainability' },
    ],
    services: [
      { name: 'Wood Collection', path: '/services#collection' },
      { name: 'Wood Supply', path: '/services#supply' },
      { name: 'Quality Inspection', path: '/services#inspection' },
      { name: 'Custom Solutions', path: '/services#custom' },
      { name: 'Logistics', path: '/services#logistics' },
    ],
    resources: [
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Industries', path: '/industries' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Contact Us', path: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'GST Compliance', path: '/compliance' },
      { name: 'Shipping Policy', path: '/shipping' },
    ],
  };

  const features = [
    { icon: <Shield className="h-5 w-5" />, text: 'Quality Guaranteed' },
    { icon: <Leaf className="h-5 w-5" />, text: '100% Sustainable' },
    { icon: <Clock className="h-5 w-5" />, text: 'On-time Delivery' },
    { icon: <Award className="h-5 w-5" />, text: 'Industry Certified' },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern removed to fix potential rendering issues */}

      <div className="relative">
        {/* Top Features */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-500 rounded-2xl p-8 -mt-16 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-white/20 p-3 rounded-xl">
                    {feature.icon}
                  </div>
                  <span className="text-lg font-semibold">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-500 p-2.5 rounded-xl">
                  <Package className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    Eco<span className="text-green-400">Wood</span>
                  </h2>
                  <p className="text-gray-400 text-sm">Industries</p>
                </div>
              </div>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Transforming industrial wood waste into sustainable resources. 
                Join us in building a greener, more sustainable future for India's industries.
              </p>
              
              {/* Newsletter */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  Get updates on sustainable wood solutions
                </p>
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links], colIndex) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-6 capitalize">
                  {category.replace(/([A-Z])/g, ' $1')}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: (colIndex * 0.1) + (index * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-green-400 transition-colors flex items-center space-x-2 group"
                      >
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        <span>{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact & Social */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-800">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Head Office</p>
                    <p className="text-gray-400">Pune, Maharashtra, India - 411001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a href="tel:+919922887440" className="text-gray-400 hover:text-green-400">
                      +91 9922887440
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:ecowoodindustries@gmail.com" className="text-gray-400 hover:text-green-400">
                      ecowoodindustries@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Certifications */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="bg-gray-800 p-3 rounded-xl hover:bg-green-600 transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              
              <div>
                <p className="text-gray-400 mb-4">Certified & Verified</p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-gray-800 px-4 py-2 rounded-lg">
                    <span className="text-sm font-medium">ISO 9001:2015</span>
                  </div>
                  <div className="bg-gray-800 px-4 py-2 rounded-lg">
                    <span className="text-sm font-medium">GST Registered</span>
                  </div>
                  <div className="bg-gray-800 px-4 py-2 rounded-lg">
                    <span className="text-sm font-medium">Green Business</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <p className="text-gray-500 text-sm">
                  © {currentYear} Eco Wood Industries. All rights reserved.
                </p>
                <div className="hidden md:flex items-center space-x-4">
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-500 text-sm">Reg No: U28990MH2015PTC000000</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-500 text-sm">GSTIN: 27AAACE0000A1Z5</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <Link to="/sitemap" className="text-gray-500 hover:text-green-400 text-sm">
                  Sitemap
                </Link>
                <Link to="/accessibility" className="text-gray-500 hover:text-green-400 text-sm">
                  Accessibility
                </Link>
                <div className="flex items-center space-x-2">
                  <Truck className="h-4 w-4 text-green-400" />
                  <span className="text-gray-500 text-sm">Pan-India Delivery</span>
                </div>
              </div>
            </div>
            
            {/* Mobile-only info */}
            <div className="mt-4 md:hidden text-center">
              <p className="text-gray-600 text-xs">
                Reg No: U28990MH2015PTC000000 • GSTIN: 27AAACE0000A1Z5
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;