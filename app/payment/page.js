"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


const page = () => {

  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    donation_section: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();



      if (!response.ok) {
        alert(data.error || "Server Error");
        return;
      }

      alert("Data saved successfully!");

      setForm({
        name: "",
        email: "",
        contact: "",
        donation_section: "",
        message: "",
      });

    router.push(`/QR?name=${encodeURIComponent(form.name)}`);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <div className=" px-4 md:px-10 pb-10">

        {/* Heading */}


        {/* Main Contact Box */}
        <div className="flex flex-col justify-center items-center mt-10">
          <h1 className="text-white text-3xl mb-4 sm:text-4xl lg:text-6xl font-bold text-center">
            Your Details
          </h1>
          <div className="w-full max-w-7xl bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT SIDE */}
            <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-[#0b3d26] to-[#1c905a] rounded-3xl p-10 text-white relative overflow-hidden">

              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/10 rounded-full translate-y-20 -translate-x-20"></div>

              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">
                  Support a Better Tomorrow
                </h2>

                <p className="text-lg text-green-100 leading-relaxed mb-10">
                  Every contribution helps us create sustainable change through
                  education, environmental conservation, community development,
                  and social empowerment initiatives.
                </p>

                <div className="space-y-8">

                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🌱</div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        Sustainable Development
                      </h3>
                      <p className="text-green-100">
                        Supporting impactful environmental projects.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📚</div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        Education
                      </h3>
                      <p className="text-green-100">
                        Creating opportunities for lifelong learning.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🤝</div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        Community Impact
                      </h3>
                      <p className="text-green-100">
                        Empowering communities through collective action.
                      </p>
                    </div>
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-4 mt-10">

                  <div className="text-center">
                    <h4 className="text-3xl font-bold">5000+</h4>
                    <p className="text-sm text-green-100">
                      Lives Impacted
                    </p>
                  </div>

                  <div className="text-center">
                    <h4 className="text-3xl font-bold">25+</h4>
                    <p className="text-sm text-green-100">
                      Partners
                    </p>
                  </div>

                  <div className="text-center">
                    <h4 className="text-3xl font-bold">10+</h4>
                    <p className="text-sm text-green-100">
                      States
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >

              <div className="text-center mb-2">
                <h2 className="text-3xl font-bold text-[#0b3d26]">
                  Donation Details
                </h2>
                <p className="text-gray-500 mt-2">
                  Fill in your information to continue.
                </p>
              </div>

              {/* Name */}
              <div>
                <label className="text-black text-lg font-semibold">
                  Your Name
                </label>

                <input
                  className="w-full text-black border-2 border-gray-300 rounded-xl p-4 mt-2 outline-none focus:border-[#1c905a]"
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-black text-lg font-semibold">
                  Your Email
                </label>

                <input
                  className="w-full text-black border-2 border-gray-300 rounded-xl p-4 mt-2 outline-none focus:border-[#1c905a]"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                />
              </div>

              {/* Contact */}
              <div>
                <label className="text-black text-lg font-semibold">
                  Contact Number
                </label>

                <input
                  className="w-full text-black border-2 border-gray-300 rounded-xl p-4 mt-2 outline-none focus:border-[#1c905a]"
                  type="number"
                  name="contact"
                  required
                  value={form.contact}
                  onChange={handleChange}
                  placeholder="Enter Your Contact Number"
                />
              </div>

              {/* Sector */}
              <div>
                <label className="text-black text-lg font-semibold">
                  Sector You Want To Donate
                </label>

                <input
                  className="w-full text-black border-2 border-gray-300 rounded-xl p-4 mt-2 outline-none focus:border-[#1c905a]"
                  type="text"
                  name="donation_section"
                  required
                  value={form.donation_section}
                  onChange={handleChange}
                  placeholder="Education, Environment, Healthcare..."
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-black text-lg font-semibold">
                  Any Message
                </label>

                <textarea
                  className="w-full border-2 text-black border-gray-300 rounded-xl p-4 mt-2 h-40 resize-none outline-none focus:border-[#1c905a]"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                />
              </div>

              {/* Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  onClick={() => alert("Your detail is being processed.")}
                  className="w-full md:w-1/2 rounded-2xl bg-gradient-to-r from-[#0b3d26] to-[#1c905a] px-6 py-4 text-lg font-bold text-white"
                >
                  Continue →
                </button>
              </div>

            </form>
          </div>
        </div>



      </div>




    </div>
  )
}

export default page
