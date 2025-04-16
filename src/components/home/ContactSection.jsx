import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-[#f9f9f9] px-6 py-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600">
          We'd love to hear about your event. Fill out the form and we’ll get
          back to you!
        </p>
      </div>

      <form className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <textarea
          rows="5"
          placeholder="Your Message"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
