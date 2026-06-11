import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { siteConfig } from '../../components/siteConfig';

export const metadata = { title: `Terms & Conditions | ${siteConfig.name}` };

export default function Terms() {
  return (
    <main>
      <Header />
      <section className="max-w-4xl mx-auto px-4 py-14 prose prose-slate">
        <h1>Terms & Conditions</h1>
        <p>Last updated: June 11, 2026</p>
        <p>By using this website, you agree to these Terms & Conditions.</p>
        <h2>Website Role</h2>
        <p>{siteConfig.name} is a connection service. We do not directly provide stair lift installation, repair, replacement, or home accessibility services.</p>
        <h2>Independent Providers</h2>
        <p>Service providers are independent third parties. Availability, pricing, installation timelines, service areas, and qualifications vary by provider and location.</p>
        <h2>No Guarantee</h2>
        <p>We do not guarantee that service is available in your area, that a provider will accept your request, or that any specific pricing or installation timeline will apply.</p>
        <h2>User Responsibility</h2>
        <p>You are responsible for reviewing provider details, asking questions, and deciding whether to purchase any service or product.</p>
        <h2>Changes</h2>
        <p>We may update these Terms & Conditions from time to time.</p>
      </section>
      <Footer />
    </main>
  );
}
