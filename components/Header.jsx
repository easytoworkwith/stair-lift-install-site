import { Phone } from 'lucide-react';
import { siteConfig } from './siteConfig';

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="bg-brand-navy text-white text-xs md:text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-center md:justify-between items-center gap-3 text-center">
          <span><strong>Call Center Hours:</strong> {siteConfig.hoursShort}</span>
          <a className="hidden md:inline-flex items-center gap-2 font-semibold" href={`tel:${siteConfig.phoneTel}`}>
            <Phone size={16} /> {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-brand-navy">{siteConfig.name}</a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#services" className="hover:text-brand-blue">Services</a>
          <a href="#how-it-works" className="hover:text-brand-blue">How It Works</a>
          <a href="#faq" className="hover:text-brand-blue">FAQ</a>
        </nav>
        <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-full font-semibold hover:opacity-90">
          <Phone size={18} /> Call Now
        </a>
      </div>
    </header>
  );
}
