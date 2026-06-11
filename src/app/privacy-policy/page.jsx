import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { siteConfig } from '../../components/siteConfig';

export const metadata = { title: `Privacy Policy | ${siteConfig.name}` };

export default function PrivacyPolicy() {
  return (
    <main>
      <Header />
      <section className="max-w-4xl mx-auto px-4 py-14 prose prose-slate">
        <h1>Privacy Policy</h1>
        <p>Last updated: June 11, 2026</p>
        <p>{siteConfig.name} respects your privacy. This Privacy Policy explains how information may be collected and used when you visit this website or contact us.</p>
        <h2>Information We May Collect</h2>
        <p>We may collect information you provide directly, such as your name, phone number, email address, service interest, and any information shared during a call or contact request.</p>
        <h2>How Information May Be Used</h2>
        <p>Information may be used to connect you with independent stair lift or home accessibility service providers, respond to inquiries, improve website performance, and support advertising measurement.</p>
        <h2>Service Providers</h2>
        <p>We may share information with independent service providers, call centers, technology vendors, analytics providers, or advertising partners as needed to operate this website and connect users with available options.</p>
        <h2>Cookies and Tracking</h2>
        <p>This website may use cookies, pixels, analytics tools, or similar technologies to measure site activity and advertising performance.</p>
        <h2>Your Choices</h2>
        <p>You may choose not to provide personal information. You may also adjust browser settings to limit cookies.</p>
        <h2>Contact</h2>
        <p>For privacy-related questions, please contact us through the Contact page.</p>
      </section>
      <Footer />
    </main>
  );
}
