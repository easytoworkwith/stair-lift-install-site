import { CheckCircle, Clock, Home, Phone, ShieldCheck, Wrench } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { siteConfig } from '../components/siteConfig';

const services = [
  {
    title: 'Straight Stair Lift Installation',
    copy: 'For standard staircases with a direct path between floors.',
  },
  {
    title: 'Curved Stair Lift Options',
    copy: 'For staircases with turns, landings, or custom layouts.',
  },
  {
    title: 'Indoor Stair Lifts',
    copy: 'Home accessibility options for interior stairways.',
  },
  {
    title: 'Outdoor Stair Lifts',
    copy: 'Weather-ready options may be available in select areas.',
  },
  {
    title: 'Stair Lift Replacement',
    copy: 'Discuss replacement options for older or existing stair lifts.',
  },
  {
    title: 'Stair Lift Consultation',
    copy: 'Call to review your home setup and available provider options.',
  },
];

const faqs = [
  ['How much does stair lift installation cost?', 'Costs can vary based on staircase type, home layout, equipment, installation requirements, and provider availability. Call to discuss available options.'],
  ['Can providers help with curved stairs?', 'Some providers may offer curved stair lift options depending on your staircase and location. Availability varies by provider.'],
  ['Do providers install outdoor stair lifts?', 'Outdoor stair lift options may be available in some areas. A representative can help check service options near you.'],
  ['Is this website a stair lift company?', 'No. This website connects consumers with independent stair lift and home accessibility service providers. We do not directly install stair lifts.'],
];

function CallButton({ children = 'Call Now' }) {
  return (
    <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-7 py-4 rounded-full font-bold text-lg hover:opacity-90 call-shadow transition-opacity">
      <Phone size={22} /> {children}
    </a>
  );
}

