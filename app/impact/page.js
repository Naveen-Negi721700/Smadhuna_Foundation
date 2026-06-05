import React from 'react'

const page = () => {
  return (
    <div>
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
            Media & Recognition
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            In The Headlines
          </p>
          <div className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            See how our water sustainability initiatives and global partnerships are making an impact around the world.
          </div>
        </div>

        {/* Newspaper Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Article Card 1 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="relative min-h-[65vh] bg-gray-100">
              

              <img  src="/page1(s).jpeg" alt="" />


            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium text-amber-600 uppercase tracking-wider">
                  Regional Press
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900 leading-tight">
                  Water For Life Campaign Brings Vital Relief to Tribal Regions
                </h3>
                <p className="mt-3 text-sm text-gray-600 line-clamp-4">
                  A massive joint effort has successfully delivered clean drinking water distribution systems to remote rural communities suffering under prolonged drought conditions.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Thane Edition</span>
                <span>May 21, 2026</span>
              </div>
            </div>
          </div>

          {/* Article Card 2 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="relative min-h-[65vh] bg-gray-100">
                 <img src="/page2(s).jpeg" alt="" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
                  National Update
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900 leading-tight">
                  Strategic Alliance Targets Core Infrastructure Renewal
                </h3>
                <p className="mt-3 text-sm text-gray-600 line-clamp-4">
                  New partnership strategies look beyond temporary assistance to focus heavily on long-term ecological solutions, including sub-surface dams and digital supply monitoring.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>National Daily</span>
                <span>May 17, 2026</span>
              </div>
            </div>
          </div>

          {/* Article Card 3 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col md:col-span-2 lg:col-span-1">
            <div className="relative min-h-[65vh] bg-gray-100">
                 <img src="/page3(s).jpeg" alt="" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium text-emerald-600 uppercase tracking-wider">
                  Community Impact
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900 leading-tight">
                  Sustainable Transformation Reaches 300+ Local Families
                </h3>
                <p className="mt-3 text-sm text-gray-600 line-clamp-4">
                  Local volunteer organizations and welfare societies join hands to build localized ecosystems, reducing daily water transit walk times for rural workers significantly.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Regional Dispatch</span>
                <span>May 20, 2026</span>
              </div>
            </div>
          </div>

        </div>

        {/* Call to Action Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Want to learn more about our ongoing field programs? 
            <a href="#documentation" className="ml-1 font-medium text-blue-600 hover:text-blue-500 underline">
              Access the press archives
            </a>
          </p>
        </div>

      </div>
    </section>
    </div>
  )
}

export default page
