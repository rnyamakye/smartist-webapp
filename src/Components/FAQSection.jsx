import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500 transition-all duration-300 ease" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 transition-all duration-300 ease" />
        )}
      </button>
      <div
        className={`mt-2 text-[15px] text-black/60 transition-all duration-500 ease ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          overflow: "hidden",
        }}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I get in touch with you to commission a portrait?",
      answer:
        "You can reach me through various social media platforms, contact my business number listed on the contact page, or send an email using the form provided on the contact page.",
    },
    {
      question: "How long does it take for me to get my commissioned art piece",
      answer:
        "",
    },
    {
      question: "How do I get the portrait once you're done making it?",
      answer:
        "",
    },
    {
      question: "Do you do delivery?",
      answer:
        "",
    },
    {
      question: "Do you teach this craft to people who are willing to learn?",
      answer:
        "",
    },
    {
      question: "Which days are you open for business",
      answer:
        "",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
