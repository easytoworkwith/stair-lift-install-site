import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { siteConfig } from '../../components/siteConfig';

export const metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: 'Contact Stair Lift Connect for stair lift installation provider connection information.',
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Header />

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#f7fbff] to-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <div className="rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 md:p-10 soft-card">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">Contact</h1>
            <p className="text-slate-600 leading-8 mb-8">
              Call during call center hours to speak with a representative about stair lift installation options and provider availability.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="font-extrabold text-brand-dark mb-2">Phone</h2>
                <a href={`tel:${siteConfig.phoneTel}`} className="text-brand-blue font-extrabold text-lg">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="font-extrabold text-brand-dark mb-2">Call Center Hours</h2>
                <p className="text-slate-600 text-sm leading-6">{siteConfig.hoursShort}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 text-sm text-slate-700 leading-7">
              <strong className="text-brand-dark">Important:</strong> This website connects consumers with independent stair lift and home accessibility service providers. We do not directly provide stair lift installation services, medical advice, healthcare services, or emergency assistance. Availability, pricing, installation timelines, and service options vary by location and provider.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
