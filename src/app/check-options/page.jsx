import {
  CheckCircle2,
  ChevronRight,
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
  title: `Check Stair Lift Options | ${siteConfig.name}`,
  description: 'Answer a few quick questions or call to check stair lift installation provider options near you.',
};

const staircaseOptions = [
  'Straight staircase',
  'Curved or angled staircase',
  'Multiple landings',
  'Not sure yet',
];

const installOptions = [
  'Indoor stairs',
  'Outdoor stairs',
  'Both indoor and outdoor',
  'Not sure yet',
];

const supportPoints = [
  'No unsupported price claims',
  'No medical or healthcare claims',
  'Independent provider connection',
  'Availability varies by location',
];

const faqs = [
  [
    'Is this a stair lift installation company?',
    'No. This website connects users with independent stair lift and home accessibility service providers. We do not directly install stair lifts.',
  ],
  [
    'Can I get exact pricing here?',
    'Pricing varies by staircase type, equipment, installation requirements, location, and provider. Call to discuss available options.',
  ],
  [
    'Does calling guarantee availability?',
    'No. Calling does not guarantee service availability in your area. Availability varies by location and provider.',
  ],
];

function CallButton({ children = 'Call Now', className = '', light = false }) {
  return (
    <a
      href={`tel:${siteConfig.phoneTel}`}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-4 font-extrabold transition-all ${
        light
          ? 'bg-white text-brand-dark hover:bg-slate-100'
          : 'bg-brand-blue text-white hover:opacity-95 call-shadow'
      } ${className}`}
    >
      <Phone size={20} /> {children}
    </a>
  );
}

function OptionButton({ children }) {
  return (
    <div className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left soft-card hover:border-brand-blue transition-colors">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center shrink-0">
          <CheckCircle2 size={18} />
        </div>
        <span className="font-bold text-slate-700">{children}</span>
      </div>
      <ChevronRight size={18} className="text-slate-400 group-hover:text-brand-blue" />
    </div>
  );
}

export default function CheckOptionsPage() {
  return (
    <main className="pb-20 md:pb-0 bg-white">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef6ff] via-white to-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20">
          <div className="grid lg:grid-cols-[0.95fr,1.05fr] gap-8 lg:gap-10 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-blue-100 px-4 py-2 text-xs sm:text-sm font-extrabold text-brand-blue soft-card">
                <Home size={15} /> Quick Stair Lift Options Check
              </div>

              <h1 className="mt-5 text-[2.2rem] sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.02] text-brand-dark">
                Check Stair Lift Installation Options Near You
              </h1>

              <p className="mt-5 text-base sm:text-lg md:text-xl leading-8 text-slate-600 max-w-2xl mx-auto lg:mx-0">
                Answer a few simple questions below, then call to discuss available stair lift provider options for your home.
              </p>

              <div className="mt-7 rounded-3xl border border-blue-100 bg-blue-50/80 px-4 py-4 text-xs sm:text-sm text-slate-700 leading-6 max-w-2xl mx-auto lg:mx-0">
                <strong className="text-brand-dark">Important:</strong> This is a connection service. We do not directly install stair lifts, provide medical advice, healthcare services, or emergency assistance.
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <CallButton className="w-full sm:w-auto">Call {siteConfig.phoneDisplay}</CallButton>
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 soft-card">
                  <strong className="text-brand-dark">Call Hours:</strong><br />
                  {siteConfig.hoursShort}
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 bg-white p-4 sm:p-6 soft-card">
              <div className="rounded-2xl overflow-hidden mb-5">
                <img
                  src="/images/hero-stairlift.png"
                  alt="Stair lift installed in a bright home"
                  className="w-full object-cover aspect-[16/10]"
                />
              </div>

              <div className="rounded-2xl bg-brand-dark text-white p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold leading-tight">Prefer To Skip The Questions?</h2>
                    <p className="mt-2 text-sm text-slate-200 leading-6">
                      Call now and speak with a representative during call center hours.
                    </p>
                    <CallButton light className="mt-5 w-full sm:w-auto">Call Now</CallButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {supportPoints.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 soft-card flex items-start gap-3">
                <ShieldCheck size={18} className="text-brand-blue shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-8 lg:gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-extrabold text-brand-blue soft-card">
                <Wrench size={16} /> Step 1
              </div>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-brand-dark">What Type Of Staircase Do You Have?</h2>
              <p className="mt-4 text-slate-600 leading-8">
                Choose the closest option. If you are unsure, you can still call and describe the setup.
              </p>
            </div>

            <div className="space-y-3">
              {staircaseOptions.map((item) => (
                <OptionButton key={item}>{item}</OptionButton>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-8 lg:gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-extrabold text-brand-blue soft-card">
                <Home size={16} /> Step 2
              </div>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-brand-dark">Where Would The Stair Lift Be Installed?</h2>
              <p className="mt-4 text-slate-600 leading-8">
                Indoor and outdoor options may differ by provider, location, and staircase type.
              </p>
            </div>

            <div className="space-y-3">
              {installOptions.map((item) => (
                <OptionButton key={item}>{item}</OptionButton>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-brand-navy text-white">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 text-center">
          <Clock3 size={38} className="mx-auto mb-4" />
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            Final Step: Call To Check Local Provider Options
          </h2>
          <p className="mt-5 text-blue-100 leading-8 text-base sm:text-lg max-w-2xl mx-auto">
            A representative can help discuss your staircase type, location, and available provider options.
          </p>
          <div className="mt-8">
            <CallButton light>Call {siteConfig.phoneDisplay}</CallButton>
          </div>
          <p className="mt-5 text-xs sm:text-sm text-blue-100 leading-6">
            Availability, pricing, installation timelines, and service options vary by location and provider.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Common Questions</h2>
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
