import React from "react";

const Page = () => {
  return (
    <div className="bg-emerald-950 text-white min-h-screen p-8 md:p-12 lg:p-16">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
          Theory of Change
        </h1>
      </header>

      {/* Main Flow Diagram */}
      <main className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch relative">

        {/* Inputs */}
        <div className="md:w-1/5 p-6 bg-emerald-900 border-2 border-white rounded-3xl shadow-lg flex flex-col items-center">
          <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
            <img
              src="/books(s).jpeg"
              alt="Community resources"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-left w-full space-y-3">
            <h3 className="text-2xl font-semibold text-emerald-100">
              Inputs
            </h3>

            <p className="text-sm text-emerald-200">
              Community resources, foundation funding, existing vertical
              projects (Water, Energy, Education).
            </p>

            <p className="text-sm text-emerald-200">
              Community knowledge, funds, and integrated solutions.
            </p>
          </div>
        </div>

        {/* Activities */}
        <div className="md:w-1/5 p-6 bg-emerald-900 border-2 border-white rounded-3xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-emerald-100">
            Activities
          </h3>

          <div className="space-y-6">
            {[
              { icon: "🤝", text: "Empowering communities" },
              { icon: "🛠️", text: "Skill training" },
              { icon: "🏗️", text: "Infrastructure installation" },
              { icon: "🗺️", text: "Community-led planning" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outputs */}
        <div className="md:w-1/5 p-6 bg-emerald-900 border-2 border-white rounded-3xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-emerald-100">
            Outputs
          </h3>

          <div className="space-y-6">
            {[
              { icon: "🚰", text: "Installed water systems" },
              { icon: "☀️", text: "Powered households/facilities" },
              { icon: "🎓", text: "Trained women and youth" },
              { icon: "🏫", text: "Built schools" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="md:w-1/5 p-6 bg-emerald-900 border-2 border-white rounded-3xl shadow-lg">
          <h3 className="text-2xl font-semibold text-center text-emerald-100">
            Outcomes
          </h3>

          <p className="text-sm text-center text-emerald-200 mb-6">
            (Short / Medium-term)
          </p>

          <div className="space-y-6">
            {[
              { icon: "🧑‍⚕️", text: "Improved community health" },
              { icon: "💰", text: "Increased household incomes" },
              { icon: "📚", text: "Enhanced educational outcomes" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="md:w-1/5 p-8 bg-yellow-700 rounded-3xl shadow-xl border-4 border-yellow-800 flex flex-col justify-between text-center">
          <div>
            <svg
              className="w-16 h-16 mx-auto mb-6 text-yellow-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>

            <h3 className="text-2xl font-bold mb-4">Impact</h3>
          </div>

          <div className="border-t border-yellow-500 pt-6">
            <p className="text-lg font-bold uppercase">
              Sustainable Community Ownership
            </p>

            <p className="text-yellow-100 mt-2">
              Intergenerational Poverty Reduction
            </p>

            <p className="text-yellow-100">
              Self-Reliant Communities
            </p>
          </div>
        </div>
      </main>

   
    </div>
  );    
};        

   
export default Page;
    
