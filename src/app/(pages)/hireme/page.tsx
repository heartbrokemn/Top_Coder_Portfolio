"use client";

import { useState } from "react";

export default function HireMePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, service, message } = formData;

    const whatsAppMessage = `Hello Shoaib!%0A%0AMy Name: ${name}%0AEmail: ${email}%0AService: ${service}%0ADetails: ${message}`;
    const whatsAppURL = `https://wa.me/923292006842?text=${whatsAppMessage}`;

    window.open(whatsAppURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#000116] text-white p-6">
      <h1 className="text-3xl text-center font-bold text-purple-500 mb-6">
        Hire Me
      </h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 bg-gray-900 p-6 rounded-xl shadow-xl">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-800 text-white"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-gray-800 text-white"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <select
          className="w-full p-3 rounded bg-gray-800 text-white"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          required
        >
          <option value="">Select Service</option>
          <option value="Web Development">Web Development</option>
          <option value="Graphic Designing">Graphic Designing</option>
        </select>
        <textarea
          placeholder="Describe your project..."
          className="w-full p-3 rounded bg-gray-800 text-white"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-3 rounded font-semibold hover:bg-purple-700 transition"
        >
          Send on WhatsApp
        </button>
      </form>
    </div>
  );
}
