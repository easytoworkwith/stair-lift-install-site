import {
  CheckCircle2,
  Clock3,
  Home,
  Phone,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { siteConfig } from '../components/siteConfig';

const options = [
  {
    title: 'Straight Stair Lifts',
    copy: 'For standard staircases with a direct path between floors.',
  },
  {
    title: 'Curved Stair Lifts',
    copy: 'For staircases with turns, landings, or custom layouts.',
  },
  {
    title: 'Indoor Stair Lifts',
    copy: 'For interior stairs inside the home.',
  },
  {
    title: 'Outdoor Stair Lifts',
    copy: 'Outdoor options may be available depending on location.',
  },
  {
    title: 'Replacement Options',
    copy: 'Discuss replacement options for older or existing stair lifts.',
  },
  {
    title: 'Availability Check',
    copy: 'Call to review your staircase and local provider availability.',
  },
];

const steps = [
  {
    title: 'Call The Number',
    copy: 'Tap the call button or dial the number shown on this page.',
  },
  {
    title: 'Share Your Staircase Type',
    copy: 'Tell the representative if your stairs are straight, curved, indoor, or outdoor.',
  },
  {
    title: 'Check Available Options',
    copy: 'Get connected with independent providers when service is available in your area.',
  },
];

const faqs = [
  ['How much does stair lift installation cost?', 'Costs can vary based on staircase type, home layout, equipment, installation requirements, and provider availability. Call to discuss available options.'],
  ['Can providers help with curved stairs?', 'Some providers may offer curved stair lift options depending on your staircase and location. Availability varies by provider.'],
  ['Do providers install outdoor stair lifts?', 'Outdoor stair lift options may be available in some areas. A representative can help check service options near you.'],
  ['Is this website a stair lift company?', 'No. This website connects consumers with independent stair lift and home accessibility service providers. We do not directly install stair lifts.'],
];

function CallButton({ children = 'Call Now', light = false, className = '' }) {
  return (
    <a
      href={`tel:${siteConfig.phoneTel}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-7 py-3.5 sm:py-4 text-base md:text-lg font-extrabold transition-all ${
        light
          ? 'bg-white text-brand-dark hover:bg-slate-100'
          : 'bg-brand-blue text-white hover:opacity-95 call-shadow'
      } ${className}`}
    >
      <Phone size={20} className="shrink-0" /> <span>{children}</span>
    </a>
  );
}

function TrustItem({ children }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 soft-card">
      <CheckCircle2 size={18} className="text-brand-blue shrink-0" />
      <span>{children}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="pb-20 md:pb-0">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7fbff] via-white to-white">
        <div className="absolute inset-x-0 top-0 h-36 sm:h-40 bg-[radial-gradient(circle_at_top_left,_rgba(31,111,235,0.14),_transparent_42%)]" />
        <div className="max-w-6xl mx-auto px-3 sm:px-4 pt-8 pb-10 sm:pt-10 sm:pb-14 md:pt-16 md:pb-20 relative">
          <div className="grid lg:grid-cols-[1.05fr,0.95fr] gap-8 sm:gap-10 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-extrabold text-brand-blue soft-card">
                <Home size={15} /> Stair Lift Installation Options
              </div>

              <h1 className="mt-5 text-[2.35rem] leading-[1.02] sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-brand-dark max-w-3xl mx-auto lg:mx-0">
                Call To Check Stair Lift Installation Options Near You
              </h1>

              <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 leading-7 sm:leading-8 max-w-2xl mx-auto lg:mx-0">
                Speak with a representative about your staircase and get connected with independent stair lift providers when available in your area.
              </p>

              <div className="mt-7 sm:mt-8 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 bg-white p-4 sm:p-6 soft-card max-w-2xl mx-auto lg:mx-0">
                <div className="grid sm:grid-cols-[auto,1fr] gap-4 items-center">
                  <CallButton className="w-full sm:w-auto">Call {siteConfig.phoneDisplay}</CallButton>
                  <div className="text-center sm:text-left">
                    <div className="text-sm font-extrabold text-brand-dark">Phone support available daily</div>
                    <div className="mt-1 text-xs sm:text-sm text-slate-600 leading-6">{siteConfig.hoursShort}</div>
                    <div className="mt-2 text-xs text-slate-500 leading-5">Availability, pricing, and timelines vary by location and provider.</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 max-w-2xl mx-auto lg:mx-0">
                <TrustItem>Fast phone-based availability check</TrustItem>
                <TrustItem>Straight & curved stair options</TrustItem>
                <TrustItem>Support for homeowners & caregivers</TrustItem>
                <TrustItem>Independent provider connection</TrustItem>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 bg-white soft-card">
                <img
                  src="/images/hero-stairlift.png"
                  alt="Older adult using a stair lift in a bright home interior"
                  className="block h-full w-full object-cover aspect-[4/3]"
                />
              </div>

              <div className="hidden md:block absolute -bottom-6 left-6 right-6 rounded-3xl bg-white border border-slate-200 p-5 soft-card">
                <div className="grid grid-cols-[auto,1fr] gap-4 items-center">
                  <div className="h-14 w-14 rounded-2xl bg-brand-blue text-white flex items-center justify-center">
                    <Phone size={26} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.14em] font-extrabold text-brand-blue">Ready to check options?</div>
                    <div className="text-xl font-extrabold text-brand-dark">Call {siteConfig.phoneDisplay}</div>
                    <div className="text-sm text-slate-500">Talk through your staircase type and location.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-14 grid md:grid-cols-3 gap-4">
            {[
              ['1', 'Call Now', 'Use the number above to speak with a representative.'],
              ['2', 'Answer A Few Questions', 'Share your staircase type, home setup, and location.'],
              ['3', 'Check Local Options', 'Provider options may vary by area and availability.'],
            ].map(([num, title, copy]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 soft-card">
                <div className="h-11 w-11 rounded-2xl bg-brand-light text-brand-blue flex items-center justify-center font-extrabold mb-4">{num}</div>
                <h3 className="text-lg font-extrabold text-brand-dark mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-6">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="options" className="section-pad bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-8 sm:gap-10 items-start">
            <div className="lg:sticky lg:top-32">
              <div className="overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 bg-white soft-card">
                <img src="/images/stairlift-product.png" alt="Installed stair lift on a residential staircase" className="block w-full object-cover aspect-[4/3]" />
                <div className="p-5 sm:p-7">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark leading-tight">Not Sure Which Stair Lift Option Fits?</h2>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-7">
                    Call to discuss your staircase and check what provider options may be available near you.
                  </p>
                  <CallButton className="mt-6 w-full">Call Now</CallButton>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-extrabold text-brand-blue soft-card">
                <Wrench size={16} /> Service Options
              </div>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-brand-dark">Stair Lift Installation Services</h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-8">
                These are common stair lift categories users ask about. Service availability varies by location and provider.
              </p>

              <div className="mt-8 grid gap-4 sm:gap-5 sm:grid-cols-2">
                {options.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 soft-card">
                    <div className="h-11 w-11 rounded-2xl bg-brand-light text-brand-blue flex items-center justify-center mb-4">
                      <CheckCircle2 size={22} />
                    </div>
                    <h3 className="text-lg font-extrabold text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-6">{item.copy}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl bg-brand-navy text-white p-5 sm:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <h3 className="text-2xl font-extrabold">Questions about installation?</h3>
                  <p className="mt-2 text-blue-100 leading-7">Call to check local availability and speak with a representative.</p>
                </div>
                <CallButton light className="w-full md:w-auto shrink-0">Call {siteConfig.phoneDisplay}</CallButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 sm:gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-extrabold text-brand-blue soft-card">
                <ShieldCheck size={16} /> Simple Call Process
              </div>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-brand-dark">From Call To Available Options</h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-8">
                The goal is simple: help users quickly understand what stair lift installation options may be available based on their home setup.
              </p>

              <div className="mt-8 space-y-4 sm:space-y-5">
                {steps.map((step, index) => (
                  <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 soft-card flex gap-4 sm:gap-5">
                    <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center font-extrabold shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-brand-dark mb-2">{step.title}</h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-7">{step.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 bg-white soft-card">
              <img src="/images/family-support.png" alt="Older adult with caregiver beside a stair lift in a home" className="block h-full w-full object-cover aspect-[4/3]" />
              <div className="p-5 sm:p-7 bg-white">
                <div className="flex items-start gap-3">
                  <Clock3 size={22} className="text-brand-blue mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-extrabold text-brand-dark">Call Center Hours</h3>
                    <p className="mt-2 text-sm sm:text-base text-slate-600 leading-7">{siteConfig.hoursShort}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-extrabold mb-5">
            <Phone size={16} /> Speak With A Representative
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto">
            Call Now To Check Stair Lift Installation Options Near You
          </h2>
          <p className="mt-5 text-blue-100 text-base sm:text-lg leading-8 max-w-2xl mx-auto">
            Service availability, pricing, and installation timelines vary by location and independent provider.
          </p>
          <div className="mt-8">
            <CallButton light className="w-full sm:w-auto">Call {siteConfig.phoneDisplay}</CallButton>
          </div>
        </div>
      </section>

      <section id="faq" className="section-pad bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Frequently Asked Questions</h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">Helpful answers before you call.</p>
          </div>
          <div className="space-y-4">
            {faqs.map(([q, a]) => (
              <div key={q} className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 soft-card">
                <h3 className="text-lg font-extrabold text-brand-dark mb-2">{q}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-7">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hours" className="pb-12 sm:pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-5 sm:p-8 md:p-10 soft-card">
            <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-8 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">Call Center Hours</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-7">Reach out during the hours below to speak with a representative.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {siteConfig.hoursFull.map(([day, time]) => (
                  <div key={day} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="font-extrabold text-brand-dark mb-2">{day}</div>
                    <div className="text-slate-600 text-sm leading-6">{time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6 text-xs sm:text-sm text-slate-600 leading-7">
            <strong className="text-brand-dark">Disclaimer:</strong> This website connects consumers with independent stair lift and home accessibility service providers. We do not directly provide stair lift installation services. Availability, pricing, installation timelines, and service options vary by location and provider. Calling this number does not guarantee that service is available in your area.
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
