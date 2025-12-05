
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";


import { useNavigate } from "react-router-dom";

export default function ServiceCard() {

  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))

      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Popular Winter Care Services</h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.serviceId}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{service.serviceName}</h3>
              <div className="flex items-center mb-2 gap-1">
              
                <span>{service.rating}</span>  <FaStar className="text-yellow-400 mr-1" />
              </div>
              <p className="text-gray-700 font-bold mb-2">${service.price}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full"
                onClick={() => navigate(`/services/${service.serviceId}`)}
              >
                View Details
              </button>
            </div>
          </div>

          
        ))}
      </div>
    </div>
  );
}









