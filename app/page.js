import Link from "next/link";
export default function Home() {
  return (
    <>
     <div className="relative w-full">
  {/* HERO SECTION */}
  <div className="relative w-full">
  {/* HERO SECTION */}
  <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
    
    {/* Background Image */}
    <img
      src="/background(s).jpeg"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover  object-center"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Hero Content */}
    <div className="absolute inset-0 flex items-center">
      <div className="px-4 md:px-8 w-[95%] md:w-2/3 z-10"> 
        
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          DRIVING TRUE DEVELOPMENT THROUGH SUSTAINABLE OWNERSHIP.
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sunt
          maiores dicta nemo tempore ullam debitis veniam deserunt, culpa at
          velit sint aperiam quaerat aut nihil non assumenda libero dolorum.
          Repellendus.
          
        </p>


        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="#explore-work">
            <button className="px-6 py-3 text-base sm:text-lg md:text-xl w-full sm:w-auto rounded-3xl font-bold text-white bg-gradient-to-r from-[#0b3d26] to-[#2e8b57] hover:scale-105 duration-300">
              EXPLORE OUR WORK
            </button>
          </Link>    

          <Link href="#footprint">
            <button className="px-6 py-3 text-base sm:text-lg md:text-xl w-full sm:w-auto rounded-3xl font-bold text-white bg-gradient-to-r from-[#0b3d26] to-[#2e8b57] hover:scale-105 duration-300">
              PARTNER WITH US
            </button>
          </Link>
        </div>

      </div>
    </div>

  </section>
</div>

{/* TRUST & CREDIBILITY SECTION */}
<div
  id="footprint"
  className="bg-gray-200 text-center py-10 px-4"
>
  <h2 className="text-2xl sm:text-3xl md:text-4xl text-green-800 font-bold">
    TRUST & CREDIBILITY STRIP
  </h2>

  <p className="text-black text-base md:text-xl mt-2">
    Our Collaborative Footprint
  </p>

  {/* Horizontal Scroll Container */}
  <div className="mt-8 overflow-x-auto hide-scrollbar pb-4">
    <div className="flex  gap-8 w-max px-2">
   

      {/* Partner 1 */}
      <div className="min-w-[200px] flex flex-col items-center flex-shrink-0">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
          src="https://ennoble.in/wp-content/uploads/2021/07/ennoble-logo-1024x240.png"
          alt="Ennoble Logo"
        />
        <p className="text-sm md:text-lg text-center mt-3 text-black">
          Ennoble Social Innovation Foundation
        </p>
      </div>

      {/* Partner 2 */}
      <div className="min-w-[200px] flex flex-col items-center flex-shrink-0">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
          src="https://th.bing.com/th/id/OIP.01o34mmB5153kNrYH5M7sAAAAA?w=108&h=108&c=1&bgcl=aa765e&r=0&o=7&dpr=1.3&pid=ImgRC&rm=3"
          alt="Hilmil Foundation"
        />
        <p className="text-sm md:text-lg text-center mt-3 text-black">
          Hilmil Foundation
        </p>
      </div>

      {/* Partner 3 */}
      <div className="min-w-[200px] flex flex-col items-center flex-shrink-0">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
          src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_1280.png"
          alt="GGUS Foundation"
        />
        <p className="text-sm md:text-lg text-center mt-3 text-black">
          GGUS Foundation
        </p>
      </div>

      {/* Partner 4 */}
      <div className="min-w-[200px] flex flex-col items-center flex-shrink-0">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
          src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_1280.png"
          alt="Ulhasnagar Municipal Corporation"
        />
        <p className="text-sm md:text-lg text-center mt-3 text-black">
          Ulhasnagar Municipal Corporation
        </p>
      </div>

      {/* Partner 5 */}
      <div className="min-w-[200px] flex flex-col items-center flex-shrink-0">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
          src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_1280.png"
          alt="Takshashila Vidyalaya"
        />
        <p className="text-sm md:text-lg text-center mt-3 text-black">
          Takshashila Vidyalaya
        </p>
      </div>

      {/* Partner 6 */}
      <div className="min-w-[200px] flex flex-col items-center flex-shrink-0">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
          src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_1280.png"
          alt="Partner 6"
        />
        <p className="text-sm md:text-lg text-center mt-3 text-black">
          Partner 6
        </p>
      </div>

      {/* Partner 7 */}
      <div className="min-w-[200px] flex flex-col items-center flex-shrink-0">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
          src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_1280.png"
          alt="Partner 7"
        />
        <p className="text-sm md:text-lg text-center mt-3 text-black">
          Partner 7
        </p>
      </div>

      {/* Partner 8 */}
      <div className="min-w-[200px] flex flex-col items-center flex-shrink-0">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
          src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_1280.png"
          alt="Partner 8"
        />
        <p className="text-sm md:text-lg text-center mt-3 text-black">
          Partner 8
        </p>
      </div>

      {/* Partner 9 */}
      <div className="min-w-[200px] flex flex-col items-center flex-shrink-0">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
          src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_1280.png"
          alt="Partner 9  "
        />
        <p className="text-sm md:text-lg text-center mt-3 text-black">
          Partner 9
        </p>
      </div>

    </div>

  
  </div>
</div>
</div>





     <div
  id="explore-work"
  className="w-full min-h-[50vh] text-center py-6 px-4"
>
  <h2 className="text-3xl md:text-4xl text-green-800 font-bold">
    WHAT WE DO
  </h2>

  <p className="text-gray-600 text-base md:text-xl mt-2">
    The 4 Pillars Infographic
  </p>

  {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto mt-8 max-w-7xl">

    {/* EDUCATION & SKILL */}
    <div className="rounded-3xl bg-gray-200 text-black flex flex-col items-center p-4 shadow-lg hover:scale-105 duration-300">
      <img
        className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-xl"
        src="https://static.vecteezy.com/system/resources/previews/028/963/463/non_2x/education-beautiful-close-up-image-ai-generated-free-photo.jpg"
        alt="Education & Skill"
      />

      <div className="text-xl md:text-2xl font-bold text-[#0b3d26] text-center mt-4">
        EDUCATION & SKILL
      </div>

      <ul className="text-left mt-3 text-base md:text-lg text-black space-y-1">
        <li>• Teacher Training</li>
        <li>• Skills Development</li>
        <li>• Financial Literacy</li>
      </ul>
    </div>

    {/* HEALTHCARE */}
    <div className="rounded-3xl bg-gray-200 text-black flex flex-col items-center p-4 shadow-lg hover:scale-105 duration-300">
      <img
        className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-xl"
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800"
        alt="Healthcare"
      />

      <div className="text-xl md:text-2xl font-bold text-[#0b3d26] text-center mt-4">
        HEALTHCARE
      </div>

      <ul className="text-left mt-3 text-base md:text-lg text-black space-y-1">
        <li>• Medical Health Camps</li>
        <li>• Health Awareness Programs</li>
      </ul>
    </div>

    {/* RURAL DEVELOPMENT */}
    <div className="rounded-3xl bg-gray-200 text-black flex flex-col items-center p-4 shadow-lg hover:scale-105 duration-300">
      <img
        className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-xl"
        src="https://th.bing.com/th/id/OIP.ow7Kx770-hvunLFNTWDVVwHaE9?rs=1&pid=ImgDetMain"
        alt="Rural Development"
      />

      <div className="text-xl md:text-2xl font-bold text-[#0b3d26] text-center mt-4">
        RURAL DEVELOPMENT
      </div>

      <ul className="text-left mt-3 text-base md:text-lg text-black space-y-1">
        <li>• Supporting Youth</li>
        <li>• Empowering Villages</li>
      </ul>
    </div>

    {/* ENVIRONMENT & WASH */}
    <div className="rounded-3xl bg-gray-200 text-black flex flex-col items-center p-4 shadow-lg hover:scale-105 duration-300">
      <img
        className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-xl"
        src="https://tse3.mm.bing.net/th/id/OIP.KA_5GS4u4-llmpYF_zOl0QHaHX?rs=1&pid=ImgDetMain"
        alt="Environment & Wash"
      />

      <div className="text-xl md:text-2xl font-bold text-[#0b3d26] text-center mt-4">
        ENVIRONMENT & WASH
      </div>

      <ul className="text-left mt-3 text-base md:text-lg text-black space-y-1">
        <li>• Smart Waste Management</li>
        <li>• Clean Water Access</li>
      </ul>
    </div>

  </div>
</div>




      <section className="bg-gray-50 min-h-[90vh] py-16 px-4 font-sans antialiased text-center">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl text-green-800 md:text-3xl font-bold tracking-wide uppercase">
            Our Latest Impact Stories
          </h2>

          <p className="text-xl text-gray-600 mt-1 mb-12">
            Our complete impact stories
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg duration-300">
              <div className="w-full h-48">
                <img
                  src="https://picsum.photos/seed/edu/600/400"
                  alt="Education"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">


                <h3 className="text-xl font-bold text-black mb-1">
                  Education
                </h3>

                <p className="text-gray-800 text-sm leading-snug flex-grow mb-4">
                  Ulhasnagar Teacher Training: 1,500 Teachers Certified.
                </p>

                <a
                  href="#"
                  className="text-green-700 font-bold text-sm hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg duration-300">
              <div className="w-full h-48">
                <img
                  src="https://picsum.photos/seed/health/600/400"
                  alt="Healthcare"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">


                <h3 className="text-xl font-bold text-black mb-1">
                  Healthcare
                </h3>

                <p className="text-gray-800 text-sm leading-snug flex-grow mb-4">
                  Remote WASH Project: Clean Water for 10 Villages.
                </p>

                <a
                  href="#"
                  className="text-green-700 font-bold text-sm hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg duration-300">
              <div className="w-full h-48">
                <img
                  src="https://picsum.photos/seed/livelihood/600/400"
                  alt="Rural Livelihood"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">


                <h3 className="text-xl font-bold text-black mb-1">
                  Rural Livelihood
                </h3>

                <p className="text-gray-800 text-sm leading-snug flex-grow mb-4">
                  Remote WASH Project: Clean Water for 10 Villages.
                </p>

                <a
                  href="#"
                  className="text-green-700 font-bold text-sm hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>

          </div>

          <button className="mt-12 bg-[#0b3d26] hover:bg-[#145c3a] text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Learn More
          </button>

        </div>
      </section>




      <div className="bg-gray-50 p-12 min-h-screen mt-2">
        <div className="container mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-green-800 mb-2">
              OUR KEY PROJECTS
            </h2>
            <p className="text-lg text-gray-700">
              Interactive projects
            </p>
          </div>



          {/* Card 1 */}
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="md:w-1/5 h-80  rounded-lg flex items-center justify-center text-gray-500">
              <img className="h-[37vh] md:h-[40vh] w-[30vh] object-cover " src="/books(s).jpeg" alt="water" />
            </div>

            <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Project STEM Rajasthan
                </h3>

                <p className="text-gray-700 mb-3">
                  Project Status | Education
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-green-600 rounded-full"
                      style={{ width: "10%" }}
                    />
                  </div>

                  <span className="text-sm text-black font-semibold">
                    10%
                  </span>

                  <span className="w-5 h-5 text-green-700">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>

                  <span className="text-black text-sm">
                    Ulhasnagar
                  </span>
                </div>

                <p className="text-gray-600">
                  Ulhasnagar <br />
                  Mumbai
                </p>
              </div>
 <Link href="/impact">
              <button className="px-6 py-3  text-base sm:text-lg md:text-xl w-full lg:w-1/4 rounded-3xl font-bold text-white bg-gradient-to-r from-[#0b3d26] to-[#2e8b57] hover:scale-105 duration-300 hover:text-black">
                Learn More
              </button>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg p-6">
            <div className="md:w-1/5 h-80  rounded-lg flex items-center justify-center text-gray-500">
              <img className="h-[35vh] md:h-[40vh] w-[30vh] object-cover" src="/water2(s).jpeg" alt="water" />
            </div>

            <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Ragpicker Rehabilitation Mumbai
                </h3>

                <p className="text-gray-700 mb-3">
                  Project Status | Livelihood
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-green-600 rounded-full"
                      style={{ width: "10%" }}
                    />
                  </div>

                  <span className="text-sm text-black font-semibold">
                    10%
                  </span>

                  <span className="w-5 h-5 text-green-700">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>

                  <span className="text-black text-sm">
                    Ulhasnagar
                  </span>
                </div>

                <p className="text-gray-600">
                  Ulhasnagar <br />
                  Mumbai
                </p>
              </div>

                  <Link href="/impact">
              <button className="px-6 py-3 text-base sm:text-lg md:text-xl w-full lg:w-1/4  rounded-3xl font-bold text-white bg-gradient-to-r from-[#0b3d26] to-[#2e8b57] hover:scale-105 duration-300 hover:text-black">
                Learn More
              </button>
</Link>
            </div>
          </div>

        </div>
      </div>



      <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16 mt-2">
        <div className="max-w-7xl mx-auto flex flex-col items-center">

          {/* Header */}
          <header className="mb-12 text-center">
            <h2 className="text-green-800 text-2xl md:text-3xl font-bold uppercase tracking-wide mb-2">
              MEET OUR FOUNDER & CEO
            </h2>

            <p className="text-gray-600 text-xl">
              Short biography and leadership vision
            </p>
          </header>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start w-full">

            {/* Left Section */}
            <div className="flex flex-col items-start space-y-4">
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://thumbs.dreamstime.com/b/serious-indian-professional-business-man-office-portrait-serious-young-ambitious-indian-businessman-project-leader-dressed-367980912.jpg"
                  alt="Founder & CEO"
                  className="w-full h-[100vh] object-cover grayscale"
                />
              </div>

              <div className="pl-2">
                <h3 className="text-green-800 text-2xl font-bold uppercase">
                  PRATIK
                </h3>

                <p className="text-gray-900 text-lg">
                  Founder & CEO
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="space-y-6 text-gray-900 text-base md:text-lg leading-relaxed">
              <h3 className="font-semibold border-b-2 border-[#D9A34C] pb-1 inline-block">
                About Pratik
              </h3>

              <p>
                With more than 10 years of experience in sustainability,
                community development, and environmental initiatives,
                Pratik has dedicated his career to creating meaningful
                change and empowering communities.
              </p>

              <p>
                He has successfully led projects focused on education,
                health, environmental conservation, and livelihood
                development, helping people build a more sustainable
                future.
              </p>

              <p>
                His vision is to inspire individuals and organizations
                to embrace sustainable practices while fostering
                innovation, responsibility, and long-term impact.
              </p>

              <p className="text-green-800 font-medium text-lg pt-2">
                “True sustainability begins when communities take
                ownership of their future and work together for
                meaningful change.”
              </p>
            </div>

          </div>
        </div>
      </section>



      <section className="w-full w-full mx-auto px-4 py-12 mt-2 bg-white">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 tracking-wide uppercase">
            Latest News & Blogs
          </h2>
          <p className="text-gray-500 text-xl md:text-xl mt-1">
            Recent articles & overviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="flex flex-col bg-white rounded-2xl overflow-hidden">
            <div className="w-full h-52 relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&auto=format&fit=crop"
                alt="E-Waste Management"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-5 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 leading-snug mb-2">
                The Future of E-Waste Management in India
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed mb-4 flex-grow">
                The future of E-waste management in this science innovation line in India truth.
              </p>
              <a href="#" className="mx-2 text-green-700 hover:text-green-800 font-bold text-xl inline-flex items-center transition-colors">
                Read More
              </a>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-2xl overflow-hidden">
            <div className="w-full h-52 relative rounded-2xl overflow-hidden">
              <img
                src="/books(s).jpeg"
                alt="Financial Literacy Villages"
                className="w-full h-[40vh] object-cover"
              />
            </div>
            <div className="pt-5 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 leading-snug mb-2">
                Education: The Foundation of Change
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed mb-4 flex-grow">
                Empowering young minds through education, nurturing confidence, knowledge, and opportunities for a better tomorrow.
              </p>
              <a href="#" className="mx-2 text-green-700 hover:text-green-800 font-bold text-xl inline-flex items-center transition-colors">
                Read More
              </a>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-2xl overflow-hidden ">
            <div className="w-full h-52 relative rounded-2xl overflow-hidden">
              <img
                src="/water(s).jpeg"
                alt="Financial Literacy Villages Alternative"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="pt-5 flex flex-col flex-grow ">
              <h3 className="text-xl font-bold text-gray-900 leading-snug mb-2">
                Community Development in Action
              </h3>
              <p className="text-gray-600 text-xl  leading-relaxed mb-4 flex-grow">
                Supporting rural communities by providing essential resources and creating pathways toward a more secure and sustainable future.
              </p>
              <a href="#" className="mx-2 text-green-700 hover:text-green-800 font-bold text-xl inline-flex items-center transition-colors">
                Read More
              </a>
            </div>
          </div>

        </div>
      </section>


    </>
  );
}
