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
  description: 'Learn about stair lift installation options, types of stair lifts, cost factors, and independent provider availability.',
};

const types = [
  {
    title: 'Straight Stair Lifts',
    copy: 'A common option for staircases that run directly from one level to another without turns or landings.',
  },
  {
    title: 'Curved Stair Lifts',
    copy: 'May be used for staircases with turns, landings, or custom layouts. Availability varies by provider.',
  },
  {
    title: 'Indoor Stair Lifts',
    copy: 'Designed for stairways inside the home. Equipment and installation needs may vary by staircase.',
  },
  {
    title: 'Outdoor Stair Lifts',
    copy: 'Outdoor options may be available in some areas depending on provider, location, and staircase setup.',
  },
];

const process = [
  'Discuss your staircase type and layout',
  'Review indoor or outdoor installation needs',
  'Check provider availability by location',
  'Discuss next steps and possible service options',
];

const costFactors = [
  'Staircase type: straight, curved, or landing layout',
  'Indoor or outdoor installation location',
  'Equipment type and installation requirements',
  'Local provider availability and service area',
  'Home layout and staircase length',
];

const faqs = [
  [
    'What affects stair lift installation pricing?',
    'Pricing may depend on staircase type, staircase length, equipment type, installation requirements, location, and provider availability.',
  ],
  [
    'Can I get stair lift options for curved stairs?',
    'Some providers may offer curved stair lift options depending on your staircase layout and location. Availability varies by provider.',
  ],
  [
    'Is this website a stair lift installer?',
    'No. This website connects consumers with independent stair lift and home accessibility service providers. We do not directly install stair lifts.',
  ],
  [
    'Does calling guarantee service availability?',
    'No. Calling this number does not guarantee service availability. Availability, pricing, and installation timelines vary by location and provider.',
  ],
];

function CallButton({ children = 'Call Now', className = '', light = false }) {
  return (
    <a
      href={`tel:${siteConfig.phoneTel}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-7 py-3.5 sm:py-4 font-extrabold transition-all ${
        light
          ? 'bg-white text-brand-dark hover:bg-slate-100'
          : 'bg-brand-blue text-white hover:opacity-95 call-shadow'
      } ${className}`}
    >
      <Phone size={20} /> {children}
    </a>
  );
}

function InfoCard({ title, copy }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 soft-card">
      <div className="h-11 w-11 rounded-2xl bg-brand-light text-brand-blue flex items-center justify-center mb-4">
        <CheckCircle2 size={22} />
      </div>
      <h3 className="text-lg font-extrabold text-brand-dark mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-slate-600 leading-7">{copy}</p>
    </div>
  );
}

export default function GoogleStairLiftInstallationPage() {
  return (
    <main className="pb-20 md:pb-0 bg-white">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7fbff] via-white to-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-10 sm:py-14 md:py-20">
          <div className="grid lg:grid-cols-[1.05fr,0.95fr] gap-8 lg:gap-10 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs sm:text-sm font-extrabold text-brand-blue soft-card">
                <Home size={15} /> Stair Lift Installation Information
              </div>

              <h1 className="mt-5 text-[2.2rem] sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.02] text-brand-dark">
                Stair Lift Installation Options For Your Home
              </h1>

              <p className="mt-5 text-base sm:text-lg md:text-xl leading-8 text-slate-600 max-w-2xl mx-auto lg:mx-0">
                Learn about common stair lift types, installation factors, and how to check independent provider availability near you.
              </p>

              <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 soft-card max-w-2xl mx-auto lg:mx-0">
                <div className="grid sm:grid-cols-[auto,1fr] gap-4 items-center">
                  <CallButton className="w-full sm:w-auto">Call {siteConfig.phoneDisplay}</CallButton>
                  <div className="text-center sm:text-left">
                    <div className="text-sm font-extrabold text-brand-dark">Call center hours</div>
                    <div className="mt-1 text-xs sm:text-sm text-slate-600 leading-6">{siteConfig.hoursShort}</div>
                    <div className="mt-2 text-xs text-slate-500 leading-5">
                      Availability, pricing, and installation timelines vary by location and provider.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3 text-xs sm:text-sm text-slate-700 leading-6 max-w-2xl mx-auto lg:mx-0">
                <strong className="text-brand-dark">Transparency note:</strong> This website connects users with independent stair lift and home accessibility service providers. We do not directly install stair lifts or provide medical advice, healthcare services, or emergency assistance.
              </div>
            </div>

            <div className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-slate-200 bg-white soft-card">
              <img
                src="/images/stairlift-product.png"
                alt="Installed stair lift on residential stairs"
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="p-5 sm:p-6 grid sm:grid-cols-2 gap-3">
                {['Straight stairs', 'Curved stairs', 'Indoor options', 'Outdoor options'].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 border border-slate-200 p-3 text-sm font-bold text-slate-700">
                    <CheckCircle2 size={17} className="text-brand-blue mb-2" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="types" className="py-12 sm:py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-extrabold text-brand-blue soft-card">
              <Wrench size={16} /> Common Stair Lift Types
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-brand-dark">Types Of Stair Lift Options</h2>
            <p className="mt-4 text-slate-600 leading-8">
              Stair lift options may differ based on staircase shape, indoor or outdoor use, and provider availability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {types.map((item) => (
              <InfoCard key={item.title} title={item.title} copy={item.copy} />
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="grid lg:grid-cols-[0.95fr,1.05fr] gap-8 lg:gap-10 items-center">
            <div className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-slate-200 bg-white soft-card">
              <img
                src="/images/family-support.png"
                alt="Family support near a staircase with a stair lift"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-extrabold text-brand-blue soft-card">
                <ShieldCheck size={16} /> How Provider Connection Works
              </div>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-brand-dark">A Simple Way To Check Availability</h2>
              <p className="mt-4 text-slate-600 leading-8">
                A phone call can help users explain their staircase and discuss available provider options. This does not guarantee service availability.
              </p>

              <div className="mt-6 space-y-4">
                {process.map((item, index) => (
                  <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="h-9 w-9 rounded-xl bg-brand-blue text-white flex items-center justify-center font-extrabold shrink-0">
                      {index + 1}
                    </div>
                    <div className="font-bold text-slate-700 leading-6">{item}</div>
                  </div>
                ))}
              </div>

              <CallButton className="mt-7 w-full sm:w-auto">Call To Check Options</CallButton>
            </div>
          </div>
        </div>
      </section>

      <section id="cost-factors" className="py-12 sm:py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="grid lg:grid-cols-[0.85fr,1.15fr] gap-8 lg:gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-extrabold text-brand-blue soft-card">
                <Clock3 size={16} /> Pricing Information
              </div>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-brand-dark">Stair Lift Cost Factors</h2>
              <p className="mt-4 text-slate-600 leading-8">
                We do not provide fixed prices on this page because costs may vary by home, equipment, location, and provider.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {costFactors.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 soft-card flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-brand-blue shrink-0 mt-0.5" />
                  <div className="font-bold text-slate-700 leading-6">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-brand-navy text-white">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 text-center">
          <Phone size={38} className="mx-auto mb-4" />
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">Call To Discuss Stair Lift Installation Options</h2>
          <p className="mt-5 text-blue-100 leading-8 text-base sm:text-lg max-w-2xl mx-auto">
            Speak with a representative during call center hours to discuss staircase type, provider availability, and possible next steps.
          </p>
          <div className="mt-8">
            <CallButton light>Call {siteConfig.phoneDisplay}</CallButton>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Frequently Asked Questions</h2>
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
