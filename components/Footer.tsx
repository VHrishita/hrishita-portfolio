"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mblzonvk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      
      <div className="w-full absolute left-0 -bottom-0 min-h-80 -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading">Let&apos;s get in touch</h1>

        <button onClick={() => setIsOpen(true)}>
          <MagicButton
            title="Contact Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </button>
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#0f0f1a] p-8 rounded-2xl w-full max-w-md shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Contact Me
            </h2>

            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="p-3 rounded-lg bg-black-200 border border-gray-700 text-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="p-3 rounded-lg bg-black-200 border border-gray-700 text-white"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Purpose / Message"
                  rows={4}
                  className="p-3 rounded-lg bg-black-200 border border-gray-700 text-white"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-all"
                >
                  Send
                </button>
                {error && (
                  <p className="text-red-500 text-sm text-center mt-2">
                    ⚠️ Something went wrong. Please try again.
                  </p>
                )}
              </form>
            ) : (
              <p className="text-green-400 text-center">
                ✅ Message sent successfully!
              </p>
            )}

            <button
              onClick={() => {
                setIsOpen(false);
                setIsSubmitted(false);
                setError(false);
              }}
              className="mt-4 text-gray-400 hover:text-white text-sm w-full text-center"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <p className="mt-12 text-sm text-gray-400 text-center">
        © 2025 Vempali Hrishita. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