function SectionImage({ src, alt, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg ${className}`}>
      <img src={src} alt={alt} className="block h-full w-full object-cover" />
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-light via-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-brand-navy mb-5">
              <Home size={16} /> Home Accessibility Support
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-brand-dark leading-[1.05] mb-5">
              Connect With Stair Lift Installation Providers Near You
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-8 mb-8">
              Call to learn about available stair lift installation options for your home and get connected with independent local providers.
            </p>
            <div className="mb-7">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <CallButton>Call {siteConfig.phoneDisplay}</CallButton>
                <div className="rounded-2xl bg-white border border-blue-100 px-5 py-4 shadow-sm">
                  <div className="text-xs uppercase tracking-wide font-bold text-brand-blue mb-1">Call Center Hours</div>
                  <div className="text-sm md:text-base font-semibold text-slate-700">{siteConfig.hoursShort}</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white/80 border border-slate-200 shadow-sm p-5 mb-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {['Local provider connection', 'Options for different stair layouts', 'Real call support', 'Availability varies by location'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle size={19} className="text-brand-blue shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-500">Service availability, pricing, and installation timelines vary by location and provider.</p>
          </div>

          <div className="relative">
            <SectionImage src="/images/hero-stairlift.png" alt="Older adult using a stair lift in a bright home interior" className="aspect-[4/3]" />
            <div className="absolute -bottom-5 left-6 right-6 rounded-2xl bg-white border border-slate-200 shadow-xl p-4 hidden md:flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wide text-brand-blue">Speak With A Representative</div>
                <div className="font-extrabold text-brand-dark">{siteConfig.phoneDisplay}</div>
              </div>
              <a href={`tel:${siteConfig.phoneTel}`} className="bg-brand-blue text-white rounded-full px-5 py-3 font-bold text-sm hover:opacity-90">Call Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <SectionImage src="/images/family-support.png" alt="Older adult with caregiver beside a stair lift in a home" className="aspect-[4/3]" />
          <div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <ShieldCheck className="text-brand-blue mb-4" size={34} />
                <h3 className="text-xl font-bold mb-2">Provider Connection</h3>
                <p className="text-slate-600 leading-7">Get connected with independent providers who may serve your area.</p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <Wrench className="text-brand-blue mb-4" size={34} />
                <h3 className="text-xl font-bold mb-2">Installation Options</h3>
                <p className="text-slate-600 leading-7">Discuss straight, curved, indoor, or outdoor stair lift options based on your home setup.</p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <Clock className="text-brand-blue mb-4" size={34} />
                <h3 className="text-xl font-bold mb-2">Call Support</h3>
                <p className="text-slate-600 leading-7">Speak with a representative during call center hours to check availability.</p>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 md:p-8">
              <h2 className="text-3xl font-extrabold text-brand-dark mb-4">A Simple Way To Explore Stair Lift Options</h2>
              <p className="text-slate-700 leading-8 mb-4">
                If you are looking for stair lift installation help, a call can be the fastest way to discuss your staircase type, home layout, and available provider options.
              </p>
              <p className="text-slate-700 leading-8">
                This website is designed to help homeowners, family members, and caregivers connect with independent providers who may offer stair lift and accessibility solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-18 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-bold text-brand-blue mb-4 shadow-sm">
              <Wrench size={16} /> Installation Options
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4">Stair Lift Installation Services</h2>
            <p className="text-lg text-slate-700 leading-8">Service options may vary by location and provider. Call to check what is available near you.</p>
          </div>

          <div className="grid lg:grid-cols-[0.95fr,1.05fr] gap-8 items-stretch">
            <div className="relative overflow-hidden rounded-3xl shadow-xl border border-slate-200 min-h-[420px]">
              <img src="/images/stairlift-product.png" alt="Installed stair lift on a residential staircase" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <h3 className="text-2xl font-extrabold mb-2">Home Accessibility Starts With The Right Setup</h3>
                <p className="text-blue-50 leading-7">Speak with a representative about your staircase type, layout, and available provider options.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={service.title} className="group bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-2xl bg-brand-light text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <CheckCircle size={22} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-brand-blue mb-1">Option {index + 1}</div>
                      <h3 className="text-lg font-extrabold text-brand-dark mb-2">{service.title}</h3>
                      <p className="text-sm text-slate-600 leading-6">{service.copy}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="sm:col-span-2 rounded-2xl bg-brand-navy text-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-extrabold mb-1">Not sure which option fits?</h3>
                  <p className="text-blue-100 text-sm leading-6">Call to discuss your staircase and check local provider availability.</p>
                </div>
                <CallButton>Call Now</CallButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark text-center mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ['1', 'Call Us', 'Tap the call button and speak with a representative.'],
              ['2', 'Share Your Home Setup', 'Explain your staircase type and installation needs.'],
              ['3', 'Get Connected', 'Connect with available independent providers when possible.'],
            ].map(([num, title, copy]) => (
              <div key={num} className="text-center p-7 rounded-2xl bg-brand-light border border-blue-100">
                <div className="w-12 h-12 mx-auto rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xl mb-4">{num}</div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-slate-600 leading-7">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Call To Check Stair Lift Installation Availability</h2>
            <p className="text-blue-100 text-lg leading-8 mb-7">Speak with a representative about available stair lift options for your home.</p>
            <CallButton>Call {siteConfig.phoneDisplay}</CallButton>
          </div>
          <SectionImage src="/images/stairlift-product.png" alt="Stair lift installed in a clean home interior" className="aspect-[4/3] max-w-xl lg:ml-auto" />
        </div>
      </section>

      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(([q, a]) => (
              <div key={q} className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                <h3 className="text-lg font-bold text-brand-dark mb-2">{q}</h3>
                <p className="text-slate-600 leading-7">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-7">
            <h2 className="text-2xl font-bold text-slate-700 mb-5">Call Center Hours</h2>
            <div className="space-y-2 text-lg text-slate-600">
              {siteConfig.hoursFull.map(([day, time]) => (
                <p key={day}>{day}: <strong>{time}</strong></p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 text-sm text-slate-600 leading-7">
            <strong className="text-brand-dark">Disclaimer:</strong> This website connects consumers with independent stair lift and home accessibility service providers. We do not directly provide stair lift installation services. Availability, pricing, installation timelines, and service options vary by location and provider. Calling this number does not guarantee that service is available in your area.
          </div>
        </div>
      </section>

      <Footer />

      <a href={`tel:${siteConfig.phoneTel}`} className="fixed bottom-4 left-4 right-4 md:hidden bg-brand-blue text-white py-4 rounded-full text-center font-bold call-shadow z-50">
        Call Now: {siteConfig.phoneDisplay}
      </a>
    </main>
  );
}
