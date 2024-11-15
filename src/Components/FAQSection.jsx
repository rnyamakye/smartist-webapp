import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4 z-10">
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
        "You can reach us through various social media platforms, contact my business number listed on the contact page, or send an email using the form provided on the contact page.",
    },
    {
      question: "How long does it take for me to get my commissioned art piece",
      answer:
        "Typically, we complete portrait commissions within three days. However, depending on the size and complexity of the portrait, the maximum completion time may extend to one week.",
    },
    {
      question: "How do I get the portrait once you're done making it?",
      answer:
        "Once your portrait is completed, it will be delivered directly to you using our reliable delivery services. The delivery will be tailored to your preferred location, ensuring that you receive your artwork promptly and securely.",
    },
    {
      question: "Do you do delivery?",
      answer:
        "Yes, we offer worldwide delivery for all our portraits, ensuring that your artwork reaches you no matter where you are located.",
    },
    {
      question: "Do you teach this craft to people who are willing to learn?",
      answer:
        "We offer comprehensive drawing instruction through my online courses and personalized one-on-one sessions at my studio in Kumasi. Whether you're a beginner looking to learn the basics or an experienced artist aiming to refine your skills, my courses are designed to meet your needs.",
    },
    {
      question: "Which days are you open for business",
      answer:
        "We operate every single day, ensuring that you can access our services whenever you need them.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 z-10">
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
