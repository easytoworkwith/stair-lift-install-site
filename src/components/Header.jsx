import { Clock3, Phone } from 'lucide-react';
import { siteConfig } from './siteConfig';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="bg-brand-dark text-white text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-slate-100">
            <Clock3 size={15} />
            <span><strong>Open Daily:</strong> {siteConfig.hoursShort}</span>
          </div>
          <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center gap-2 font-bold text-white">
            <Phone size={15} /> Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3 min-w-0">
          <div className="h-11 w-11 rounded-2xl bg-brand-navy text-white flex items-center justify-center font-extrabold text-lg shadow-sm">SL</div>
          <div className="min-w-0">
            <div className="font-extrabold text-brand-dark leading-none">{siteConfig.name}</div>
            <div className="text-xs text-slate-500">Stair Lift Installation Options</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <a href="#options" className="hover:text-brand-blue transition-colors">Options</a>
          <a href="#process" className="hover:text-brand-blue transition-colors">How It Works</a>
          <a href="#hours" className="hover:text-brand-blue transition-colors">Hours</a>
          <a href="#faq" className="hover:text-brand-blue transition-colors">FAQ</a>
        </nav>

        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-bold text-white call-shadow hover:opacity-95 transition-opacity"
        >
          <Phone size={18} /> Call Now
        </a>
      </div>
    </header>
  );
}
