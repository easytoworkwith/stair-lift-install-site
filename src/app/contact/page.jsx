import { Phone } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { siteConfig } from '../../components/siteConfig';

export const metadata = { title: `Contact | ${siteConfig.name}` };

export default function Contact() {
  return (
    <main>
      <Header />
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-5">Contact Us</h1>
        <p className="text-lg text-slate-700 leading-8 mb-8">Call to check stair lift installation availability and provider options near you.</p>
        <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center gap-2 bg-brand-blue text-white px-7 py-4 rounded-full font-bold text-lg hover:opacity-90 call-shadow mb-10">
          <Phone size={22} /> Call {siteConfig.phoneDisplay}
        </a>
        <div className="bg-white border border-slate-200 rounded-2xl p-7 mb-8">
          <h2 className="text-2xl font-bold text-slate-700 mb-5">Call Center Hours</h2>
          <div className="space-y-2 text-lg text-slate-600">
            {siteConfig.hoursFull.map(([day, time]) => (
              <p key={day}>{day}: <strong>{time}</strong></p>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 text-sm text-slate-600 leading-7">
          This website connects consumers with independent stair lift and home accessibility service providers. We do not directly provide stair lift installation services.
        </div>
      </section>
      <Footer />
    </main>
  );
}
