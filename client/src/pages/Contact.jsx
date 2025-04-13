// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-red-600 mb-6">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <form className="space-y-4 bg-white p-6 rounded-xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-200"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-200"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-200"
          ></textarea>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Send Message
          </button>
        </form>

        <div className="space-y-4 text-gray-700">
          <h3 className="text-xl font-semibold text-blue-700">Get in Touch</h3>
          <p>Have questions or feedback? We'd love to hear from you!</p>
          <div>
            <strong>Address:</strong> 123 Food Street, Islamabad
          </div>
          <div>
            <strong>Email:</strong> support@foodgraan.com
          </div>
          <div>
            <strong>Phone:</strong> +92 300 1234567
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
