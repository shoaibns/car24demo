import React from 'react'
import { BiSolidOffer } from "react-icons/bi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiPriceTag } from "react-icons/gi";
import { GiMechanicGarage } from "react-icons/gi";

function WhyChooseUs() {
    return (
        <div className='min-w-screen pt-28 pb-16 bg-[#405ff2]'>

            <h2 className='ml-6 font-bold text-gray-200 text-4xl'>Why Choose Us?</h2>

            <div className='mx-5 mt-9 flex items-center gap-x-16'>
                <div>
                    <span className='text-white text-5xl'><BiSolidOffer /></span>
                    <h2 className='text-gray-100 font-bold mt-6'>Special Financing Offers</h2>
                    <p className='text-gray-100 text-wrap mt-6'>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div>
                    <span className='text-white text-5xl'><VscWorkspaceTrusted /></span>
                    <h2 className='text-gray-100 font-bold mt-6'>Special Financing Offers</h2>
                    <p className='text-gray-100 text-wrap mt-6'>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div>
                    <span className='text-white text-5xl'><GiPriceTag /></span>
                    <h2 className='text-gray-100 font-bold mt-6'>Transparent Pricing</h2>
                    <p className='text-gray-100 text-wrap mt-6'>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div>
                    <span className='text-white text-5xl'><GiMechanicGarage /></span>
                    <h2 className='text-gray-100 font-bold mt-6'>Expert Car Service</h2>
                    <p className='text-gray-100 text-wrap mt-6'>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs