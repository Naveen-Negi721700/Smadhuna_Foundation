import React from "react";
import Link from "next/link";

export default function SmadonaImpactSection() {
  return (
    <div className="w-full bg-white font-sans antialiased">
      {/* HERO BANNER */}
      <section className="w-full w-full mx-auto px-1 pt-6">
        <div className="w-full h-[240px] sm:h-[360px] md:h-[480px] relative rounded-3xl overflow-hidden bg-gray-200 shadow-sm">
          <img
            src="/donation(s).jpeg"
            alt="Smadona Foundation Rural Community Project"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>        
      </section>

      {/* DONATION SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 py-16 bg-[#FAF7F0] mt-12 rounded-3xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A3326] tracking-wide uppercase">
            Invest in Community-Owned Progress
          </h2>

          <p className="text-gray-600 text-sm md:text-base mt-2 max-w-2xl mx-auto">
            Your donation provides sustainable, integrated solutions to
            empower rural communities. Choose a focus area below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Water Access */}
          <div className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center justify-between hover:-translate-y-1 transition">
            <div>
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                💧
              </div>

              <h3 className="text-xs font-black text-[#1A3326] uppercase mb-2">
                Water Access
              </h3>

              <p className="text-gray-500 text-[11px] leading-relaxed mb-4">
                Support clean water systems and sanitation.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-800 mb-3">
                (Any amount helps)
              </p>

             
                 <Link href={"/payment"}>
                <button className=" px-6 py-3 text-base sm:text-lg md:text-xl w-full rounded-3xl font-bold text-white bg-gradient-to-r from-[#0b3d26] to-[#2e8b57] hover:scale-105 duration-300 hover:text-xl hover:text-black">
          Donate
            </button>
            </Link>
            </div>
          </div>

          {/* Renewable Energy */}
          <div className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center justify-between hover:-translate-y-1 transition">
            <div>
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                ☀️
              </div>

              <h3 className="text-xs font-black text-[#1A3326] uppercase mb-2">
                Renewable Energy
              </h3>

              <p className="text-gray-500 text-[11px] leading-relaxed mb-4">
                Solar-power homes, schools and health centers.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-800 mb-3">
               (Any amount helps)
              </p>

                
                 <Link href={"/payment"}>
                <button className=" px-6 py-3 text-base sm:text-lg md:text-xl w-full rounded-3xl font-bold text-white bg-gradient-to-r from-[#0b3d26] to-[#2e8b57] hover:scale-105 duration-300 hover:text-xl hover:text-black">
          Donate
            </button>
            </Link>
            </div>
          </div>

          {/* Education */}
          <div className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center justify-between hover:-translate-y-1 transition">
            <div>
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                🎓
              </div>

              <h3 className="text-xs font-black text-[#1A3326] uppercase mb-2">
                Education Access
              </h3>

              <p className="text-gray-500 text-[11px] leading-relaxed mb-4">
                Build classrooms, provide supplies and training.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-800 mb-3">
               (Any amount helps)
              </p>

                
                 <Link href={"/payment"}>
                <button className=" px-6 py-3 text-base sm:text-lg md:text-xl w-full rounded-3xl font-bold text-white bg-gradient-to-r from-[#0b3d26] to-[#2e8b57] hover:scale-105 duration-300 hover:text-xl hover:text-black">
          Donate
            </button>
            </Link>
            </div>
          </div>

          {/* Agriculture */}
          <div className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center justify-between hover:-translate-y-1 transition">
            <div>
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                🌱
              </div>

              <h3 className="text-xs font-black text-[#1A3326] uppercase mb-2">
                Agri-Livelihoods
              </h3>

              <p className="text-gray-500 text-[11px] leading-relaxed mb-4">
                Empower farmers and support micro-enterprises.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-800 mb-3">
               (Any amount helps)
              </p>

                
                 <Link href={"/payment"}>
                <button className=" px-6 py-3 text-base sm:text-lg md:text-xl w-full rounded-3xl font-bold text-white bg-gradient-to-r from-[#0b3d26] to-[#2e8b57] hover:scale-105 duration-300 hover:text-xl hover:text-black">
          Donate
            </button>
            </Link>
            </div>
          </div>

          {/* General Fund */}
          <div className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center justify-between hover:-translate-y-1 transition">
            <div>
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                🌍
              </div>

              <h3 className="text-xs font-black text-[#1A3326] uppercase mb-2">
                General Fund
              </h3>

              <p className="text-gray-500 text-[11px] leading-relaxed mb-4">
                Contribute to overall organizational growth and community
                impact.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-800 mb-3">
                (Any amount helps)
              </p>

                
                 <Link href={"/payment"}>
                <button className=" px-6 py-3 text-base sm:text-lg md:text-xl w-full rounded-3xl font-bold text-white bg-gradient-to-r from-[#0b3d26] to-[#2e8b57] hover:scale-105 duration-300 hover:text-xl hover:text-black">
          Donate
            </button>
            </Link>
            </div>
          </div>
        </div>

       
      </section>
    </div>
  );
}