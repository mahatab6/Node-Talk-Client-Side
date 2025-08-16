import React from "react";

const Privacy = () => {
  return (
    <div className="w-11/12 md:w-8/12 mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="">
        Welcome to <span className="font-semibold">NodeTalk</span>. Your
        privacy is important to us. This Privacy Policy explains how we collect,
        use, and protect your personal information when you use our platform.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
      <ul className="list-disc list-inside  space-y-1">
        <li>Account information (name, email, profile picture).</li>
        <li>Posts, comments, and tags you share on NodeTalk.</li>
        <li>Usage data (IP address, browser type, device info, cookies).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">2. How We Use Your Data</h2>
      <ul className="list-disc list-inside  space-y-1">
        <li>To provide and improve our services.</li>
        <li>To personalize your experience.</li>
        <li>To send important updates or notifications.</li>
        <li>To ensure platform security and prevent abuse.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">3. Sharing of Information</h2>
      <p className="">
        We do not sell or rent your personal data. However, we may share
        information with:
      </p>
      <ul className="list-disc list-inside  space-y-1">
        <li>Service providers (e.g., hosting, analytics, payment gateways).</li>
        <li>Law enforcement, if required by applicable law.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">4. Cookies & Tracking</h2>
      <p className="">
        NodeTalk uses cookies and similar technologies to enhance user
        experience, analyze traffic, and improve services. You can control
        cookies through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6">5. Data Security</h2>
      <p className="">
        We use industry-standard measures to protect your data. However, no
        online service is 100% secure. Use NodeTalk responsibly.
      </p>

      <h2 className="text-xl font-semibold mt-6">6. Your Rights</h2>
      <ul className="list-disc list-inside  space-y-1">
        <li>Access, update, or delete your account information.</li>
        <li>Opt-out of marketing emails.</li>
        <li>Request data export (where applicable).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">7. Third-Party Links</h2>
      <p className="">
        Our platform may contain links to third-party websites. We are not
        responsible for their privacy practices. Please review their policies
        separately.
      </p>

      <h2 className="text-xl font-semibold mt-6">8. Changes to This Policy</h2>
      <p className="">
        We may update this Privacy Policy from time to time. Any changes will be
        posted here with an updated date.
      </p>

      <h2 className="text-xl font-semibold mt-6">9. Contact Us</h2>
      <p className="">
        If you have questions about this Privacy Policy, please contact us at:{" "}
        <span className="font-semibold">support@nodetalk.com</span>
      </p>
    </div>
  );
};

export default Privacy;
