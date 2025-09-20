'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function PaymentPage() {
  const [businessName, setBusinessName] = useState('');
  const [currency, setCurrency] = useState('356'); // INR
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [description, setDescription] = useState('');
  const [generatedRequest, setGeneratedRequest] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [htmlResponse, setHtmlResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/initiate-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          currency,
          email,
          mobile,
          description,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to initiate payment');
      }

      // The server should return a JSON containing the redirect URI
      const data = await res.json();

      if (data.redirectURI) {
        // ✅ Redirect the browser to the payment page
        window.location.href = data.redirectURI;
      } else {
        throw new Error('Missing redirect URI');
      }

      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to connect to payment gateway');
      setLoading(false);
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center px-4 md:px-8 py-10 pt-[6rem]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-xl overflow-hidden">

        {/* Left: Payment Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-primary text-center">Make a Payment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Business Name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
              className="w-full border px-4 py-2 rounded"
            />

            <input
              type="number"
              placeholder="Amount (e.g. 300)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="w-full border px-4 py-2 rounded"
            />

            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full border px-4 py-2 rounded"
            >
              <option value="356">INR</option>
              <option value="840">USD</option>
              <option value="978">EUR</option>
            </select>

            <input
              type="email"
              placeholder="Customer Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border px-4 py-2 rounded"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className="w-full border px-4 py-2 rounded"
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border px-4 py-2 rounded"
              rows={3}
            ></textarea>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-700 transition"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Generate Payment Request'}
            </button>
          </form>

          {htmlResponse && (
            <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
              <p className="text-lg font-semibold text-indigo-600 animate-pulse">Redirecting to ICICI Payment Gateway...</p>

              <div
                style={{ display: 'none' }}
                dangerouslySetInnerHTML={{
                  __html: `
          ${htmlResponse}
          <script>document.forms[0]?.submit();</script>
        `,
                }}
              />
            </div>
          )}

        </div>

        {/* Right: Image + Contact Info */}
        <div className="relative bg-primary-50 p-8 flex flex-col justify-center">

          <h3 className="text-xl font-semibold text-primary mb-4">Contact Us</h3>
          <div className="space-y-3 text-gray-700 mb-4">
            <p className="flex items-center gap-2">
              <FiMail className="text-primary" /> contact@yourcompany.com
            </p>
            <p className="flex items-center gap-2">
              <FiPhone className="text-primary" /> +91 80875 66499
            </p>
            <p className="flex items-center gap-2">
              <FiMapPin className="text-primary" /> 123 Business St, Mumbai, India
            </p>
          </div>
          <Image
            width={900}
            height={900}
            src="/assets/images/payment.jpg"
            alt="Business"
            className="rounded-lg mb-6 h-96 object-cover w-full shadow-md"
          />

        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/10 bg-opacity-40">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
            <h3 className="text-2xl font-bold text-green mb-4">Thank You!</h3>
            <p className="text-gray-700 mb-6">Your payment request was successfully generated.</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
