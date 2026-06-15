import {
  CheckCircle2,
  Clock3,
  FileText,
  Home,
  Phone,
  Ruler,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { siteConfig } from '../../components/siteConfig';

export const metadata = {
  title: `Stair Lift Installation Guide | ${siteConfig.name}`,
  description:
    'Read a practical guide to stair lift installation, staircase types, cost factors, preparation steps, provider questions, and service availability considerations.',
};

const types = [
  {
    title: 'Straight Stair Lifts',
    copy:
      'A straight stair lift is typically used on a single, uninterrupted staircase that does not include a curve or mid-stair landing. The rail generally follows the straight stair line from one level to another.',
  },
  {
    title: 'Curved Stair Lifts',
    copy:
      'Curved stair lifts may be considered for staircases with turns, corners, landings, or custom shapes. These projects often require more detailed measurements and provider review.',
  },
  {
    title: 'Indoor Stair Lifts',
    copy:
      'Indoor models are intended for interior stairways. Layout, wall clearance, stair width, electrical access, and where the lift parks can all affect the installation plan.',
  },
  {
    title: 'Outdoor Stair Lifts',
    copy:
      'Outdoor options may be available for exterior steps, porches, decks, or garage entries. Weather exposure, surface condition, and provider service area can affect availability.',
  },
];

const process = [
  'Review the staircase shape, number of steps, landing areas, and where the chair may need to park.',
  'Discuss whether the installation is for an indoor stairway, outdoor entry, garage access, or another home area.',
  'Confirm whether independent providers may be available for the requested location and project type.',
  'Ask about measurement, installation requirements, timing, equipment options, and any next steps suggested by the provider.',
];

const costFactors = [
  'Straight, curved, multi-landing, or custom staircase layout',
  'Indoor or outdoor installation environment',
  'Stair width, railing location, doorways, and nearby walkways',
  'Electrical access and charging location requirements',
  'Equipment type, rail configuration, and selected features',
  'Local provider availability, service area, and installation schedule',
  'Condition of the stairs, wall, flooring, and landing surfaces',
  'Removal, replacement, or future service needs if applicable',
];

const prepChecklist = [
  'Count the steps and note whether the staircase is straight, curved, or includes a landing.',
  'Check whether there is a doorway, hallway, or furniture close to the top or bottom of the stairs.',
  'Look for nearby power outlets and any areas where a charging point may be practical.',
  'Measure approximate stair width if possible, but do not rely on rough measurements for final planning.',
  'Think about whether the lift should park at the top, bottom, or away from the walking path.',
  'Prepare photos of the staircase if a provider asks for them during the review process.',
];

const providerQuestions = [
  'Do you work with straight, curved, indoor, or outdoor stair lift installations?',
  'What measurements or photos are usually needed before a recommendation is made?',
  'What can affect the installation timeline for this type of staircase?',
  'Are there clearance or electrical requirements I should understand before scheduling?',
  'What service or support options may be available after installation?',
  'Are there any location-based limitations or provider availability requirements?',
];

const faqs = [
  [
    'What affects stair lift installation pricing?',
    'Pricing can vary based on staircase shape, rail type, equipment selection, installation requirements, home layout, electrical access, location, and provider availability. A curved staircase may require a different review than a straight staircase.',
  ],
  [
    'Is a stair lift attached to the wall or the stairs?',
    'Many stair lift systems are commonly mounted to the stair treads rather than directly to the wall, but installation details depend on the equipment and provider assessment.',
  ],
  [
    'Can stair lifts work on narrow staircases?',
    'Some staircases may have enough clearance while others may not. Stair width, rail placement, landings, doors, and walking space all matter. A provider may need measurements or photos to review the layout.',
  ],
  [
    'What is the difference between straight and curved stair lifts?',
    'Straight stair lifts are generally for staircases without turns. Curved stair lifts are designed around turns, landings, or custom stair shapes and may require more detailed planning.',
  ],
  [
    'Can outdoor stairs be reviewed for stair lift options?',
    'Outdoor stair lift options may be available in some areas. Weather exposure, stair condition, surface materials, and service area can affect whether a provider can help.',
  ],
  [
    'Is this website a stair lift installer?',
    'No. This website provides general stair lift installation information and connects consumers with independent stair lift and home accessibility service providers. We do not directly install stair lifts.',
  ],
  [
    'Does calling guarantee service availability?',
    'No. Calling this number does not guarantee service availability. Availability, pricing, installation timelines, and service options vary by location and provider.',
  ],
  [
    'Does this page provide medical advice?',
    'No. This page is for general home accessibility and stair lift installation information only. It does not provide medical advice, healthcare services, or emergency assistance.',
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

function SectionLabel({ icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-extrabold text-brand-blue soft-card">
      {icon} {children}
    </div>
  );
}

export default function StairLiftInstallationPage() {
  return (
    <main className="pb-20 md:pb-0 bg-white">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7fbff] via-white to-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-10 sm:py-14 md:py-20">
          <div className="grid lg:grid-cols-[1.05fr,0.95fr] gap-8 lg:gap-10 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs sm:text-sm font-extrabold text-brand-blue soft-card">
                <Home size={15} /> Stair Lift Installation Guide
              </div>

              <h1 className="mt-5 text-[2.15rem] sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.02] text-brand-dark">
                Stair Lift Installation Information And Provider Options
              </h1>

              <p className="mt-5 text-base sm:text-lg md:text-xl leading-8 text-slate-600 max-w-2xl mx-auto lg:mx-0">
                Use this guide to understand stair lift types, common installation steps, cost factors, preparation details, and questions to ask before speaking with an independent provider.
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
                <strong className="text-brand-dark">Disclosure:</strong> This website provides general information and can connect users with independent stair lift and home accessibility service providers. We do not directly install stair lifts or provide medical advice, healthcare services, or emergency assistance.
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

      <section id="overview" className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-3 sm:px-4">
          <div className="rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8 soft-card">
            <SectionLabel icon={<FileText size={16} />}>Installation Overview</SectionLabel>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-brand-dark">What Stair Lift Installation Usually Involves</h2>
            <div className="mt-5 space-y-4 text-slate-600 leading-8">
              <p>
                A stair lift installation is usually planned around the physical layout of the staircase. A provider may review whether the stairs are straight or curved, where the lift would start and stop, how much walking space remains, and whether nearby doors, hallways, or landings affect the installation plan.
              </p>
              <p>
                The process is not the same for every home. A simple straight staircase may be reviewed differently than a staircase with a turn, multiple landings, or an outdoor entry. Because of these differences, this page does not provide fixed pricing or guaranteed timelines.
              </p>
              <p>
                The goal of this page is to give users helpful background information before they contact a provider. A phone call can help clarify basic details, but any final recommendation, price, or installation plan must come from the independent provider reviewing the specific home and staircase.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="types" className="py-12 sm:py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionLabel icon={<Wrench size={16} />}>Common Stair Lift Types</SectionLabel>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-brand-dark">Types Of Stair Lift Options</h2>
            <p className="mt-4 text-slate-600 leading-8">
              Stair lift options may differ based on staircase shape, indoor or outdoor use, available clearance, and provider service area.
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
                alt="Residential staircase and stair lift planning"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>

            <div>
              <SectionLabel icon={<ShieldCheck size={16} />}>Provider Connection Process</SectionLabel>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-brand-dark">A Simple Way To Discuss Availability</h2>
              <p className="mt-4 text-slate-600 leading-8">
                A representative can help collect basic project details and discuss whether independent provider options may be available. This does not guarantee service availability or a specific installation timeline.
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
              <SectionLabel icon={<Clock3 size={16} />}>Cost Factors</SectionLabel>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-brand-dark">What Can Affect Stair Lift Cost?</h2>
              <p className="mt-4 text-slate-600 leading-8">
                A stair lift project can vary from home to home. Costs may depend on the stair shape, rail requirements, provider availability, equipment type, and installation conditions. This page does not advertise a fixed price.
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

      <section id="measurements" className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <SectionLabel icon={<Ruler size={16} />}>Before You Call</SectionLabel>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-brand-dark">Helpful Details To Prepare</h2>
              <p className="mt-4 text-slate-600 leading-8">
                Exact measurements should be handled by a qualified provider when needed. Still, preparing a few basic details can make the first conversation easier and more useful.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 sm:p-6 soft-card">
              <div className="space-y-3">
                {prepChecklist.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-white border border-slate-200 p-4">
                    <CheckCircle2 size={19} className="text-brand-blue shrink-0 mt-0.5" />
                    <p className="text-slate-700 leading-6 font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="questions" className="py-12 sm:py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionLabel icon={<FileText size={16} />}>Provider Questions</SectionLabel>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-brand-dark">Questions To Ask Before Scheduling</h2>
            <p className="mt-4 text-slate-600 leading-8">
              Asking clear questions can help users understand service availability, installation requirements, and possible next steps without relying on assumptions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {providerQuestions.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-5 soft-card">
                <p className="font-extrabold text-brand-dark leading-7">{item}</p>
              </div>
            ))}
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
            <p className="mt-4 text-slate-600 leading-8">
              These answers are general information only. Final service options depend on provider review and location.
            </p>
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
            <strong className="text-brand-dark">Disclaimer:</strong> This website provides general information and connects consumers with independent stair lift and home accessibility service providers. We do not directly provide stair lift installation services, medical advice, healthcare services, or emergency assistance. Availability, pricing, installation timelines, and service options vary by location and provider. Pricing may depend on staircase type, equipment, installation requirements, location, and provider. Calling this number does not guarantee service availability.
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
