import React from 'react'
import { IoCheckmarkOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

function GetStarted() {
    return (
        <div className='min-w-sceen bg-gray-100 p-8'>
            <div className="top">
                <div className="get-details-box flex gap-x-8">
                    <div className="car-img w-1/2 flex gap-x-6">
                        <div className="img-left flex flex-col gap-y-8">
                            <img className='rounded-lg' src="https://creativelayers.net/themes/boxcar-html/images/resource/pricing9-1.jpg" alt="" />
                            <img className='rounded-lg w-[200px] h-[200px] self-end' src="https://creativelayers.net/themes/boxcar-html/images/resource/pricing9-2.jpg" alt="" />
                        </div>
                        <div className="img-right self-end">
                            <img className='rounded-lg' src="https://creativelayers.net/themes/boxcar-html/images/resource/pricing9-3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="get-details w-1/2 pl-16">
                        <h2 className='text-gray-950 font-bold text-4xl text-wrap leading-[40px]'>Get A Fair Price For Your <br /> Car Sell To Us Today</h2>
                        <p className='mt-6 pb-12 text-gray-600'>We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of.</p>
                        <ul>
                            <li className='text-gray-600 pb-5 flex items-center gap-x-2'>
                                <span className='w-5 h-5 rounded-full bg-gray-400 flex justify-center items-center'><IoCheckmarkOutline /></span>
                                We are the UK’s largest provider, with more patrols in more places</li>
                            <li className='text-gray-600 pb-5 flex items-center gap-x-2'>
                                <span className='w-5 h-5 rounded-full bg-gray-400 flex justify-center items-center'><IoCheckmarkOutline /></span>
                                You get 24/7 roadside assistance</li>
                            <li className='text-gray-600 pb-5 flex items-center gap-x-2'>
                                <span className='w-5 h-5 rounded-full bg-gray-400 flex justify-center items-center'><IoCheckmarkOutline /></span>
                                We fix 4 out of 5 cars at the roadside</li>
                        </ul>
                        <button className='mt-5 text-gray-50 px-5 py-3 bg-blue-600 rounded-lg flex items-center gap-x-2'>Get Started <span><MdArrowOutward /></span></button>
                    </div>
                </div>
                <div className="history  mt-16  border-b">
                    <ul className='w-3/4 mx-auto mb-8 flex gap-x-10 justify-between items-center'>
                        <li className=' flex flex-col items-center justify-center'>
                            <p className='font-bold text-3xl'>834M</p>
                            <p className='pt-4'>CARS FOR SALE</p>
                        </li>
                        <li className=' flex flex-col items-center justify-center'>
                            <p className='font-bold text-3xl'>732M</p>
                            <p className='pt-4'>DEALER REVIEWS</p>
                        </li>
                        <li className=' flex flex-col items-center justify-center'>
                            <p className='font-bold text-3xl'>90M</p>
                            <p className='pt-4'>VISITORS PER DAY</p>
                        </li>
                        <li className=' flex flex-col items-center justify-center'>
                            <p className='font-bold text-3xl'>236M</p>
                            <p className='pt-4'>VERIFIED DEALERS</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom mt-14 flex justify-between gap-x-6 ">
                {/* onclick on comlete card */}
                <div
                    className="lef w-1/2 h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-xl"
                    style={{
                        backgroundImage: "url('https://creativelayers.net/themes/boxcar-html/images/resource/blog3-1.jpg')",
                    }}

                >
                    <div className='w-3/4 mt-10 '>
                        <h3 className='font-bold mb-5 text-3xl text-white '>Are You Looking For a Car ?</h3>
                        <p className='text-white'>We are committed to providing our customers with exceptional service.</p>
                        <button className='mt-5 px-5 py-3 bg-gray-100 rounded-lg '>Get Started </button>

                    </div>
                </div>
                {/* onclick on comlete card */}
                <div
                    className="right w-1/2 flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-xl"
                    style={{
                        backgroundImage: "url('https://creativelayers.net/themes/boxcar-html/images/resource/blog3-2.jpg')",
                    }}
                >
                    <div className='w-3/4 mt-10'>
                        <h3 className='font-bold mb-5 text-3xl text-white '> Do You Want to Sell a Car ?</h3>
                        <p className='text-white'>We are committed to providing our customers with exceptional service.</p>
                        <button className='mt-5 px-5 py-3 bg-gray-100 rounded-lg '>Get Started </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted