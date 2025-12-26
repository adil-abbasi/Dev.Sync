// src/pages/LandingPage.jsx
import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import {
  GlobeAltIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* EPIC HERO */}
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
                strings: [
                  "Build your dream project",
                  "Book 1-on-1 expert calls",
                  "Launch globally in days",
                  "Earn what you're worth"
                ],
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

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16 text-gray-300">
            <div>Trusted by 10,000+ users</div>
            <div>Secure Payments via Stripe</div>
            <div>24/7 Support</div>
          </div>
        </div>
      </section>

      {/* Why DevSync */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 text-gray-800">Why DevSync?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: GlobeAltIcon, title: "Global Outreach", desc: "Connect with talent from over 100 countries." },
              { icon: CodeBracketIcon, title: "Project Showcasing", desc: "Upload and version control your best work." },
              { icon: CalendarIcon, title: "Consultancy Booking", desc: "Schedule video calls with experts easily." },
              { icon: ChatBubbleLeftRightIcon, title: "Real-Time Messaging", desc: "Collaborate seamlessly with clients." },
              { icon: StarIcon, title: "Ratings & Reviews", desc: "Build trust with verified feedback." },
              { icon: CodeBracketIcon, title: "AI Recommendations", desc: "Get matched with perfect projects." },
            ].map((f, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition">
                <f.icon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-blue-600 mb-4">{f.title}</h3>
                <p className="text-lg text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 text-gray-800">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Sign Up", desc: "Create your profile as developer or client." },
              { step: "2", title: "Browse/Upload", desc: "Explore services or showcase your projects." },
              { step: "3", title: "Connect & Hire", desc: "Message, book consultancy, or hire directly." },
              { step: "4", title: "Collaborate & Pay", desc: "Work together securely with payments." },
            ].map((s, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-4">{s.step}</div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Service Categories */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 text-gray-800">Global Service Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Software Development", "Design & UX/UI", "Data Science & AI", "Blockchain & Crypto", "Marketing & SEO", "Consultancy Services", "IT Support & Cybersecurity", "Education & Tutoring", "Creative & Multimedia", "Other Services"].map((cat, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition text-center text-xl font-semibold text-gray-700">
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-700 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Alex Johnson", role: "Developer", quote: "DevSync helped me land my first big project!", stars: 5 },
              { name: "Sara Lee", role: "Client", quote: "Easy to find top talent. Real-time chat made everything smooth.", stars: 5 },
              { name: "Mike Davis", role: "Freelancer", quote: "AI recommendations matched me with perfect clients!", stars: 5 },
            ].map((t, i) => (
              <div key={i} className="bg-white/10 p-10 rounded-3xl backdrop-blur-md shadow-xl">
                <div className="flex mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <StarIcon key={j} className="h-6 w-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{t.quote}"</p>
                <div className="font-bold">{t.name}</div>
                <div className="text-sm opacity-80">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div><h3 className="text-2xl font-bold mb-6">DevSync</h3><p className="text-gray-400">Bridging developers and clients worldwide.</p></div>
          <div><h3 className="text-2xl font-bold mb-6">Quick Links</h3><ul className="space-y-3">{["Home", "Services", "About Us", "Contact", "Privacy Policy"].map(l => <li key={l}><a href="#" className="hover:text-blue-400">{l}</a></li>)}</ul></div>
          <div><h3 className="text-2xl font-bold mb-6">Follow Us</h3><div className="flex space-x-4">{["Twitter", "LinkedIn", "Facebook", "Instagram"].map(s => <a key={s} href="#" className="hover:text-blue-400">{s}</a>)}</div></div>
          <div><h3 className="text-2xl font-bold mb-6">Newsletter</h3><p className="text-gray-400 mb-4">Stay updated.</p><input type="email" placeholder="Your email" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-full mb-4" /><button className="w-full bg-blue-600 py-3 rounded-full font-bold hover:bg-blue-700">Subscribe</button></div>
        </div>
        <div className="text-center mt-12 text-gray-400">© 2025 DevSync. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default LandingPage;