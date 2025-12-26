import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-7xl font-bold text-gray-800 mb-12">Get in Touch</h1>
        <p className="text-3xl text-gray-600 mb-16">We'd love to hear from you!</p>
        <div className="bg-white rounded-3xl shadow-2xl p-16">
          <p className="text-2xl text-gray-700 mb-8">Email: hello@devsync.com</p>
          <p className="text-2xl text-gray-700">Phone: +92 300 1234567</p>
        </div>
      </div>
    </div>
  );
}