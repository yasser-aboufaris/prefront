import React from "react";

const Sidebar = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-black text-gray-300">
            <div className="w-64 h-screen bg-purple-900 text-purple-200 p-6 border-r border-purple-800">
                <div className="text-2xl font-bold flex items-center gap-2 mb-8 text-purple-300">
                    🌿 Plant Haven
                </div>
                <ul className="space-y-6 font-medium">
                    <li>
                        <a href="#dashboard" className="hover:text-purple-400 transition">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#orders" className="hover:text-purple-400 transition">
                            Orders
                        </a>
                    </li>
                    <li>
                        <a href="#products" className="hover:text-purple-400 transition">
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#customers" className="hover:text-purple-400 transition">
                            Customers
                        </a>
                    </li>
                    <li>
                        <a href="#settings" className="hover:text-purple-400 transition">
                            Settings
                        </a>
                    </li>
                </ul>
            </div>

            <div className="flex-1 p-6">
                {children}
            </div>
        </div>
    );
};

export default Sidebar;
