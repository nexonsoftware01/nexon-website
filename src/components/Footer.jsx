import { FaLinkedinIn, FaXTwitter, FaFacebookF } from 'react-icons/fa6';
import Logo from './Logo';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const services = ['IT Staffing', 'Software Development', 'QA Testing', 'IT Consulting', 'AI & ML Solutions'];

const socials = [
  { icon: FaLinkedinIn, label: 'LinkedIn' },
  { icon: FaXTwitter, label: 'X' },
  { icon: FaFacebookF, label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'rgba(15,23,42,0.5)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo size="small" />
            </div>
            <p className="text-dark-400 text-sm leading-relaxed mb-5">
              Nexon Software Solutions — IT staffing, software development, QA testing, AI/ML solutions & consulting. Based in Noida, India.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-dark-400 hover:text-primary-400 transition-colors"
                  style={{ background: 'rgba(30,41,59,0.4)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <s.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-dark-400 hover:text-primary-400 text-sm transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-dark-400 text-sm">
              <li>sales@nexonsolution.com</li>
              <li>+91 9729283572</li>
              <li className="leading-relaxed">D-23, Sector 59, Noida, Uttar Pradesh, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-dark-500 text-sm">&copy; 2025 Nexon Software Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
