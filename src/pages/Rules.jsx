import React from "react";

const Rules = () => {
  return (
    <div className="w-11/12 md:w-8/12 mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Community Rules</h1>
      <p className="text-gray-700">
        To keep <span className="font-semibold">NodeTalk</span> safe and
        enjoyable for everyone, we have created the following rules. By using
        NodeTalk, you agree to follow these community guidelines.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Respect Others</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>No hate speech, harassment, or bullying.</li>
        <li>Respect different opinions, cultures, and backgrounds.</li>
        <li>Be kind and constructive in discussions.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">2. Content Guidelines</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>No spam, misleading, or fake content.</li>
        <li>Do not post offensive, violent, or adult material.</li>
        <li>Share only original or properly credited content.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">3. Security & Privacy</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Do not share personal information publicly.</li>
        <li>No attempts to hack, exploit, or misuse the platform.</li>
        <li>Report suspicious or abusive behavior to admins.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">4. Fair Use</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Do not create multiple fake accounts.</li>
        <li>Do not misuse tags or categories for attention.</li>
        <li>Use NodeTalk only for legal and ethical purposes.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">5. Consequences</h2>
      <p className="text-gray-700">
        Violating these rules may result in temporary or permanent account
        suspension. Severe violations may be reported to relevant authorities.
      </p>

      <h2 className="text-xl font-semibold mt-6">6. Reporting Issues</h2>
      <p className="text-gray-700">
        If you see content or behavior that breaks these rules, please report it
        to our team at{" "}
        <span className="font-semibold">support@nodetalk.com</span>.
      </p>

      <p className="text-gray-700 mt-6">
        ✅ Following these rules ensures that NodeTalk remains a positive and
        safe space for knowledge sharing and discussion.
      </p>
    </div>
  );
};

export default Rules;
