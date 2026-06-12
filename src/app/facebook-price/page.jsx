import {
  CheckCircle2,
  Clock3,
  DollarSign,
  Home,
  Phone,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { siteConfig } from '../../components/siteConfig';

export const metadata = {
  title: `Check Stair Lift Options | ${siteConfig.name}`,
  description: 'Call to check stair lift installation options, cost factors, and independent provider availability near you.',
};

const costFactors = [
  'Straight or curved staircase',
  'Indoor or outdoor installation',
  'Staircase length and layout',
  'Equipment and provider availability',
];

const quickOptions = [
  ['Straight Stairs', 'Common option for direct staircases.'],
  ['Curved Stairs', 'For turns, landings, or custom layouts.'],
  ['Indoor Options', 'For stairways inside the home.'],
  ['Outdoor Options', 'May be available in select areas.'],
];

const faqs = [
  ['Can I check stair lift pricing over the phone?', 'You can call to discuss cost factors and provider availability. Final pricing varies by staircase type, equipment, location, and provider.'],
  ['Is this a stair lift installer?', 'No. This website connects users with independent stair lift and home accessibility service providers. We do not directly install stair lifts.'],
  ['Does calling guarantee availability?', 'No. Availability, pricing, and installation timelines vary by location and provider.'],
];

function CallButton({ children = 'Call Now', light = false, className = '' }) {
  return (
    <a
      href={`tel:${siteConfig.phoneTel}`}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-4 font-extrabold transition-all ${
        light
          ? 'bg-white text-brand-dark hover:bg-slate-100'
          : 'bg-brand-gold text-brand-dark hover:opacity-95 shadow-lg shadow-yellow-500/20'
      } ${className}`}
    >
      <Phone size={20} /> {children}
    </a>
  );
}

export default function FacebookPriceLandingPage() {
  return (
    <main className="pb-20 md:pb-0 bg-[#f5f7fb]">
      <Header />

      <section className="bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-10 sm:py-14 md:py-16">
          <div className="grid lg:grid-cols-[0.95fr,1.05fr] gap-8 lg:gap-10 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-xs sm:text-sm font-extrabold text-white">
                <DollarSign size={15} /> Stair Lift Price & Installation Options
              </div>

              <h1 className="mt-5 text-[2.15rem] sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.02]">
                Check Stair Lift Installation Cost Factors Near You
              </h1>

              <p className="mt-5 text-base sm:text-lg md:text-xl leading-8 text-slate-200 max-w-2xl mx-auto lg:mx-0">
                Costs can vary by staircase type, home layout, equipment, location, and provider. Call to discuss available stair lift options.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center justify-center lg:justify-start">
                <CallButton>Call {siteConfig.phoneDisplay}</CallButton>
                <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-200">
                  <strong className="text-white">Call Hours:</strong><br className="sm:hidden" /> {siteConfig.hoursShort}
                </div>
              </div>

              <div className="mt-5 text-xs sm:text-sm text-slate-300 leading-6 max-w-2xl mx-auto lg:mx-0">
                We connect users with independent providers. We do not directly install stair lifts, provide medical advice, healthcare services, or emergency assistance.
              </div>
            </div>

            <div className="rounded-[1.5rem] sm:rounded-[2rem] bg-white text-brand-dark p-5 sm:p-7 shadow-2xl">
              <div className="grid sm:grid-cols-[0.8fr,1.2fr] gap-5 items-center">
                <img
                  src="/images/stairlift-product.png"
                  alt="Installed stair lift on residential stairs"
                  className="rounded-2xl w-full object-cover aspect-[4/3]"
                />
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-2 text-xs font-extrabold text-brand-blue">
                    <Wrench size={14} /> Quick Availability Check
                  </div>
                  <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold leading-tight">Call To Discuss Your Staircase</h2>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-7">
                    A representative can ask a few basic questions and help check available provider options.
                  </p>

                  <div className="mt-5 space-y-3">
                    {['Straight or curved stairs', 'Indoor or outdoor setup', 'Location and availability'].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <CheckCircle2 size={18} className="text-brand-blue shrink-0" /> {item}
                      </div>
                    ))}
                  </div>

                  <CallButton className="mt-6 w-full">Call Now</CallButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="grid lg:grid-cols-[0.85fr,1.15fr] gap-8 items-start">
            <div className="rounded-[1.5rem] bg-[#f8fafc] border border-slate-200 p-6 sm:p-8 soft-card">
              <div className="h-12 w-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center mb-5">
                <DollarSign size={24} />
              </div>
              <h2 className="text-3xl font-extrabold text-brand-dark leading-tight">What Can Affect Stair Lift Cost?</h2>
              <p className="mt-4 text-slate-600 leading-7">
                Pricing is not one-size-fits-all. These are common factors users may need to discuss with a provider.
              </p>
              <CallButton className="mt-6 w-full">Check Options By Phone</CallButton>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {costFactors.map((item, index) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 soft-card">
                  <div className="text-4xl font-extrabold text-brand-light mb-2">0{index + 1}</div>
                  <h3 className="text-lg font-extrabold text-brand-dark">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-[#f5f7fb]">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-extrabold text-brand-blue soft-card">
              <Home size={16} /> Compare Common Options
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-brand-dark">Common Stair Lift Categories</h2>
            <p className="mt-4 text-slate-600 leading-8">A quick phone call can help determine which category may fit your staircase type.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickOptions.map(([title, copy]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 soft-card">
                <CheckCircle2 size={24} className="text-brand-blue mb-4" />
                <h3 className="font-extrabold text-brand-dark mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-6">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-brand-blue text-white">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 text-center">
          <ShieldCheck size={38} className="mx-auto mb-4" />
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">Call To Check Stair Lift Options</h2>
          <p className="mt-5 text-blue-50 leading-8 text-base sm:text-lg max-w-2xl mx-auto">
            Speak with a representative during call center hours. Availability, pricing, and timelines vary by location and provider.
          </p>
          <div className="mt-8">
            <CallButton light>Call {siteConfig.phoneDisplay}</CallButton>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Questions Before You Call</h2>
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
        className="safe-bottom fixed bottom-3 left-3 right-3 md:hidden rounded-full bg-brand-gold px-5 py-4 text-center font-extrabold text-brand-dark shadow-lg z-50"
      >
        Call Now: {siteConfig.phoneDisplay}
      </a>
    </main>
  );
}
