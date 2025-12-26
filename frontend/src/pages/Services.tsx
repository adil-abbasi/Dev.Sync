import React from 'react';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-7xl font-bold text-gray-800 mb-8">Our Services</h1>
        <p className="text-3xl text-gray-600 mb-16">Web • Mobile • AI • Blockchain • Design • Consultancy</p>
        <div className="grid md:grid-cols-3 gap-12">
          {["Web Development", "Mobile Apps", "UI/UX Design", "AI & ML", "Blockchain", "DevOps"].map((s) => (
            <div key={s} className="bg-white p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-4">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">{s}</h3>
              <p className="text-lg text-gray-600">Top-rated experts ready to deliver</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}