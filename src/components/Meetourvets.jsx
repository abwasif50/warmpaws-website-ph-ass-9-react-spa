import React from "react";

const experts = [
  {
    id: 1,
    name: "Dr. Sarah Collins",
    specialty: "Canine Health Specialist",
    image: "https://i.ibb.co.com/vfPBXMW/images-2.jpg",
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    specialty: "Feline Nutrition Expert",
    image: "https://i.ibb.co.com/Lzkcz1ML/James-Wilson-House-MD.webp",
  },
  {
    id: 3,
    name: "Dr. Emily Roberts",
    specialty: "Pet Dermatologist",
    image: "https://i.ibb.co.com/JWDkrL5x/Emily-Roberts-251x300.jpg",
  },
  {
    id: 4,
    name: "Dr. Michael Lee",
    specialty: "Veterinary Surgeon",
    image: "https://i.ibb.co.com/v4hNtLZL/download-5.jpg",
  },
];



export default function MeetOurVets() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Meet Our Expert Vets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {experts.map((vet) => (


          <div
            key={vet.id}
            className="bg-emerald-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
          >


            <img
              src={vet.image}
              alt={vet.name}
              className="w-24 h-24 mx-auto  rounded-full  object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{vet.name}</h3>
            <p className="text-orange-700">{vet.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


