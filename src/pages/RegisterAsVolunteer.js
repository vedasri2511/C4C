import React from "react";
import BackgroundSection from "../components/BackgroundSection";

const RegisterAsVolunteer = () => (
  <BackgroundSection>
    <h2 className="text-3xl font-bold">Register as Volunteer</h2>
    <div className="mt-6 space-y-4">
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg text-black" />
        <input type="email" placeholder="Email" className="w-full p-3 rounded-lg text-black" />
        <input type="phone" placeholder="Phone Number" className="w-full p-3 rounded-lg text-black" />
        <textarea placeholder="Why do you want to volunteer?" className="w-full p-3 rounded-lg text-black" rows="4"></textarea>
        <button className="bg-yellow-400 text-black py-2 px-6 rounded-lg">Submit</button>
      </form>
    </div>
  </BackgroundSection>
);

export default RegisterAsVolunteer;
