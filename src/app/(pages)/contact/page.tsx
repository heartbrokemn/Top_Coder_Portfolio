"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_p3k5i0p",     // 👉 Replace this with your actual service ID
        "template_hgqoins",   // 👉 Replace with your template ID
        form.current,
        "N6ZYQ8fF0QXs7dbWP"      // 👉 Replace with your EmailJS public key
      )
      .then(
        () => {
          setSuccess(true);
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#000116] text-white px-6 py-30">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-2 text-purple-500">Contact Me</h1>
        <p className="text-gray-400 mb-10">
          Have a question or want to work together? Fill out the form below and I'll get back to you soon.
        </p>
      </motion.div>

      <motion.form
        ref={form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 bg-gray-900 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 bg-gray-900 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          required
          className="w-full p-4 bg-gray-900 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 transition-all px-8 py-3 rounded-md text-white font-semibold"
        >
          Send Message
        </motion.button>

        {success && (
          <p className="text-green-400 font-medium pt-4 text-center">
            ✅ Message sent successfully!
          </p>
        )}
      </motion.form>
    </div>
  );
};

export default ContactPage;
