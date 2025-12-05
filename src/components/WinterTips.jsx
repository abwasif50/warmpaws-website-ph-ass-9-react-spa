
import React from "react";

const tips = [
  {
    id: 1,
    title: "Keep Your Pet Warm",
    description:
      "Use cozy sweaters, coats, or blankets to keep your pets warm during winter.",
  },
  {
    id: 2,
    title: "Protect Their Paws",
    
    description:
      "Apply paw balm or use booties to prevent frostbite and cracked pads.",
  },
  {
    id: 3,
    title: "Maintain Proper Diet",
    description:
      "Ensure your pet receives extra calories and nutrients to stay healthy in cold weather.",
  },
  {
    id: 4,
    title: "Limit Outdoor Time",
    description:
      "Avoid prolonged exposure to cold temperatures, especially for small or senior pets.",
  },
];

export default function WinterTips() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl animate-pulse font-bold mb-6">Winter Care Tips for Pets</h2>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-blue-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
            <p className="text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
