import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight tracking-tight">
            Hire Top Talent.<br />
            <span className="text-yellow-400">Get Work Done.</span>
          </h1>

          <div className="text-3xl md:text-5xl font-light h-32 min-h-[120px] text-yellow-400">
            <Typewriter
              options={{
                strings: ["Build your dream project", "Book 1-on-1 expert calls", "Launch globally in days", "Earn what you're worth"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </div>

          <p className="text-xl md:text-2xl mt-12 mb-12 text-gray-200 max-w-3xl mx-auto opacity-90">
            Join 10,000+ developers & clients already building the future on DevSync.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/register">
              <button className="bg-yellow-400 text-black px-12 py-5 rounded-full text-xl font-bold hover:bg-yellow-300 transform hover:scale-110 transition shadow-2xl">
                Start Earning Today
              </button>
            </Link>
            <Link to="/login">
              <button className="border-4 border-white px-12 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-black transition">
                Find Developers Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Your other sections (Features, Categories, etc.) go here if you want */}
    </>
  );
}export {};