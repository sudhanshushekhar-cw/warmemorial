const OfficerInfo = ({ formData, handleInputChange, setStep }) => {

    return (
        <div>
            <h2 className="text-lg font-medium text-gray-300">Step 1: Officer Information</h2>
            <div className="space-y-2 mt-12">
                <label htmlFor="name" className="block text-sm text-gray-400">Full Name</label>
                <input
                    type="text"
                    id="name"
                    value={formData.officerInfo.fullName}
                    onChange={handleInputChange}
                    className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-700 border-0 rounded-lg appearance-none text-gray-100 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
                    placeholder="Enter full name"
                />
            </div>

            <div className="space-y-2 mt-4">
                <label htmlFor="placeOfBirth" className="block text-sm text-gray-400">Place of Birth</label>
                <input
                    type="text"
                    id="placeOfBirth"
                    value={formData.officerInfo.placeOfBirth}
                    onChange={handleInputChange}
                    className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-700 border-0 rounded-lg appearance-none text-gray-100 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
                    placeholder="Enter place of birth"
                />
            </div>
            <div className="space-y-2 mt-4">
                <label htmlFor="placeOfDeath" className="block text-sm text-gray-400">Place of Death</label>
                <input
                    type="text"
                    id="placeOfDeath"
                    value={formData.officerInfo.placeOfDeath}
                    onChange={handleInputChange}
                    className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-700 border-0 rounded-lg appearance-none text-gray-100 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
                    placeholder="Enter place of death"
                />
            </div>
            
            <div className="mt-4">
                <button
                    className="rounded-full bg-blue-600 px-8 py-2 h-12 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
                    onClick={() => setStep(prevStep => prevStep + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};



export default OfficerInfo;