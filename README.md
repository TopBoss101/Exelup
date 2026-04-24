import { useState, useEffect } from "react";

export default function ExelupSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  const slides = [
    { title: "Empowering Digital Future", text: "Innovate and scale with Exelup." },
    { title: "AI-Driven Transformation", text: "Smarter automation for growth." },
    { title: "Cloud Excellence", text: "Secure, scalable, future-ready." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <div className="flex justify-between items-center px-12 py-4 shadow sticky top-0 bg-white z-50">
        <div className="text-xl font-bold text-blue-600">EXELUP</div>
        <div className="relative">
          <button onClick={() => setMenuOpen(!menuOpen)}>Services ▾</button>
          {menuOpen && (
            <div className="absolute top-8 left-0 bg-white shadow-lg p-6 grid grid-cols-3 gap-6 w-[600px]">
              <div>
                <h4 className="font-bold mb-2">Cloud</h4>
                <p>Migration & DevOps</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">AI</h4>
                <p>Automation & Analytics</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Security</h4>
                <p>Enterprise protection</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hero Slider */}
      <div className="h-[90vh] flex items-center px-20 bg-gradient-to-r from-blue-900 to-blue-500 text-white">
        <div>
          <h1 className="text-5xl mb-4">{slides[slide].title}</h1>
          <p className="text-lg">{slides[slide].text}</p>
        </div>
      </div>

      {/* About */}
      <section className="px-20 py-20 bg-white">
        <h2 className="text-3xl mb-6">About Exelup</h2>
        <p className="max-w-2xl">Exelup is a digital innovation partner helping enterprises adopt modern technologies and scale globally.</p>
      </section>

      {/* Clients */}
      <section className="px-20 py-20 bg-gray-100">
        <h2 className="text-3xl mb-6">Our Clients</h2>
        <div className="flex gap-10">
          <div className="p-6 bg-white shadow">Client A</div>
          <div className="p-6 bg-white shadow">Client B</div>
          <div className="p-6 bg-white shadow">Client C</div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-20 py-20 bg-white">
        <h2 className="text-3xl mb-6">Case Studies</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-6 shadow hover:shadow-lg">AI Transformation</div>
          <div className="p-6 shadow hover:shadow-lg">Cloud Migration</div>
          <div className="p-6 shadow hover:shadow-lg">Security Overhaul</div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-blue-900 text-white text-center p-6">
        © 2026 Exelup. All rights reserved.
      </div>
    </div>
  );
}
