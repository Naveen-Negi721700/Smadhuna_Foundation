import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b3d26] text-white font-sans mt-12">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                className="w-40 h-14 rounded-2xl border border-black object-cover"
                src="/logo.jpeg"
                alt="SMADHUNA Foundation Logo"
              />
            </div>

            <h2 className="text-xl font-bold">
              SMADHUNA FOUNDATION
            </h2>

            <p className="text-sm text-[#b3c7bc] leading-relaxed">
              Dedicated to promoting sustainability and empowering
              communities through education, asset optimization,
              environmental stewardship, and inclusive growth initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#d98d3a]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-[#b3c7bc] text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Our Initiatives
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Theory of Change
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Resonance
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#d98d3a]">
              Contact Us
            </h3>

            <div className="space-y-4 text-[#b3c7bc] text-sm">
              <p>
                📍 Dehradun, Uttarakhand, India
              </p>

              <p>
                📞 +91 XXXXX XXXXX
              </p>

              <p>
                ✉️ info@smadhunafoundation.org
              </p>

              <p>
                🌐 www.smadhunafoundation.org
              </p>
            </div>
          </div>

          {/* Impact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#d98d3a]">
              Our Impact
            </h3>

            <div className="space-y-5">
              <div>
                <h4 className="text-3xl font-bold">5000+</h4>
                <p className="text-[#b3c7bc] text-sm">
                  Lives Impacted
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-bold">25+</h4>
                <p className="text-[#b3c7bc] text-sm">
                  Partner Organizations
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-bold">10+</h4>
                <p className="text-[#b3c7bc] text-sm">
                  States Reached
                </p>
              </div>
            </div>
          </div>
        </div> 

        
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#082d1c] bg-[#082d1c]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#b3c7bc]">
          <span>
            © 2026 SMADHUNA Foundation. All Rights Reserved.
          </span>

          <span>
            Made with ❤️ in India
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;