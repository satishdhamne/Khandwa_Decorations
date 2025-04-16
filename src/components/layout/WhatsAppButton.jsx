// components/layout/WhatsAppButton.js
import { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  // Show button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsTooltipVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Show tooltip after 3 seconds if button is visible
    const tooltipTimer = setTimeout(() => {
      if (isVisible) setIsTooltipVisible(true);
    }, 3000);

    // Hide tooltip after 10 seconds
    const hideTooltipTimer = setTimeout(() => {
      setIsTooltipVisible(false);
    }, 10000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, [isVisible]);

  const closeTooltip = () => setIsTooltipVisible(false);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isTooltipVisible && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 mb-2 w-56 text-sm">
          <button
            onClick={closeTooltip}
            className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
            aria-label="Close tooltip"
          >
            <FaTimes size={12} />
          </button>
          <p>Have questions? Chat with us now for quick answers!</p>
        </div>
      )}

      <a
        href="https://wa.me/911234567890?text=Hi!%20I'm%20interested%20in%20your%20decoration%20services."
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white" size={28} />
      </a>
    </div>
  );
}

export default WhatsAppButton;
