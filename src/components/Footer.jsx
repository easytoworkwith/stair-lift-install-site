import { siteConfig } from './siteConfig';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">{siteConfig.name}</h3>
          <p className="text-slate-300 text-sm leading-6">Connect with independent stair lift and home accessibility service providers.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm text-slate-300">
            <a className="block hover:text-white" href="/privacy-policy">Privacy Policy</a>
            <a className="block hover:text-white" href="/terms">Terms & Conditions</a>
            <a className="block hover:text-white" href="/contact">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Important Disclaimer</h4>
          <p className="text-slate-300 text-sm leading-6">This website connects consumers with independent service providers. We do not directly provide stair lift installation services. Availability, pricing, installation timelines, and service options vary by location and provider.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400 px-4">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
    </footer>
  );
}
