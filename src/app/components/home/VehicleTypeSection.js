'use client'
import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function VehicleTypeSection() {
    const [selectedItem, setSelectedItem] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (item) => {
        setSelectedItem(item);
    };


    // Step 1: Define the state for active slide index

    const cards = [
        { id: 1, title: "Truck", description: "A vehicle for heavy-duty work." },
        { id: 2, title: "Sedan", description: "Comfortable and compact vehicle." },
        { id: 3, title: "Coupe", description: "Stylish and sporty car." },
        { id: 4, title: "Convertible", description: "Open-air driving experience." },
        { id: 5, title: "SUV", description: "Spacious and versatile vehicle." },
        { id: 6, title: "VAN", description: "Perfect for large families." },
        { id: 7, title: "Hatchback", description: "Compact and fuel-efficient." },
        { id: 8, title: "Vegan", description: "Eco-friendly and sustainable car." },
        { id: 9, title: "Hybrid", description: "Energy-efficient with electric support." },
    ];

    // Step 2: Handle next and previous arrows
    const goToNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const goToPrevious = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className='w-min-screm bg-[#050b20] flex flex-col items-center'>
            <h1 className='text-4xl mb-14 text-center py-10 text-gray-50'>A Vehicle For Every Lifestyle</h1>
            <div className="mb-5 carosal-nav w-3/4">
                <ul className='flex justify-between items-center'>
                    {/* letter convert this class on select */}
                    <li><button className='text-gray-50 py-2 px-5 border border-gray-100-100 rounded-full'>Sedan</button></li>
                    <li><button className='text-gray-50 py-2 px-5 border border-gray-100-100 rounded-full'>Coupe</button></li>
                    <li><button className='text-gray-50 py-2 px-5 border border-gray-100-100 rounded-full'>Truck</button></li>
                    <li><button className='text-gray-50 py-2 px-5 border border-gray-100-100 rounded-full'>Convertable</button></li>
                    <li><button className='text-gray-50 py-2 px-5 border border-gray-100-100 rounded-full'>SUV</button></li>
                    <li><button className='text-gray-50 py-2 px-5 border border-gray-100-100 rounded-full'>VAN</button></li>
                    <li><button className='text-gray-50 py-2 px-5 border border-gray-100-100 rounded-full'>Hachtback</button></li>
                    <li><button className='text-gray-50 py-2 px-5 border border-gray-100-100 rounded-full'>Vegan</button></li>
                    <li><button className='text-gray-50 py-2 px-5 border border-gray-100-100 rounded-full'>Hybrid</button></li>
                </ul>
            </div>
            {/* Replace  Carousel*/}
            {/* Carousel */}
            <div className="w-3/4 ">
                <div className="flex overflow-hidden">
                    {/* Step 3: Display 3 visible cards */}
                    {cards.slice(activeIndex, activeIndex + 3).map((card) => (
                        <div
                            key={card.id}
                            className="flex-shrink-0 w-full p-4 bg-gray-800 text-white rounded-lg shadow-md mx-2"
                        >
                            <img src="https://placehold.co/200x100" alt="" />
                            <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>

                {/* Step 4: Left and Right Arrows */}
                <div className="py-6 flex items-center justify-center gap-x-3 " >
                    <button className='text-gray-50 py-2 px-5 border border-gray-100-100 rounded-full' onClick={goToPrevious}><IoIosArrowBack /></button>
                    <button className='text-gray-50 py-2 px-5 border border-gray-100-100 rounded-full' onClick={goToNext}><IoIosArrowForward /></button>
                </div>

            </div>
        </div>
    )
}

export default VehicleTypeSection
