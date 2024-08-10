
import React from 'react'

function ServiceInfo({ formData, handleInputChange, setStep }) {
    return (
        <div>
            <h2 className="text-lg font-medium text-gray-300">Step 2: Military Service</h2>
            <div className="space-y-2 mt-4">
                <label htmlFor="branch" className="block text-sm text-gray-400">Branch of Service</label>
                <select
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                    className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-700 border-0 rounded-lg appearance-none text-gray-100 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
                >
                    <option value="">Select branch</option>
                    <option value="army">Army</option>
                    <option value="navy">Navy</option>
                    <option value="airforce">Air Force</option>
                    {/* Add other branches as needed */}
                </select>
            </div>
            <div className="space-y-2 mt-4">
                <label htmlFor="serviceNumber" className="block text-sm text-gray-400">Service Number</label>
                <input
                    type="text"
                    id="serviceNumber"
                    name="serviceNumber"
                    value={formData.serviceNumber}
                    onChange={handleInputChange}
                    className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-700 border-0 rounded-lg appearance-none text-gray-100 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
                    placeholder="Enter service number"
                />
            </div>
            <div className="space-y-2 mt-4">
                <label htmlFor="rank" className="block text-sm text-gray-400">Rank / Post</label>
                <input
                    type="text"
                    id="rank"
                    name="rank"
                    value={formData.rank}
                    onChange={handleInputChange}
                    className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-700 border-0 rounded-lg appearance-none text-gray-100 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
                    placeholder="Enter rank"
                />
            </div>
            <div className="space-y-2 mt-4">
                <label htmlFor="rank" className="block text-sm text-gray-400">Regiment</label>
                <input
                    type="text"
                    id="regiment"
                    name="regiment "
                    value={formData.regiment}
                    onChange={handleInputChange}
                    className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-700 border-0 rounded-lg appearance-none text-gray-100 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
                    placeholder="Enter rank"
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

export default ServiceInfo