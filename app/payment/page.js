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

      if (data.success) {
        alert("Data saved successfully!");

        setForm({
          name: "",
          email: "",
          contact: "",
          donation_section: "",
          message: "",
        });

        router.push("/QR");
      }
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

          <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* LEFT SIDE FORM  */}









            {/* RIGHT SIDE FORM  */}
            <form onSubmit={handleSubmit} className="contents flex flex-col gap-6"
            //   onSubmit={handleSubmit}

            >

              {/* Name */}
              <div>

                <label className="text-black text-lg font-semibold">
                  Your Name
                </label>

                <input
                  className="w-full text-black border-2 border-gray-300 rounded-xl p-4 mt-2 outline-none focus:border-blue-500"
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
                  className="w-full text-black border-2 border-gray-300 rounded-xl p-4 mt-2 outline-none focus:border-blue-500"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                />
              </div>




              {/* contact */}

              <div>

                <label className="text-black text-lg font-semibold">
                  Contact number
                </label>

                <input
                  className="w-full text-black border-2 border-gray-300 rounded-xl p-4 mt-2 outline-none focus:border-blue-500"
                  type="number"
                  name="contact"
                  required
                  value={form.contact}
                  onChange={handleChange}
                  placeholder="Enter Your Contact Number"
                />
              </div>



              {/* sector where you want to donate */}
              <div>

                <label className="text-black text-lg font-semibold">
                  Sector you want to donate
                </label>

                <input
                  className="w-full text-black border-2 border-gray-300 rounded-xl p-4 mt-2 outline-none focus:border-blue-500"
                  type="text"
                  name="donation_section"
                  value={form.donation_section}
                  onChange={handleChange}
                  required
                  placeholder="Enter the sector you want to donate"
                />
              </div>

              <div>
                {/* message */}
                <div>

                  <label className="text-black text-lg font-semibold">
                    Any Message
                  </label>

                  <textarea
                    className="w-full border-2 text-black border-gray-300 rounded-xl p-4 mt-2 h-60 resize-none outline-none focus:border-blue-500"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                   
                    placeholder="Write your message here..."
                  />
                </div>
                {/* Button */}
                <div className="flex justify-center items-center lg:justify-center ">


                  <button
                    type="submit"
                    className="rounded-3xl w-1/2 text-center bg-gradient-to-r from-[#1c905a] to-[#39895b] px-6 py-3 text-base font-bold text-white transition duration-300 hover:scale-105 hover:text-black"
                  >
                    Submit
                  </button>
                </div>
              </div>




            </form>











          </div>
        </div>
      </div>


    </div>
  )
}

export default page
