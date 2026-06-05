import React from 'react'

const page = () => {
  return (
    <>

    <div className='text-black'>
        <img className=" object-cover w-full h-[350] " src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/20.gif?token-hash=f_0zmyi9EgukDY-tDcfYi7hD-zWZaXdxGqbqAxYUAxw%3D&token-time=1780531200" alt="" elementtiming="Creator Public Page : Base Page" data-is-key-element="true"></img>
           

        
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
           Your contribution supports sustainable development through our key focus areas — . <span className="font-semibold">'Water Access, Renewable Energy, Education Access, Agri-Livelihoods and General Fund'</span> – 
            
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
