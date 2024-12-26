// import React from 'react'
// import { MdArrowOutward } from "react-icons/md";

// function LoanCalculator() {
//     return (
//         // <div className='min-w-screen min-h-screen bg-gray-800  bg-cover bg-center bg-no-repeat'
//         <div className='min-w-screen bg-gray-800  bg-cover bg-center bg-no-repeat pl-6 pt-16'
//             style={{
//                 backgroundImage: "url('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//             }}
//         >
//             <div className="calculator w-2/5 bg-white rounded-xl flex flex-col justify-center items-center px-8">
//                 <h2 className='text-3xl font-bold py-12' >Auto Loan Calculator</h2>

//                 <p className='text-wrap text-gray-900 mb-9'>Use this car payment calculator to estimate monthly payments on your next new or used auto loan.</p>

//                 <div>
//                     <form className=' flex flex-col items-center flex-wrap bg-red-400' action="#">
//                         <label htmlFor="">Vehicle Price ($)</label>
//                         <input className='w-1/2 border rounded-lg py-4 px-4' type="text" placeholder='45$' />

//                         <label htmlFor="">Interest Rate</label>
//                         <input className='w-1/2 border rounded-lg py-4 px-4' type="text" placeholder='5' />

//                         <label htmlFor="">Period (months)</label>
//                         <input className='w-1/2 border rounded-lg py-4 px-4' type="text" placeholder='36' />

//                         <label htmlFor="">Down Payment</label>
//                         <input className='w-1/2 border rounded-lg py-4 px-4' type="text" placeholder='$45.000' />

//                     </form>
//                     <button className='mt-5 w-full text-center text-gray-50 px-5 py-3 bg-blue-600 rounded-lg flex justify-center items-center gap-x-2'>
//                         Calculate <span><MdArrowOutward /></span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LoanCalculator



import React from "react";
import { MdArrowOutward } from "react-icons/md";

function LoanCalculator() {
    return (
        <div
            className="min-w-screen bg-gray-800 bg-cover bg-center bg-no-repeat pl-6 pt-16 min-h-screen "
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
        >
            <div className="calculator w-2/5 bg-white rounded-xl flex flex-col justify-center items-center px-8 py-8 shadow-lg">
                <h2 className="text-3xl font-bold py-4 text-gray-900">Auto Loan Calculator</h2>

                <p className="text-gray-600 mb-8 text-center">
                    Use this car payment calculator to estimate monthly payments on your next new or used auto loan.
                </p>

                <form className="w-full flex flex-col gap-y-5">
                    <div className="flex gap-4">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="vehicle-price" className="mb-2 text-gray-700 font-medium">
                                Vehicle Price ($)
                            </label>
                            <input
                                id="vehicle-price"
                                className="border rounded-lg py-3 px-4 text-gray-800 w-full focus:outline-blue-500"
                                type="text"
                                placeholder="$45,000"
                            />
                        </div>

                        <div className="flex flex-col w-1/2">
                            <label htmlFor="interest-rate" className="mb-2 text-gray-700 font-medium">
                                Interest Rate
                            </label>
                            <input
                                id="interest-rate"
                                className="border rounded-lg py-3 px-4 text-gray-800 w-full focus:outline-blue-500"
                                type="text"
                                placeholder="5%"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="period" className="mb-2 text-gray-700 font-medium">
                                Period (months)
                            </label>
                            <input
                                id="period"
                                className="border rounded-lg py-3 px-4 text-gray-800 w-full focus:outline-blue-500"
                                type="text"
                                placeholder="36"
                            />
                        </div>

                        <div className="flex flex-col w-1/2">
                            <label htmlFor="down-payment" className="mb-2 text-gray-700 font-medium">
                                Down Payment
                            </label>
                            <input
                                id="down-payment"
                                className="border rounded-lg py-3 px-4 text-gray-800 w-full focus:outline-blue-500"
                                type="text"
                                placeholder="$5,000"
                            />
                        </div>
                    </div>

                    <button className="mt-5 w-full text-center text-gray-50 px-5 py-3 bg-blue-600 rounded-lg flex justify-center items-center gap-x-2 hover:bg-blue-700 transition">
                        Calculate <MdArrowOutward />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoanCalculator;
