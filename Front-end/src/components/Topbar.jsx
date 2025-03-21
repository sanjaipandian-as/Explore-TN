import React from 'react';
import { FaBell } from 'react-icons/fa';

const Topbar = () => {
    return (
        <div className="flex items-center py-4 px-6 bg-[#0c1220] text-white gap-4">
            <div className="flex items-center w-[50%] relative">
                <input
                    type="text"
                    placeholder="Search for your favourite destination"
                    className="w-full px-4 py-4 bg-[#131a2a] placeholder-gray-400 focus:outline-none text-white pr-28"
                    style={{ borderRadius: '12px' }}
                />
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-lime-400 hover:bg-lime-500 text-black px-6 py-4"
                    style={{ borderRadius: '12px' }}
                >
                    Search
                </button>
            </div>
            <div
                className="relative bg-[#1f1f2e] p-4 cursor-pointer hover:bg-lime-400 transition-colors duration-300 group"
                style={{ borderRadius: '30px' }}
            >
                <FaBell className="text-gray-300 text-xl transition-colors duration-300 group-hover:text-black" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>

        </div>
    );
};

export default Topbar;
