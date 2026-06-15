"use client";

import { useMemo, useState } from 'react';
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

function OptionButton({ children, isSelected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-full flex items-center justify-between gap-3 rounded-2xl border px-4 py-4 text-left soft-card transition-all ${
        isSelected
          ? 'border-brand-blue bg-blue-50 ring-2 ring-brand-blue/10'
          : 'border-slate-200 bg-white hover:border-brand-blue hover:bg-blue-50/40'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`h-8 w-8 rounded-xl flex items-center justify-center shrink-0 ${
            isSelected ? 'bg-brand-blue text-white' : 'bg-brand-light text-brand-blue'
          }`}
        >
          <CheckCircle2 size={18} />
        </div>
        <span className="font-bold text-slate-700">{children}</span>
      </div>
      <span className={`text-sm font-extrabold ${isSelected ? 'text-brand-blue' : 'text-slate-400'}`}>
        {isSelected ? 'Selected' : 'Select'}
      </span>
    </button>
  );
}

export default function CheckOptionsPage() {
  const [staircase, setStaircase] = useState('');
  const [installLocation, setInstallLocation] = useState('');

  const progress = useMemo(() => {
    if (staircase && installLocation) return 100;
    if (staircase) return 66;
    return 33;
  }, [staircase, installLocation]);

  const isComplete = staircase && installLocation;

  const handleStaircaseSelect = (value) => {
    setStaircase(value);
    setTimeout(() => {
      document.getElementById('step-2')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleInstallSelect = (value) => {
    setInstallLocation(value);
    setTimeout(() => {
      document.getElementById('final-step')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

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
                Select your staircase type and installation location, then call to discuss available stair lift provider options for your home.
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
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-3 text-sm font-bold text-slate-200 mb-2">
                    <span>Options check progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-brand-blue transition-all duration-300" style={{ width: `${progress}%` }} />
                  </div>
                </div>

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

      <section id="step-1" className="py-12 sm:py-16 bg-[#f8fafc] scroll-mt-28">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-8 lg:gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-extrabold text-brand-blue soft-card">
                <Wrench size={16} /> Step 1
              </div>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-brand-dark">What Type Of Staircase Do You Have?</h2>
              <p className="mt-4 text-slate-600 leading-8">
                Select one option below. After selecting, the page will move to Step 2.
              </p>
            </div>

            <div className="space-y-3">
              {staircaseOptions.map((item) => (
                <OptionButton
                  key={item}
                  isSelected={staircase === item}
                  onClick={() => handleStaircaseSelect(item)}
                >
                  {item}
                </OptionButton>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="step-2" className="py-12 sm:py-16 bg-white scroll-mt-28">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-8 lg:gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-extrabold text-brand-blue soft-card">
                <Home size={16} /> Step 2
              </div>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-brand-dark">Where Would The Stair Lift Be Installed?</h2>
              <p className="mt-4 text-slate-600 leading-8">
                Select the closest option. After selecting, the final call step will appear.
              </p>
            </div>

            <div className="space-y-3">
              {installOptions.map((item) => (
                <OptionButton
                  key={item}
                  isSelected={installLocation === item}
                  onClick={() => handleInstallSelect(item)}
                >
                  {item}
                </OptionButton>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="final-step" className="py-12 sm:py-16 bg-brand-navy text-white scroll-mt-28">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 text-center">
          <Clock3 size={38} className="mx-auto mb-4" />
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            {isComplete ? 'Your Basic Options Check Is Ready' : 'Final Step: Call To Check Local Provider Options'}
          </h2>
          <p className="mt-5 text-blue-100 leading-8 text-base sm:text-lg max-w-2xl mx-auto">
            A representative can help discuss your staircase type, location, and available provider options.
          </p>

          {isComplete && (
            <div className="mt-7 max-w-2xl mx-auto rounded-3xl bg-white/10 border border-white/10 p-5 text-left">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wide font-bold text-blue-100">Selected staircase</div>
                  <div className="mt-1 font-extrabold text-white">{staircase}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide font-bold text-blue-100">Install location</div>
                  <div className="mt-1 font-extrabold text-white">{installLocation}</div>
                </div>
              </div>
            </div>
          )}

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
