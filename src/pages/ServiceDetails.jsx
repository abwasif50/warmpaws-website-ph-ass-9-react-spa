
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";


export default function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [service, setService] = useState(null);

  useEffect(() => {

    if (!user) {
      navigate("/login");
    } else {
      fetch("/services.json")
        .then((res) => res.json())
        .then((data) => {
          const found = data.find((s) => s.serviceId === parseInt(id));
          setService(found || null);
        })
        .catch((err) => console.error(err));
    }
  }, [id, user, navigate]);

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success(`Service "${service.serviceName}" booked successfully!`);
    e.target.reset();
  };

  if (!service) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{service.serviceName}</h1>
      <img
        src={service.image}
        alt={service.serviceName}
        className="w-full max-w-md mx-auto  mb-4 object-cover rounded-2xl"
      />
      <div className="text-center py-5 bg-gray-200 rounded-2xl">
      <p className="mb-2"><strong>Provider:</strong> {service.providerName}</p>
      <p className="mb-2"><strong>Email:</strong> {service.providerEmail}</p>
      <p className="mb-2"><strong>Price:</strong> ${service.price}</p>


      <p className="mb-2"><strong>Rating:</strong> {service.rating}</p>

      <p className="mb-2"><strong>Slots Available:</strong> {service.slotsAvailable}</p>
      <p className="mb-4"><strong>Description:</strong> {service.description}</p>
</div>
      <form onSubmit={handleBooking} className="max-w-md text-black p-5 rounded-lg bg-blue-200 mt-5 mx-auto">
        <h2 className="text-xl font-semibold mb-2">Book Service</h2>
        <input
          type="text"
          placeholder="Name"
          defaultValue={user?.displayName || ""}
          required
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          defaultValue={user?.email || ""}
          required
          className="w-full mb-2 p-2 border rounded"
        />
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}
