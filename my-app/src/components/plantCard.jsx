import React from "react";

function PlantCard({ plant, onAddToCart }) {
  return (
    <div className="bg-black rounded-lg overflow-hidden border border-red-700 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img
          src={plant.image || "https://via.placeholder.com/400"} // Fallback image in case plant.image is missing
          alt={plant.name || "Plant"} // Default alt text if plant.name is not available
          className="w-full h-64 object-cover opacity-80 hover:opacity-100 transition-opacity"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-medium border border-red-500">
            ${plant.price}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-serif text-red-500 mb-2">{plant.name}</h2>
        <p className="text-gray-300 mb-4 text-sm">{plant.description}</p>
        <button
          onClick={() => onAddToCart(plant)}
          className="w-full bg-red-800 hover:bg-red-700 text-white px-4 py-2 rounded font-serif tracking-wide border border-red-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default PlantCard;
