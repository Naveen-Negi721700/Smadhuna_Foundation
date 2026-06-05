import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b3d26] text-white text-xs font-sans mt-12">
      {/* Upper Grid Layout */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr] gap-10 items-start relative overflow-hidden">
        
        {/* Left Column: Brand Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            {/* Logo Graphic Substitute */}
             <img className='w-50 h-15 rounded-3xl border-2 border-black  ' src="/logo.jpeg" alt="SMADHUNA Foundation Logo" />
            <h2 className="text-lg font-bold tracking-tight text-white leading-none">
              SMADHUNA FOUNDATION
            </h2>
          </div>
          <p className="text-xs text-[#b3c7bc] leading-relaxed max-w-sm">
            Dedicated to promoting sustainability and empowering communities through education, asset optimization, and inclusive growth initiatives.
          </p>
        </div>

        {/* Middle Column: Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-[#b3c7bc]">
            <li><a href="#" className="hover:text-[#d98d3a] transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-[#d98d3a] transition-colors">Our initiatives</a></li>
            <li><a href="#" className="hover:text-[#d98d3a] transition-colors">Theory of Change</a></li>
            <li><a href="#" className="hover:text-[#d98d3a] transition-colors">Resonance</a></li>
          </ul>
        </div>

        {/* Right Column: HTML Form & Graphic Overlay */}
        <div className="relative z-10 flex flex-col gap-3">
          <div>
            <p className="text-xs font-medium text-white">
              Join us in building a sustainable nation.
            </p>
            <span className="block text-[10px] text-[#b3c7bc] mt-0.5">
              Sign up to get latest articles & updates.
            </span>
          </div>

          {/* Form relying purely on HTML action endpoints if needed, no JS events */}
          <form className="flex gap-2 mt-1">
            <input 
              type="text" 
              name="email-capture"
              placeholder="Enter your email" 
              className="bg-white px-3 py-2 text-xs text-neutral-800 rounded-sm w-44 placeholder:text-neutral-400 focus:outline-none"
              required
            />
            <button 
              type="submit" 
              className="bg-[#d98d3a] text-white text-xs font-semibold px-4 py-2 rounded-sm transition hover:bg-[#c07a2d]"
            >
              Sign Up
            </button>
          </form>

        
        
        </div>

      </div>

      {/* Bottom Legal/Utility Bar */}
      <div className="border-t border-[#082d1c] bg-[#0b3d26]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#b3c7bc] gap-2">
          <span>&copy; 2026 SMADHUNA Foundation. All Rights Reserved.</span>
          <span>Made with ❤️ in India</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
