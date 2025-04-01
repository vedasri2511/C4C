import React from "react";
const About = () => (
    <div className="p-8 text-center text-2xl bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-800">About Connect for Cause</h2>
      <p className="mt-4 text-gray-600">We are committed to creating a sustainable future by connecting NGOs with communities. Our mission is to facilitate effective waste management and ensure cleaner surroundings.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src="https://i.pinimg.com/originals/c1/45/43/c14543641806429d8a7dfc53f954d799.jpg" alt="About Us" className="w-full h-80 object-cover rounded-lg shadow-md" />
        <div>
          <h3 className="text-3xl font-semibold text-gray-700">Our Impact</h3>
          <ul className="list-disc mt-4 ml-8 text-gray-600">
            <li>Facilitating clean-up drives with NGOs</li>
            <li>Providing a platform for citizens to report waste-affected areas</li>
            <li>Ensuring efficient coordination for waste management</li>
          </ul>
        </div>
      </div>
    </div>
  );
  export default About;