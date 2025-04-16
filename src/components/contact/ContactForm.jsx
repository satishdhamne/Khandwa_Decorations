// components/contact/ContactForm.js
import { useState } from "react";
import { useLocation } from "react-router-dom";

function ContactForm() {
  const location = useLocation();
  const preselectedService = location.state?.service || "";

  const [formVisible, setFormVisible] = useState(true);
  const [directContact, setDirectContact] = useState(false);

  const toggleView = () => {
    setFormVisible(!formVisible);
    setDirectContact(!directContact);
  };

  return (
    <div className="contact-form-section py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Toggle buttons */}
          <div className="flex rounded-lg overflow-hidden mb-8 shadow-sm">
            <button
              className={`flex-1 py-3 px-4 text-center font-medium ${
                formVisible
                  ? "bg-pink-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => {
                if (!formVisible) toggleView();
              }}
            >
              Inquiry Form
            </button>
            <button
              className={`flex-1 py-3 px-4 text-center font-medium ${
                directContact
                  ? "bg-pink-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => {
                if (!directContact) toggleView();
              }}
            >
              Direct Contact
            </button>
          </div>

          {/* Form Section */}
          {formVisible && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 bg-pink-50">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Send Us an Inquiry
                </h2>
                <p className="text-gray-600">
                  Fill out this form and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <div className="google-form p-6">
                <iframe
                  src={`https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true&entry.123456789=${encodeURIComponent(
                    preselectedService
                  )}`}
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Contact Form"
                >
                  Loading form...
                </iframe>
              </div>
            </div>
          )}

          {/* Direct Contact Section */}
          {directContact && (
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 bg-green-50">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Contact Us Directly
                </h2>
                <p className="text-gray-600">
                  Reach out to us through any of these channels:
                </p>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Email Us</h3>
                    <a
                      href="mailto:info@celebrationdecorators.com"
                      className="text-blue-600 hover:underline"
                    >
                      info@celebrationdecorators.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Call Us</h3>
                    <a
                      href="tel:+911234567890"
                      className="text-blue-600 hover:underline"
                    >
                      +91 123 456 7890
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Available 9 AM - 8 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">WhatsApp</h3>
                    <a
                      href="https://wa.me/911234567890"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat with us on WhatsApp
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Quick responses, available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
