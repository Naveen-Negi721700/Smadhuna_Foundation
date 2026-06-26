import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
          <section className="bg-gray-50 py-12 px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          GET INVOLVED: YOUR PARTNERSHIP,<br /> THEIR FUTURE.
        </h2>
        <p className="text-lg text-gray-600">
          Choose a way to support sustainable ownership and empower communities.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: Partner */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="p-6">
            <div className="w-12 h-12 mb-4 text-emerald-600">
              {/* Icon Placeholder */}
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">PARTNER WITH US</h3>
            <p className="text-gray-600 mb-6">Join our network of corporate partners and change-makers. We believe in collaboration.</p>
            <Link href="/involved-form">
              <button className="px-6 py-3  text-base sm:text-lg md:text-xl w-full  rounded-3xl font-bold text-white bg-gradient-to-r from-[#0b3d26] to-[#2e8b57] hover:scale-105 duration-300 hover:text-black">
                Join as a partner
              </button>
              </Link>
          </div>
        </div>

        {/* Card 2: Volunteer */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="p-6">
            <div className="w-12 h-12 mb-4 text-emerald-600">
              {/* Icon Placeholder */}
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">VOLUNTEER</h3>
            <p className="text-gray-600 mb-6">Share your skills and time on the ground or remotely. Apply your expertise.</p>
          <Link href="/involved-form ">
              <button className="px-6 py-3  text-base sm:text-lg md:text-xl w-full  rounded-3xl font-bold text-white bg-gradient-to-r from-[#0b3d26] to-[#2e8b57] hover:scale-105 duration-300 hover:text-black">
                Join as a volunteer
              </button>
              </Link>   
          </div>
        </div>
    

        {/* Card 3: Raise Funds */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="p-6">
            <div className="w-12 h-12 mb-4 text-emerald-600">
              {/* Icon Placeholder */}
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">RAISE FUNDS</h3>
            <p className="text-gray-600 mb-6">Organise a campaign to support our core programs. Start a personal fundraiser.</p>
          <Link href="/involved-form">
              <button className="px-6 py-3  text-base sm:text-lg md:text-xl w-full  rounded-3xl font-bold text-white bg-gradient-to-r from-[#0b3d26] to-[#2e8b57] hover:scale-105 duration-300 hover:text-black">
                Start a fundraiser
              </button>
              </Link>
          </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default page
