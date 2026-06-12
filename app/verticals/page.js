import React from "react";

const Page = () => {
  return (
    <>
      <section className="py-10 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-5xl font-bold text-green-800 mb-6 tracking-tight">
              Our Verticals
            </h2>
            <p className="text-xl text-neutral-700 leading-relaxed">
              We focus on key integrated areas that drive holistic,
              sustainable community ownership. Explore our four pillars of
              impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Water Access Card */}
            <div className="bg-white rounded-3xl shadow-lg shadow-neutral-100 overflow-hidden flex flex-col md:flex-row border border-neutral-100">
              <div className="p-12 md:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="w-20 h-20 bg-teal-500/10 rounded-full flex items-center justify-center mb-10 border border-teal-500/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#004D40"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-droplet text-teal-900"
                    >
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                      <path
                        d="M12 20.31a6 6 0 0 0-3-5.22M12 20.31a6 6 0 0 1 3-5.22"
                        strokeDasharray="2 2"
                      />
                    </svg>
                  </div>

                  <h3 className="text-3xl font-semibold text-teal-950 mb-5 leading-snug">
                    Sustainable
                    <br />
                    Water Access
                  </h3>

                  <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                    Empowering communities to manage clean water systems and
                    improve sanitation.
                  </p>
                </div>

                <button className=" px-6 py-3 text-base sm:text-lg md:text-xl w-full rounded-3xl font-bold text-white bg-gradient-to-r from-[#0b3d26] to-[#2e8b57] hover:scale-105 duration-300 hover:text-xl hover:text-black">
            Learn More
            </button>
              </div>

              <div className="md:w-2/5 md:min-h-full">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  alt="Village water pump"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Renewable Energy Card */}
            <div className="bg-white rounded-3xl shadow-lg shadow-neutral-100 overflow-hidden flex flex-col md:flex-row border border-neutral-100">
              <div className="p-12 md:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="w-20 h-20 bg-teal-500/10 rounded-full flex items-center justify-center mb-10 border border-teal-500/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#004D40"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-sun text-teal-900"
                    >
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  </div>

                  <h3 className="text-3xl font-semibold text-teal-950 mb-5 leading-snug">
                    Renewable
                    <br />
                    Energy Solutions
                  </h3>

                  <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                    Installing solar-powered systems to power homes, schools,
                    and health clinics.
                  </p>
                </div>

                <button className=" px-6 py-3 text-base sm:text-lg md:text-xl w-full rounded-3xl font-bold text-white bg-gradient-to-r from-[#0b3d26] to-[#2e8b57] hover:scale-105 duration-300 hover:text-xl hover:text-black">
              Learn More
            </button>   
              </div>  
                                  

              <div className="md:w-2/5 md:min-h-full">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
                  alt="Solar panel installation"
                  className="w-full h-full object-cover"   
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;