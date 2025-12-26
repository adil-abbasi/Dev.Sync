import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-10">About DevSync</h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-12">
          Founded in 2025, DevSync is the fastest-growing platform connecting brilliant developers with ambitious clients worldwide.
        </p>
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          <div>
            <div className="text-5xl font-bold text-blue-600">10K+</div>
            <p className="text-gray-600 mt-4">Active Users</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-600">50K+</div>
            <p className="text-gray-600 mt-4">Projects Delivered</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-600">150+</div>
            <p className="text-gray-600 mt-4">Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
}