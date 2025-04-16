import React from "react";
import gothImage from "../goth.jpg"; // Import the image from the correct relative path

const Hero = () => {
    return (
        <section
            className="bg-cover bg-center py-32 px-6 text-center text-white"
            style={{
                backgroundImage: `url(${gothImage})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}
        >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-red-600 drop-shadow-xl">
                Welcome to Plant Haven 🖤
            </h1>
            <p className="text-lg md:text-xl mb-6 font-semibold text-gray-200 drop-shadow-lg">
                Your one-stop shop for all things green and growing.
            </p>
            <button className="bg-red-600 px-6 py-3 rounded-md hover:bg-red-700 transition duration-300 border-2 border-gray-900 shadow-xl">
                Shop Now
            </button>
        </section>
    );
};

export default Hero;
