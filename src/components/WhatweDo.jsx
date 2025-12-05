
import React from "react";
import { FaDog, FaCat, FaHeartbeat, FaSnowflake } from "react-icons/fa";

const services = [
  {
    icon: <FaDog className="text-6xl text-blue-500" />,
    title: "Pet Clothing",
    description: "Stylish and warm winter clothes to keep your pets cozy and comfortable.",
  },
  {
    icon: <FaCat className="text-6xl text-red-500" />,
    title: "Skin & Paw Care",
    description: "Protective balms and skincare tips to keep your pets' skin healthy during winter.",
  },
  {
    icon: <FaHeartbeat className="text-6xl text-green-500" />,
    title: "Veterinary Advice",
    description: "Consult our professional vets for personalized winter care guidance.",
  },
  {
    icon: <FaSnowflake className="text-6xl text-teal-500" />,
    title: "Holiday & Outings",
    description: "Safe holiday ideas and outdoor play tips for pets in cold weather.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
