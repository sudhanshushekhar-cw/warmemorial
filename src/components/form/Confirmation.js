const Confirmation = ({ formData, setStep }) => {
    return (
        <div>
            <h2 className="text-lg font-medium text-gray-300">Step 3: Confirmation</h2>
            <div className="mt-12 space-y-4 font-medium text-sm text-gray-400">
                <p><strong>Full Name:</strong> {formData.name}</p>
                <p><strong>Place of Birth:</strong> {formData.placeOfBirth}</p>
                <p><strong>Place of Death:</strong> {formData.placeOfDeath}</p>
                <p><strong>Rank:</strong> {formData.rank}</p>
                <p><strong>Branch of Service:</strong> {formData.branch}</p>
                <p><strong>Service Number:</strong> {formData.serviceNumber}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
                <button
                    className="rounded-full bg-gray-700 px-8 py-2 h-12 text-sm font-semibold text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
                    onClick={() => setStep(prevStep => prevStep - 1)}
                >
                    Previous
                </button>
                <button type="submit"
                    className="rounded-full bg-blue-600 px-8 py-2 h-12 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
                >
                    Add Worrior
                </button>
            </div>
        </div>
    );
};

export default Confirmation;