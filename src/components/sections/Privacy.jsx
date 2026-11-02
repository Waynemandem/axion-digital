import { siteConfig, CONSENT_KEY } from "../../data";

export default function Privacy() {
  const reset = () => {
    localStorage.removeItem(CONSENT_KEY);
    window.location.reload();
  };
  return (
    <section className="privacy" id="privacy">
      <div className="wrap">
        <h2>Privacy and cookies</h2>
        <p className="meta">Last updated 27 October 2026</p>

        <h3>Who we are</h3>
        <p>Axion Digital, Lagos, Nigeria. We decide how your information is used. Contact us at {siteConfig.email}.</p>

        <h3>What we collect</h3>
        <p>What you type into our contact form (your business type and ad budget range) and any messages you send us on WhatsApp. The form only prepares a message. It reaches us when you send it in WhatsApp.</p>

        <h3>Cookies and analytics</h3>
        <p>We set no tracking cookies unless you click Accept. If you accept, we may use Meta's advertising tools and analytics to measure how our site and ads perform. If you decline, none of these load.</p>

        <h3>Who else sees your data</h3>
        <p>WhatsApp and Meta (when you message us or accept tracking), and Google, which serves our fonts.</p>

        <h3>Why we use it</h3>
        <p>To reply to your enquiry and to learn which of our pages and ads work, based on your consent or our legitimate interest in running our business.</p>

        <h3>Your rights</h3>
        <p>You can ask to see, correct or delete your information, or withdraw consent at any time, by emailing us. You can also complain to the Nigeria Data Protection Commission.</p>

        <button className="btn btn-alt" onClick={reset}>Change my cookie choice</button>
      </div>
    </section>
  );
}