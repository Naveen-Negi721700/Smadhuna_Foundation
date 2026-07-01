"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  return (
    <>

      <div className='text-black'>

        <img
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover"
          src="/payment.jpeg"
          alt="Smadona Foundation Rural Community Project"
        />
      </div>
      
      <div className="bg-white p-8 w-full mx-auto font-sans text-gray-800 ">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-8 uppercase tracking-wide">
            HELP SUSTAIN COMMUNITY-OWNED PROGRESS
          </h1>

          <div className="flex flex-col w-full md:flex-row items-center min-h-50  justify-around ">
            {/* Left Side Content */}
            <div className="flex flex-col min-h-40">
              <p className="text-lg mb-4">
                <span className="font-bold text-2xl">
                  {name ? `${name}, your` : "Your"}  
                </span>{" "}
                contribution supports sustainable development through our key focus areas —
                Water Access, Renewable Energy, Education Access, Agri-Livelihoods and General Fund.
              </p>
              <p className="text-lg font-medium mb-6">
                Transparent, impactful, and community-driven.
              </p>
              <p className="text-gray-600 italic">
                "Every donation creates opportunities, strengthens communities, and builds a brighter future for rural India."
              </p>
            </div>

            {/* Right Side QR Code Area */}
            <div className="flex flex-col items-center  min-h-40 ">
              <div className="border-2 border-gray-200 rounded-lg p-2 shadow-sm flex flex-col items-center">
                <h2 className="text-sm font-bold text-gray-600 text-center mb-2">OR SCAN TO DONATE NOW</h2>
                {/* Placeholder for QR Code image */}
                <div className="w-40 h-50 bg-gray-100 border border-gray-300 flex items-center justify-center">
                  <span className="text-xs text-gray-400">[QR Code Image]</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center max-w-[180px]">
                Supports all major digital payment platforms and bank transfers.
              </p>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default page
