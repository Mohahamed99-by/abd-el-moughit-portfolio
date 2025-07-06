import { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-dark shadow-2xl shadow-black/20' 
        : 'bg-transparent'
    }`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-purple-600 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
              VideoStudio
            </span>
            <span className="text-xs text-gray-400 tracking-wider uppercase">
              Professional Editing
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.slice(0, -1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group px-6 py-3 font-medium text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </a>
          ))}
          
          {/* Contact CTA Button */}
          <a
            href="#contact"
            className="ml-6 px-6 py-3 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-full font-semibold text-white shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-3 glass rounded-xl border border-white/20 hover:bg-white/10 transition-colors duration-300"
        >
          <svg
            className={`w-6 h-6 text-white transition-transform duration-300 ${
              isMobileMenuOpen ? 'rotate-90' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0'
      }`}>
        <div className="glass-dark border-t border-white/10 px-6 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white hover:gradient-text font-medium py-2 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;