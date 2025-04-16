// components/contact/FAQ.js
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqItems = [
  {
    question: "How far in advance should I book your decoration services?",
    answer:
      "We recommend booking at least 2-3 weeks in advance for regular events like birthdays and anniversaries. For weddings and larger events, 1-2 months advance booking is advisable to ensure availability and proper planning.",
  },
  {
    question: "Do you provide decoration services outside the city?",
    answer:
      "Yes, we offer our decoration services within a 50km radius of the city center. For locations beyond this range, additional travel charges may apply. Please contact us with your specific location for a customized quote.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "For cancellations made 7 or more days before the event, we offer a full refund of any advance payment. Cancellations made 3-6 days before receive a 50% refund. For cancellations less than 3 days before the event, we cannot offer a refund due to materials already purchased and scheduling commitments.",
  },
  {
    question: "Do you require an advance payment?",
    answer:
      "Yes, we require a 50% advance payment to confirm your booking. This helps us secure the date and purchase necessary materials. The remaining balance is due on the day of the event before setup begins.",
  },
  {
    question: "Can I customize the decoration packages?",
    answer:
      "Absolutely! All our decoration packages can be customized according to your preferences, theme, and budget. Please share your specific requirements during consultation, and we'll create a personalized decoration plan for your event.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqItems.map((item, index) => (
            <div key={index} className="py-4">
              <button
                className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="text-lg">{item.question}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="flex-shrink-0 ml-2 text-pink-600" />
                ) : (
                  <FaChevronDown className="flex-shrink-0 ml-2 text-gray-400" />
                )}
              </button>

              <div
                className={`mt-2 transition-all duration-300 overflow-hidden ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
