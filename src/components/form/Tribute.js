import React, { useState } from 'react'

function Model() {
    return (
        <div className='flex'>
            <button
                className='w-8 h-8 p-0 rounded bg-gray-800 hover:bg-gray-700 border-gray-600 flex items-center justify-center'
                title='Close'
            >
                <i class="uil uil-times text-xl" ></i>
            </button>
        </div>
    );
}
function Tribute({ formData, handleInputChange, setStep }) {
    return (
        <div>
            <h2 className="text-lg font-medium text-gray-300">Step 3: Tribute</h2>

            <div id='profile' className='flex flex-col items-center'>
                <div className='upload relative'>
                    <div className='img-box' style={{ width: '150px', objectFit: 'contain' }}>
                        <img src='/assets/profile.svg'></img>
                    </div>
                    <button
                        className='absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-12 p-0 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600 flex items-center justify-center'
                        title='Change Photo'
                    // onClick={() => setModalOpen(true)}
                    >
                        <i className="uil uil-pen text-white"></i>
                    </button>

                </div>
            </div>

            <div className="space-y-2 mt-4">
                <label htmlFor="serviceNumber" className="block text-sm text-gray-400">Bio</label>
                <textarea
                    style={{ minHeight: '100px' }}
                    id="serviceNumber"
                    value={formData.serviceNumber}
                    onChange={handleInputChange}
                    className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-700 border-0 rounded-lg appearance-none text-gray-100 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
                    placeholder="His/Her veer gatha"
                />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                <button
                    className="rounded-full bg-gray-700 px-8 py-2 h-12 text-sm font-semibold text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
                    onClick={() => setStep(prevStep => prevStep - 1)}
                >
                    Previous
                </button>
                <button
                    className="rounded-full bg-blue-600 px-8 py-2 h-12 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
                    onClick={() => setStep(prevStep => prevStep + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Tribute



