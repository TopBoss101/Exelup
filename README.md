// NEXT.JS PROJECT STRUCTURE FOR EXELUP

// 1. Install Next.js
// npx create-next-app@latest exelup-site
// cd exelup-site
// npm run dev

// Replace contents with below structure

// =========================
// /app/layout.js
// =========================
export const metadata = {
  title: "Exelup",
  description: "Digital Innovation Company"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// =========================
// /app/page.js
// =========================
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Clients from "../components/Clients";
import CaseStudies from "../components/CaseStudies";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Clients />
      <CaseStudies />
      <Footer />
    </div>
  );
}

// =========================
// /components/Navbar.js
// =========================
"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-12 py-4 shadow sticky top-0 bg-white z-50">
      <div className="text-xl font-bold text-blue-600">EXELUP</div>

      <div className="relative">
        <button onClick={() => setOpen(!open)}>Services ▾</button>
        {open && (
          <div className="absolute top-8 left-0 bg-white shadow-lg p-6 grid grid-cols-3 gap-6 w-[600px]">
            <div>
              <h4 className="font-bold">Cloud</h4>
              <p>Migration & DevOps</p>
            </div>
            <div>
              <h4 className="font-bold">AI</h4>
              <p>Automation</p>
            </div>
            <div>
              <h4 className="font-bold">Security</h4>
              <p>Protection</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// =========================
// /components/Hero.js
// =========================
"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const slides = [
    "Empowering Digital Future",
    "AI Transformation",
    "Cloud Excellence"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="h-[90vh] flex items-center px-20 bg-gradient-to-r from-blue-900 to-blue-500 text-white">
      <h1 className="text-5xl">{slides[index]}</h1>
    </div>
  );
}

// =========================
// /components/About.js
// =========================
export default function About() {
  return (
    <section className="px-20 py-20">
      <h2 className="text-3xl mb-4">About Exelup</h2>
      <p>We help enterprises innovate with AI, cloud, and digital solutions.</p>
    </section>
  );
}

// =========================
// /components/Clients.js
// =========================
export default function Clients() {
  return (
    <section className="px-20 py-20 bg-gray-100">
      <h2 className="text-3xl mb-6">Clients</h2>
      <div className="flex gap-6">
        <div className="p-6 bg-white shadow">Client A</div>
        <div className="p-6 bg-white shadow">Client B</div>
      </div>
    </section>
  );
}

// =========================
// /components/CaseStudies.js
// =========================
export default function CaseStudies() {
  return (
    <section className="px-20 py-20">
      <h2 className="text-3xl mb-6">Case Studies</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 shadow">AI Project</div>
        <div className="p-6 shadow">Cloud Migration</div>
        <div className="p-6 shadow">Security Upgrade</div>
      </div>
    </section>
  );
}

// =========================
// /components/Footer.js
// =========================
export default function Footer() {
  return (
    <div className="bg-blue-900 text-white text-center p-6">
      © 2026 Exelup
    </div>
  );
}

// =========================
// Tailwind Setup (optional but recommended)
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p

// Add to globals.css:
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// =========================
// DONE
// =========================
