"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Send Us a Message
      </h2>

      {status === "sent" && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-800 rounded-lg p-4">
          Thank you! We&apos;ll be in touch within 24 hours.
        </div>
      )}
      {status === "error" && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="john@business.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label
              htmlFor="business"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Business Name
            </label>
            <input
              type="text"
              id="business"
              name="business"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Smith's Bakery"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value="">Select a service</option>
            <option value="youtube-automation">YouTube Automation</option>
            <option value="social-media">Social Media Management</option>
            <option value="seo">SEO</option>
            <option value="etsy-service">Etsy Service</option>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell us about your business and what you're looking for..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
