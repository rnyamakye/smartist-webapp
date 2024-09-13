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
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && <div className="mt-2 text-gray-600">{answer}</div>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What types of pencils are best for beginners?",
      answer:
        "For beginners, we recommend starting with a set of graphite pencils ranging from 2H to 6B. This gives you a good range of hardness and softness to experiment with different shading techniques.",
    },
    {
      question: "How do I prevent smudging in my pencil drawings?",
      answer:
        "To prevent smudging, you can use a piece of paper under your hand while drawing, spray your finished work with a fixative, or use harder pencils (H range) which are less prone to smudging.",
    },
    {
      question: "What paper is best for pencil art?",
      answer:
        "The best paper for pencil art depends on your style, but generally, a medium texture paper works well. For detailed work, try smooth bristol board, and for more textured drawings, consider cold-pressed watercolor paper.",
    },
    {
      question: "How often should I sharpen my pencils?",
      answer:
        "It's best to keep your pencils sharp for precise lines and details. Sharpen them whenever the point becomes dull. Some artists prefer to rotate the pencil as they draw to maintain a sharp edge longer.",
    },
    {
      question: "Can I erase pencil marks completely?",
      answer:
        "Most pencil marks can be erased, especially if you're using a good quality eraser. Kneaded erasers are great for lifting graphite without damaging the paper. However, very dark or heavily layered areas might leave some residue.",
    },
    {
      question: "How do I achieve different textures in my pencil drawings?",
      answer:
        "You can achieve different textures by varying your pressure, using different pencil grades, and employing techniques like hatching, cross-hatching, stippling, and blending. Experimenting with different paper textures can also add interesting effects.",
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
