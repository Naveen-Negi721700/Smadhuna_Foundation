"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
       
const Page = () => {
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
      const res = await fetch("/api/involved-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Form Submitted Successfully");

        setForm({
          name: "",
          email: "",
          contact: "",
          donation_section: "",
          message: "",
        });   
      } else {
        alert("Failed to submit form");
      }
      router.push(`/QR?name=${encodeURIComponent(form.name)}`);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="bg-gray-200 py-12 px-4 md:px-8 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-2xl"
      >
        {/* Name */}
        <div>
          <label className="text-black text-lg font-semibold">
            Your Name
          </label>

          <input
            className="w-full border-2 text-black border-gray-300 rounded-xl p-4 mt-2 outline-none focus:border-blue-500"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
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
            value={form.email}
            onChange={handleChange}
            required
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
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            required
            placeholder="Enter Your Contact Number"
          />
        </div>

        {/* Involvement */}
        <div>
          <label className="text-black text-lg font-semibold">
            How would you like to get involved?
          </label>

          <select
            className="w-full text-black border-2 border-gray-300 rounded-xl p-4 mt-2 outline-none focus:border-[#1c905a] bg-white"
            name="donation_section"
            value={form.donation_section}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Partner With Us">Partner With Us</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Donate">Donate</option>
          </select>
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

        <div className="flex justify-center lg:justify-start">
          <button
            type="submit"
            className="px-6 py-3 text-base sm:text-lg md:text-xl w-full sm:w-auto rounded-3xl font-bold text-white bg-gradient-to-r from-[#0b3d26] to-[#2e8b57] hover:scale-105 duration-300"
          >
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;