export default function App() {
  return (
    <>
      {/* 🌐 Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-indigo-600">Business Consultancy</h1>
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            <li><a href="#services" className="hover:text-indigo-600">Services</a></li>
            <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            <li><a href="#testimonials" className="hover:text-indigo-600">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
          <button className="hidden md:block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Get Started
          </button>
          <button className="md:hidden p-2 text-gray-700" id="mobileMenuButton">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* 🌄 Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-indigo-50 to-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Transform Your Business with Expert Consultancy
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We help organizations optimize performance, enhance strategy, and achieve sustainable growth.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
              Book a Consultation
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ...continue with services, about, testimonials, contact, footer */}
    </>
  );
}
