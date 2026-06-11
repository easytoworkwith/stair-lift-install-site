import { Phone } from 'lucide-react';
import { siteConfig } from './siteConfig';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-[1.2fr,0.8fr,1fr] gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-11 w-11 rounded-2xl bg-white/10 flex items-center justify-center font-extrabold">SL</div>
            <div>
              <h3 className="text-xl font-bold">{siteConfig.name}</h3>
              <p className="text-slate-300 text-sm">Stair Lift Installation Support</p>
            </div>
          </div>
          <p className="text-slate-300 text-sm leading-7 max-w-md">
            Connect with independent stair lift and home accessibility service providers. Availability,
            pricing, installation timelines, and service options vary by location and provider.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <div className="space-y-3 text-sm text-slate-300">
            <a className="block hover:text-white" href="/privacy-policy">Privacy Policy</a>
            <a className="block hover:text-white" href="/terms">Terms & Conditions</a>
            <a className="block hover:text-white" href="/contact">Contact</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Call Support</h4>
          <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center gap-2 rounded-full bg-white text-brand-dark px-4 py-3 font-bold mb-4">
            <Phone size={18} /> {siteConfig.phoneDisplay}
          </a>
          <div className="text-sm text-slate-300 space-y-2 leading-6">
            {siteConfig.hoursFull.map(([day, time]) => (
              <p key={day}><strong className="text-white">{day}:</strong> {time}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400 px-4">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
