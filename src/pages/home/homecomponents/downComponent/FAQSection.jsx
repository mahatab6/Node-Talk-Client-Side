import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is NodeTalk?",
    answer: "NodeTalk is a community-driven platform where developers can share posts, discuss trending topics, and connect with other tech enthusiasts."
  },
  {
    question: "How do I create an account?",
    answer: "Click on the Sign Up button, provide your details, and you’ll become a part of the NodeTalk community instantly."
  },
  {
    question: "Is NodeTalk free to use?",
    answer: "Yes! NodeTalk is completely free. However, you can upgrade to a premium membership for exclusive features."
  },
  {
    question: "Can I post my own articles?",
    answer: "Absolutely! Once logged in, you can create and publish your own articles, share insights, and contribute to the community."
  },
  {
    question: "How do I get premium membership?",
    answer: "Go to the Membership page and choose a plan that suits you best. You’ll unlock premium benefits right away."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto bg-secondary p-10 rounded-2xl">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
        ❓ Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 focus:outline-none"
            >
              {faq.question}
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
