import { Clock3, Phone } from 'lucide-react';
import { siteConfig } from './siteConfig';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="bg-brand-dark text-white text-[11px] sm:text-sm">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-center sm:text-left">
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 text-slate-100 leading-snug">
            <Clock3 size={14} className="shrink-0" />
            <span><strong>Open Daily:</strong> {siteConfig.hoursShort}</span>
          </div>
          <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center gap-1.5 sm:gap-2 font-bold text-white">
            <Phone size={14} /> Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-3">
        <a href="/" className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-2xl bg-brand-navy text-white flex items-center justify-center font-extrabold text-base sm:text-lg shadow-sm shrink-0">SL</div>
          <div className="min-w-0">
            <div className="font-extrabold text-brand-dark leading-none text-sm sm:text-base truncate">{siteConfig.name}</div>
            <div className="text-[11px] sm:text-xs text-slate-500 truncate">Stair Lift Installation Options</div>
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
          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-brand-blue px-3.5 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white call-shadow hover:opacity-95 transition-opacity shrink-0"
        >
          <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
          <span className="hidden sm:inline">Call Now</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
