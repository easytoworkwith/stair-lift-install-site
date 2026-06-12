import {
  CheckCircle2,
  Clock3,
  Home,
  Phone,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { siteConfig } from '../../components/siteConfig';

export const metadata = {
  title: `Stair Lift Installation Options | ${siteConfig.name}`,
  description: 'Call to check stair lift installation options and independent provider availability near you.',
};

const optionCards = [
  'Straight Stair Lift Options',
  'Curved Stair Lift Options',
  'Indoor Stair Lift Options',
  'Outdoor Stair Lift Options',
];

const checklist = [
  'Speak with a representative',
  'Discuss your staircase layout',
  'Check available provider options',
  'Review service availability by location',
];

const faqs = [
  ['Can I call to check stair lift installation options?', 'Yes. Call the number on this page to speak with a representative and discuss provider options that may be available in your area.'],
  ['Is pricing the same for every home?', 'No. Pricing may vary based on staircase type, equipment, installation requirements, location, and provider.'],
  ['Do you directly install stair lifts?', 'No. This website connects consumers with independent stair lift and home accessibility service providers. We do not directly install stair lifts.'],
];

function CallButton({ children = 'Call Now', className = '', light = false }) {
  return (
    <a
      href={`tel:${siteConfig.phoneTel}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-extrabold transition-all ${
        light
          ? 'bg-white text-brand-dark hover:bg-slate-100'
          : 'bg-brand-blue text-white hover:opacity-95 call-shadow'
      } ${className}`}
    >
      <Phone size={20} /> {children}
    </a>
  );
}

export default function FacebookPriceLandingPage() {
  return (
    <main className="pb-20 md:pb-0 bg-white">
      <Header />

      <section className="relative overflow-hidden bg-[#f6f9fc]">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-10 sm:py-14 md:py-16">
          <div className="grid lg:grid-cols-[1fr,0.9fr] gap-8 lg:gap-10 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-blue-100 px-4 py-2 text-xs sm:text-sm font-extrabold text-brand-blue soft-card">
                <Home size={15} /> Home Stair Lift Options
              </div>

              <h1 className="mt-5 text-[2.25rem] sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.02] text-brand-dark">
                See Stair Lift Installation Options For Your Home
              </h1>

              <p className="mt-5 text-base sm:text-lg md:text-xl leading-8 text-slate-600 max-w-2xl mx-auto lg:mx-0">
                Call to speak with a representative about stair lift options, home layout, and local provider availability.
              </p>

              <div className="mt-7 rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-6 soft-card max-w-2xl mx-auto lg:mx-0">
                <div className="grid gap-4 sm:grid-cols-[auto,1fr] sm:items-center">
                  <CallButton className="w-full sm:w-auto">Call {siteConfig.phoneDisplay}</CallButton>
                  <div className="text-center sm:text-left">
                    <div className="text-sm font-extrabold text-brand-dark">Call center hours</div>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-6">{siteConfig.hoursShort}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3 text-xs sm:text-sm text-slate-700 leading-6 max-w-2xl mx-auto lg:mx-0">
                <strong className="text-brand-dark">Important:</strong> We connect users with independent stair lift and home accessibility providers. We do not directly install stair lifts, provide medical advice, healthcare services, or emergency assistance.
              </div>
            </div>

            <div>
              <div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-white soft-card">
                <img
                  src="/images/family-support.png"
                  alt="Older adult with family support near a stair lift"
                  className="w-full object-cover aspect-[4/3]"
                />
                <div className="p-5 sm:p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {optionCards.map((item) => (
                      <div key={item} className="rounded-2xl bg-slate-50 border border-slate-200 p-3 text-sm font-bold text-slate-700">
                        <CheckCircle2 size={17} className="text-brand-blue mb-2" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-4 gap-4">
            {checklist.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 soft-card flex items-start gap-3">
                <CheckCircle2 size={19} className="text-brand-blue shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="grid lg:grid-cols-[0.95fr,1.05fr] gap-8 lg:gap-10 items-center">
            <div className="rounded-[2rem] overflow-hidden border border-slate-200 soft-card">
              <img src="/images/stairlift-product.png" alt="Installed stair lift on residential stairs" className="w-full object-cover aspect-[4/3]" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-extrabold text-brand-blue soft-card">
                <Wrench size={16} /> Service Options
              </div>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-brand-dark">Compare Available Stair Lift Categories</h2>
              <p className="mt-4 text-slate-600 leading-8">
                Every home is different. A representative can help you discuss staircase type, indoor or outdoor needs, and local provider availability.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  ['Straight stairs', 'For direct staircases without turns or landings.'],
                  ['Curved stairs', 'For custom staircases, turns, or landing layouts.'],
                  ['Indoor or outdoor', 'Options may vary based on location and provider.'],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-extrabold text-brand-dark">{title}</h3>
                    <p className="text-sm text-slate-600 leading-6 mt-1">{copy}</p>
                  </div>
                ))}
              </div>

              <CallButton className="mt-7 w-full sm:w-auto">Call To Check Options</CallButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-brand-navy text-white">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 text-center">
          <ShieldCheck size={38} className="mx-auto text-white mb-4" />
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">Ready To Discuss Stair Lift Installation?</h2>
          <p className="mt-5 text-blue-100 leading-8 text-base sm:text-lg max-w-2xl mx-auto">
            Call to check provider availability. Availability, pricing, and installation timelines vary by location and provider.
          </p>
          <div className="mt-8">
            <CallButton light>Call {siteConfig.phoneDisplay}</CallButton>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Common Questions</h2>
            <p className="mt-3 text-slate-600">Helpful information before you call.</p>
          </div>

          <div className="space-y-4">
            {faqs.map(([question, answer]) => (
              <div key={question} className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 soft-card">
                <h3 className="text-lg font-extrabold text-brand-dark">{question}</h3>
                <p className="mt-2 text-slate-600 leading-7">{answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6 text-xs sm:text-sm text-slate-600 leading-7">
            <strong className="text-brand-dark">Disclaimer:</strong> This website connects consumers with independent stair lift and home accessibility service providers. We do not directly provide stair lift installation services, medical advice, healthcare services, or emergency assistance. Availability, pricing, installation timelines, and service options vary by location and provider. Pricing may depend on staircase type, equipment, installation requirements, location, and provider. Calling this number does not guarantee service availability in your area.
          </div>
        </div>
      </section>

      <Footer />

      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="safe-bottom fixed bottom-3 left-3 right-3 md:hidden rounded-full bg-brand-blue px-5 py-4 text-center font-extrabold text-white call-shadow z-50"
      >
        Call Now: {siteConfig.phoneDisplay}
      </a>
    </main>
  );
}
