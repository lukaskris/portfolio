'use client';
import ChevronLeftIcon from "@heroicons/react/24/solid/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon";
import Script from 'next/script';
import { useState } from "react";


export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "", subjects: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "", subjects: "", });
    } else {
      setStatus("Failed to send message.");
    }
  };
  return (
    <div className="bg-gray-50 font-sans">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#" className="text-xl font-bold gradient-text">LK</a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:gradient-text transition">About</a>
            <a href="#leadership" className="text-gray-700 hover:gradient-text transition">Leadership</a>
            <a href="#experience" className="text-gray-700 hover:gradient-text transition">Experience</a>
            <a href="#projects" className="text-gray-700 hover:gradient-text transition">Projects</a>
            <a href="#skills" className="text-gray-700 hover:gradient-text transition">Skills</a>
            <a href="#contact" className="text-gray-700 hover:gradient-text transition">Contact</a>
          </div>
          <button className="md:hidden text-gray-700">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Hero Section  */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Hi, I'm <span className="gradient-text">Lukas Kristianto</span></h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">Lead Mobile Engineer & AI Specialist</h2>
            <p className="text-gray-600 mb-8">
              Passionate technologist with 8+ years experience building cutting-edge mobile solutions.
              Currently leading cross-platform teams at APP Sinarmas while driving Mobile and AI innovation through
              TensorFlow and LLM integrations.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="gradient-bg text-white px-6 py-3 rounded-lg hover:opacity-90 transition">Contact Me</a>
              <a href="https://Lukaskris12.medium.com" target="_blank" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">Read My Medium Blog</a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full overflow-hidden shadow-xl">

              <img src="lukas.png" alt="Lukas Kristianto" className="rounded-full w-full h-full object-cover" />
              {/* <div className="absolute inset-0 flex items-center justify-center text-blue-400">
                <i className="fas fa-user text-8xl"></i>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Professional Profile</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="bg-gray-100 p-4 rounded-lg">
                <img src="lukas2.png" alt="Lukas Kristianto" className="rounded-lg w-full max-w-xs" />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Mobile Engineer • AI Enthusiast • Mentor</h3>
              <p className="text-gray-600 mb-4">
                I specialize in building high-performance mobile applications for Android and iOS using Kotlin and Flutter,
                while leveraging machine learning to solve real business challenges at APP Sinarmas. My passion lies at the
                intersection of mobile development and data-driven solutions.
              </p>
              <p className="text-gray-600 mb-4">
                As a mentor, I simplify complex concepts in Android development, enabling teams to build applications
                efficiently. My technical leadership has modernized legacy codebases and established development standards
                across multiple enterprise systems.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Leadership Philosophy:</strong> I believe in empowering teams through trust, open communication, and continuous learning. My approach centers on fostering a collaborative environment where every member feels valued and motivated to contribute their best. By setting clear goals and providing mentorship, I help teams navigate challenges, embrace innovation, and achieve outstanding results together.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center">
                  <div className="gradient-bg p-2 rounded-full mr-3 text-white">
                    <i className="fas fa-medal"></i>
                  </div>
                  <span className="text-gray-700">Best Employee 2024 (APP Sinarmas)</span>
                </div>
                <div className="flex items-center">
                  <div className="gradient-bg p-2 rounded-full mr-3 text-white">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <span className="text-gray-700">6% Revenue Growth Achieved</span>
                </div>
                <div className="flex items-center">
                  <div className="gradient-bg p-2 rounded-full mr-3 text-white">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <span className="text-gray-700">40-70% Performance Improvements</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Expertise Section */}
      <section id="expertise" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">My Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <span className="text-gray-700 font-medium">Android and Flutter Development</span>
              <span className="float-right text-gray-600">8+ years</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
              </div>
              <span className="text-gray-700 font-medium">AI/LLM Integration</span>
              <span className="float-right text-gray-600">2 years</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="text-left">
              <span className="text-gray-700 font-medium">Next.js & Tailwind</span>
              <span className="float-right text-gray-600">1.5 years</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <span className="text-gray-700 font-medium">Team Leadership</span>
              <span className="float-right text-gray-600">2 years</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-16 px-4  bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Leadership Experience</h2>

          {/* Current Leadership Role */}
          <div className="bg-white p-8 rounded-xl shadow-md mb-8 border-l-4 border-blue-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Lead Software Engineer</h3>
                <h4 className="text-xl gradient-text font-medium">APP Sinarmas (Asia Pulp & Paper)</h4>
              </div>
              <span className="text-gray-600 font-medium">Jan 2025 - Present</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Team Leadership</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Lead a cross-platform mobile team of 6 engineers</li>
                  <li>Mentor junior/mid-level engineers through code reviews</li>
                  <li>Establish architecture standards and best practices</li>
                  <li>Implement agile methodologies and CI/CD pipelines</li>
                  <li>Lead project planning, manage timelines, and coordinate cross-functional collaboration</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Technical Achievements</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Modernized legacy Android codebases</li>
                  <li>Implemented Jetpack Compose across 5+ enterprise systems</li>
                  <li>Pioneered Plate Number Recognition with TensorFlow</li>
                  <li>Developed Internal Social Media (30k+ users)</li>
                  <li>Researched and implemented LLM (Large Language Model) solutions for mobile AI features</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Previous Leadership Role */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Senior Software Engineer</h3>
                <h4 className="text-xl gradient-text font-medium">APP Sinarmas (Asia Pulp & Paper)</h4>
              </div>
              <span className="text-gray-600 font-medium">Apr 2021 - Dec 2024</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Projects</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Sales Force Automation (IDR 10B daily transactions)</li>
                  <li>ATOWN Internal Social Media (30,000+ APP Sinarmas Employee)</li>
                  <li>Forestree Plantation System</li>
                  <li>Tracking Ship/Log Systems</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Innovations</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Reduced app sizes by 40-60%</li>
                  <li>Improved performance through Compose</li>
                  <li>Document Classification with CNN TensorFlow</li>
                  <li>Standardized Android development practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Professional Experience</h2>

          <div className="space-y-8">
            {/* Tokopedia */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Software Engineer Android</h3>
                  <h4 className="text-lg gradient-text font-medium">Tokopedia</h4>
                </div>
                <span className="text-gray-600">Apr 2019 - Apr 2021</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Performance Optimizations:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Home Page: 5s → 1s load time</li>
                    <li>Official Store: 4s → 2.3s</li>
                    <li>Wishlist: 2s load with DiffUtil</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Reduced APK size by 70% (98MB → 30MB)</li>
                    <li>Implemented TDD (92% coverage)</li>
                    <li>Developed Tokopedia Play video feature</li>
                    <li>Automated Dark Mode for 326 modules</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Other Experiences */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Rapier Technology */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-800">Full-Stack Engineer (Freelance)</h3>
                  <span className="text-sm text-gray-600">Aug 2023 - Present</span>
                </div>
                <h4 className="gradient-text text-sm mb-2">PT. Rapier Technology</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Developed Android apps with Clean Architecture</li>
                  <li>Built multiplatform apps with Flutter (BLoC/GetX)</li>
                  <li>Created backend services with Golang</li>
                </ul>
              </div>

              {/* ASTRO */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-800">Android Engineer</h3>
                  <span className="text-sm text-gray-600">Oct 2022 - Jan 2023</span>
                </div>
                <h4 className="gradient-text text-sm mb-2">ASTRO</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Built chat app with Jetpack Compose</li>
                  <li>Developed Warehouse Management System</li>
                  <li>Implemented Android best practices</li>
                </ul>
              </div>
              {/* Mutter */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-800">Flutter Engineer</h3>
                  <span className="text-sm text-gray-600">July 2023 - present</span>
                </div>
                <h4 className="gradient-text text-sm mb-2">Mutter</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Built Flutter Mobile App for Mutter Breast Pump</li>
                  <li>Maintained and enhanced app features based on user feedback</li>
                  <li>Optimized performance and ensured seamless device connectivity with BLE</li>

                </ul>
              </div>
              {/* Renseki */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-800">Android Engineer</h3>
                  <span className="text-sm text-gray-600">July 2017 - March 2019</span>
                </div>
                <h4 className="gradient-text text-sm mb-2">RENSEKI</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Built POS System app with Java and Kotlin Native</li>
                  <li>Developed Sales Force Application with Flutter</li>
                  <li>Implemented Android best practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4  bg-white relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Highlighted Projects</h2>

          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 hover:bg-gray-100 transition hidden md:block">
            <ChevronLeftIcon id="left" className="h-6 w-6 text-gray-600" />
          </button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 hover:bg-gray-100 transition hidden md:block">
            <ChevronRightIcon id="right" className="h-6 w-6 text-gray-600" />
          </button>

          {/* Project Cards */}
          <div className="relative overflow-hidden">

            <div className="flex overflow-x-auto pb-8 scrollbar-hide space-x-6 px-2" id="projects-carousel">
              {/* 1. Tokopedia */}
              <div className="flex-shrink-0 w-96 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="gradient-bg h-48 flex items-center justify-center">
                  <i className="fas fa-shopping-bag text-white text-6xl"></i>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">Tokopedia E-Commerce</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Android</span>
                  </div>
                  <p className="text-gray-600 mb-4">Indonesia's largest e-commerce platform with 100M+ users where I led critical performance optimizations and feature development.</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-1">Major Contributions:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Homepage optimization (5s → 1s load time)</li>
                      <li>APK size reduction from 98MB to 30MB</li>
                      <li>Implemented Dark Mode for 326 modules</li>
                      <li>Developed Tokopedia Play video feature</li>
                      <li>Pioneered TDD (92% test coverage)</li>
                      <li>Official Store performance improvements</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Kotlin</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">MVVM</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">GraphQL</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Dynamic Features</span>
                  </div>
                  <div className="text-sm font-medium text-green-600">
                    <i className="fas fa-tachometer-alt mr-1"></i> Improved conversion rate by 15%
                  </div>
                </div>
              </div>

              {/* 2. SFA */}
              <div className="flex-shrink-0 w-96 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="gradient-bg h-48 flex items-center justify-center">
                  <i className="fas fa-map-marked-alt text-white text-6xl"></i>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">Sales Force Automation</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Android Native</span>
                  </div>
                  <p className="text-gray-600 mb-4">Multilingual, multi-currency system supporting 3,000+ sales personnel across Indonesia, Malaysia, India, and Thailand with real-time GPS tracking and offline transaction capabilities.</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-1">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Real-time salesman tracking with geofencing</li>
                      <li>Offline transaction processing (sync when online)</li>
                      <li>Multilingual support (4 languages)</li>
                      <li>Video learning modules for product training</li>
                      <li>Daily transaction reports with digital signatures</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Kotlin</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Jetpack Compose</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Room DB</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">GIS</span>
                  </div>
                  <div className="text-sm font-medium text-blue-600">
                    <i className="fas fa-chart-line mr-1"></i> Result: 6% revenue growth | IDR 10B daily transactions
                  </div>
                </div>
              </div>

              {/* <!-- 2. AJARI E-Learning --> */}
              <div className="flex-shrink-0 w-96 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="gradient-bg h-48 flex items-center justify-center">
                  <i className="fas fa-graduation-cap text-white text-6xl"></i>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">AJARI E-Learning Platform</h3>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Flutter</span>
                  </div>
                  <p className="text-gray-600 mb-4">National e-learning platform for Indonesia's Ministry of Home Affairs with AI-powered features and strict identity verification.</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-1">Innovations:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Face recognition for identity verification</li>
                      <li>AI-powered video learning analytics</li>
                      <li>Video Call / Chat Group</li>
                      <li>Smart PDF reader with AI summarization</li>
                      <li>Offline content download capability</li>
                      <li>Secure exam proctoring system</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Flutter</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">BLoC</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">TensorFlow Lite</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Firebase</span>
                  </div>
                  <div className="text-sm font-medium text-purple-600">
                    <i className="fas fa-users mr-1"></i> Used by 50,000+ civil servants nationwide
                  </div>
                </div>
              </div>

              {/* 3. Internal Social Media */}
              <div className="flex-shrink-0 w-96 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="gradient-bg h-48 flex items-center justify-center">
                  <i className="fas fa-users text-white text-6xl"></i>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">ATOWN Internal Social Media</h3>
                    <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">Flutter</span>
                  </div>
                  <p className="text-gray-600 mb-4">Enterprise social network connecting 30,000+ APP Sinarmas employees across multiple countries with real-time communication and collaboration tools.</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-1">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Cross-platform (Android/iOS) single codebase</li>
                      <li>Real-time messaging with read receipts</li>
                      <li>Company news feed with engagement analytics</li>
                      <li>Employee directory with skills tagging</li>
                      <li>Event management system</li>
                      <li>Secure file sharing with encryption</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">Flutter</span>
                    <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">Firebase</span>
                    <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">BLoC</span>
                    <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">AES-256</span>
                  </div>
                  <div className="text-sm font-medium text-pink-600">
                    <i className="fas fa-network-wired mr-1"></i> Reduced internal email volume by 40%
                  </div>
                </div>
              </div>

              {/* <!-- 4. Timesheet VRA Mobile --> */}
              <div className="flex-shrink-0 w-96 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="gradient-bg h-48 flex items-center justify-center">
                  <i className="fas fa-car text-white text-6xl"></i>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">Timesheet VRA Mobile</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">AI/OCR</span>
                  </div>
                  <p className="text-gray-600 mb-4">Vehicle fleet management system with custom TensorFlow OCR model for odometer reading to prevent fraud in fuel usage reporting.</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-1">Technical Highlights:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Custom-trained TensorFlow model for odometer digit recognition</li>
                      <li>100% offline operation (no internet dependency)</li>
                      <li>Image preprocessing for low-light conditions</li>
                      <li>Data encryption at rest and in transit</li>
                      <li>Tamper-proof audit logging</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Kotlin</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">TensorFlow</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">SQLCipher</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">OWASP</span>
                  </div>
                  <div className="text-sm font-medium text-green-600">
                    <i className="fas fa-shield-alt mr-1"></i> Reduced fraud potential by IDR 100M annually
                  </div>
                </div>
              </div>

              {/* <!-- 5. Bahtera Warehouse System --> */}
              <div className="flex-shrink-0 w-96 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="gradient-bg h-48 flex items-center justify-center">
                  <i className="fas fa-warehouse text-white text-6xl"></i>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">Bahtera Warehouse System</h3>
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Enterprise</span>
                  </div>
                  <p className="text-gray-600 mb-4">Comprehensive warehouse management system deployed across 100+ warehouses in Jakarta, Surabaya, and Semarang with Zebra device integration.</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-1">System Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Zebra TC20/TC25 barcode scanner integration</li>
                      <li>Seamless online-offline synchronization</li>
                      <li>Real-time inventory tracking</li>
                      <li>OWASP-compliant security protocols</li>
                      <li>Multi-warehouse inventory transfers</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Jetpack Compose</span>
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Zebra SDK</span>
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">AES-256</span>
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">MQTT</span>
                  </div>
                  <div className="text-sm font-medium text-orange-600">
                    <i className="fas fa-tachometer-alt mr-1"></i> Increased inventory accuracy to 99.8%
                  </div>
                </div>
              </div>

              {/* <!-- 6. Document Recognition --> */}
              <div className="flex-shrink-0 w-96 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="gradient-bg h-48 flex items-center justify-center">
                  <i className="fas fa-file-alt text-white text-6xl"></i>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">Document Recognition Automation</h3>
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">AI/ML</span>
                  </div>
                  <p className="text-gray-600 mb-4">Intelligent document processing system that automatically classifies and organizes PDF documents using computer vision.</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-1">AI Capabilities:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>PDF splitting into images with OCR</li>
                      <li>YOLOv5 for document type detection</li>
                      <li>Custom TensorFlow model for classification</li>
                      <li>Automatic directory structuring</li>
                      <li>Metadata extraction and tagging</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Python</span>
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">TensorFlow</span>
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">YOLOv5</span>
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">OpenCV</span>
                  </div>
                  <div className="text-sm font-medium text-red-600">
                    <i className="fas fa-robot mr-1"></i> Reduced manual processing time by 85%
                  </div>
                </div>
              </div>

              {/* <!-- 7. Plate Number Recognition --> */}
              <div className="flex-shrink-0 w-96 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="gradient-bg h-48 flex items-center justify-center">
                  <i className="fas fa-car-side text-white text-6xl"></i>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">Plate Number Recognition</h3>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full text-center">Computer Vision</span>
                  </div>
                  <p className="text-gray-600 mb-4">Advanced vehicle identification system combining YOLOv5 for plate detection and custom TensorFlow model for character recognition.</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-1">Technical Aspects:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>YOLOv5 for real-time plate detection</li>
                      <li>Custom CNN for character segmentation</li>
                      <li>Optimized for low-quality images</li>
                      <li>Support for multiple vehicle types</li>
                      <li>Integration with parking management systems</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Python</span>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">TensorFlow</span>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">YOLOv5</span>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Flask API</span>
                  </div>
                  <div className="text-sm font-medium text-indigo-600">
                    <i className="fas fa-bolt mr-1"></i> Achieves 92% accuracy in field conditions
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Indicators */}
          <div className="flex justify-center space-x-2 mt-6 md:hidden">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Mobile Development */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-3">
                <i className="fas fa-mobile-alt text-3xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Mobile Development</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Android (Kotlin/Java)</li>
                <li>Flutter</li>
                <li>Jetpack Components</li>
                <li>Material Design</li>
                <li>Firebase</li>
              </ul>
            </div>

            {/* AI/ML */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-3">
                <i className="fas fa-brain text-3xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">AI/ML Development</h3>
              <ul className="text-gray-600 space-y-1">
                <li>LLM Integration</li>
                <li>TensorFlow Lite</li>
                <li>Natural Language Processing</li>
                <li>Hugging Face</li>
                <li>Prompt Engineering</li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-3">
                <i className="fas fa-code text-3xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Web Development</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
                <li>Node.js</li>
              </ul>
            </div>

            {/* Other Skills */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-3">
                <i className="fas fa-cogs text-3xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Other Skills</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Team Leadership</li>
                <li>Agile Methodology</li>
                <li>CI/CD Pipelines</li>
                <li>Microservices</li>
                <li>Cloud (AWS/GCP)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a href="mailto:lukaskris12@gmail.com" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <div className="gradient-bg p-3 rounded-full mr-4 text-white">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p className="text-gray-800 font-medium">lukaskris12@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+6285158388562" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <div className="gradient-bg p-3 rounded-full mr-4 text-white">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <p className="text-gray-600">Phone/WhatsApp</p>
                    <p className="text-gray-800 font-medium">+62 8515-8388562</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/lukaskristianto/" target="_blank" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <div className="gradient-bg p-3 rounded-full mr-4 text-white">
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                  <div>
                    <p className="text-gray-600">LinkedIn</p>
                    <p className="text-gray-800 font-medium">linkedin.com/in/lukaskristianto</p>
                  </div>
                </a>
                <a href="https://www.instagram.com/lukaskriiss/" target="_blank" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <div className="gradient-bg p-3 rounded-full mr-4 text-white">
                    <i className="fab fa-instagram"></i>
                  </div>
                  <div>
                    <p className="text-gray-600">Instagram</p>
                    <p className="text-gray-800 font-medium">@lukaskriiss</p>
                  </div>
                </a>
                <a href="https://github.com/lukaskris" target="_blank" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <div className="gradient-bg p-3 rounded-full mr-4 text-white">
                    <i className="fab fa-github"></i>
                  </div>
                  <div>
                    <p className="text-gray-600">Github</p>
                    <p className="text-gray-800 font-medium">Lukaskris</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input type="text" id="name" value={form.name}
                    onChange={handleChange}
                    name="name"
                    required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input type="email" id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="subjects" className="block text-gray-700 mb-2">Subject</label>
                  <input type="text" id="subjects"
                    name="subjects"
                    value={form.subjects}
                    onChange={handleChange}
                    required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea id="message" rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="gradient-bg text-white px-6 py-3 rounded-lg hover:opacity-90 transition w-full">Send Message</button>
              </form>

              {status && <p className="mt-4 text-center">{status}</p>}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Lukas Kristianto. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/lukaskristianto/" target="_blank" className="hover:text-blue-400 transition"><i className="fab fa-linkedin-in text-xl"></i></a>
              <a href="https://github.com/lukaskris12" target="_blank" className="hover:text-blue-400 transition"><i className="fab fa-github text-xl"></i></a>
              <a href="https://Lukaskris12.medium.com" target="_blank" className="hover:text-blue-400 transition"><i className="fab fa-medium text-xl"></i></a>
              <a href="https://www.instagram.com/lukaskriiss/" target="_blank" className="hover:text-blue-400 transition"><i className="fab fa-instagram text-xl"></i></a>

              <a href="https://github.com/lukaskris" target="_blank" className="hover:text-blue-400 transition"><i className="fab fa-github text-xl"></i></a>
            </div>
          </div>
        </div>
      </footer>

      <Script strategy="afterInteractive">
        {`
        const carousel = document.getElementById('projects-carousel');
        const projects = document.querySelectorAll('.flex-shrink-0');
        const projectWidth = projects[0]?.offsetWidth + 24 || 0;
        
        document.querySelector('#right')?.parentElement?.addEventListener('click', () => {
          carousel.scrollBy({ left: projectWidth, behavior: 'smooth' });
        });
        
        document.querySelector('#left')?.parentElement?.addEventListener('click', () => {
          carousel.scrollBy({ left: -projectWidth, behavior: 'smooth' });
        });
      `}
      </Script>
    </div>
  );
}
