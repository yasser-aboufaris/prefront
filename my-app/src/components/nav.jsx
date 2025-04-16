import React from "react";

const NavBar = () => {
    return (
        <nav className="bg-black text-gray-300 px-6 py-4 flex justify-between items-center shadow-lg border-b-2 border-red-700">
            <div className="text-3xl font-extrabold flex items-center gap-2 text-red-700">
                🖤 Plant Haven
            </div>
            <ul className="flex gap-8 font-semibold">
                <li>
                    <a href="#home" className="hover:text-red-500 transition duration-300">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#shop" className="hover:text-red-500 transition duration-300">
                        Shop
                    </a>
                </li>
                <li>
                    <a href="#about" className="hover:text-red-500 transition duration-300">
                        About
                    </a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-red-500 transition duration-300">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
