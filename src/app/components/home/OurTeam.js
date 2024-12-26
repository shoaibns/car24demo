import React from 'react'

function OurTeam() {
    return (
        <div className='min-w-screen pt-28 pb-16 bg-white'>
            <h2 className='ml-6 font-bold text-gray-950 text-4xl'>Our Team</h2>
            <div className='tam mt-10 flex items-center justify-center gap-x-4'>

                <div className="memeber">
                    <div
                        className="lef w-[226px] h-[320px] flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 scale-100 group-hover:scale-105"
                            style={{
                                backgroundImage: "url('https://creativelayers.net/themes/boxcar-html/images/resource/team4-1.jpg')",
                            }}>
                        </div>
                    </div>
                    <p className="name mt-4 text-center font-semibold text-gray-800">Courtney Henry</p>
                    <p className="role text-center text-gray-400">Software Development Manager</p>
                </div>
                <div className="memeber">
                    <div
                        className="lef w-[226px] h-[320px] flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 scale-100 group-hover:scale-105"
                            style={{
                                backgroundImage: "url('https://creativelayers.net/themes/boxcar-html/images/resource/team4-2.jpg')",
                            }}>
                        </div>
                    </div>
                    <p className="name mt-4 text-center font-semibold text-gray-800">Jerome Bell</p>
                    <p className="role text-center text-gray-400">Software Tester</p>
                </div>
                <div className="memeber">
                    <div
                        className="lef w-[226px] h-[320px] flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 scale-100 group-hover:scale-105"
                            style={{
                                backgroundImage: "url('https://creativelayers.net/themes/boxcar-html/images/resource/team4-3.jpg')",
                            }}>
                        </div>
                    </div>
                    <p className="name mt-4 text-center font-semibold text-gray-800">Arlene McCoy</p>
                    <p className="role text-center text-gray-400">Software Developer</p>
                </div>
                <div className="memeber">
                    <div
                        className="lef w-[226px] h-[320px] flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 scale-100 group-hover:scale-105"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1533636721434-0e2d61030955?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D')",
                            }}>
                        </div>
                    </div>
                    <p className="name mt-4 text-center font-semibold text-gray-800">Jenny Wilson</p>
                    <p className="role text-center text-gray-400">UI/UX Designer</p>
                </div>
                <div className="memeber">
                    <div
                        className="lef w-[226px] h-[320px] flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 scale-100 group-hover:scale-105"
                            style={{
                                backgroundImage: "url('https://creativelayers.net/themes/boxcar-html/images/resource/team6-5.jpg')",
                            }}>
                        </div>
                    </div>
                    <p className="name mt-4 text-center font-semibold text-gray-800">Wade Warren</p>
                    <p className="role text-center text-gray-400">Designer</p>
                </div>

            </div>
        </div>
    )
}

export default OurTeam