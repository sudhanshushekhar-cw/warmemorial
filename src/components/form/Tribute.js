import { useRef, useState } from "react";

function Tribute({ formData, setFormData, handleInputChange, setStep }) {
    const fileInputRef = useRef(null);
    const uploadImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        // Directly pass the file object to the handleInputChange function
        handleInputChange({
            target: {
                id: 'profilePhotoURL',
                value: URL.createObjectURL(file),
            }
        });
        handleInputChange({
            target: {
                id: 'profilePhotoFile',
                value: file,
            }
        });
    };

    const toggleCheckbox = (e)=>{
        setFormData((prevData) => ({
            ...prevData,
            isFamily: e.target.checked,
        }));
    }
    return (
        <div>
            <h2 className="text-lg font-medium text-gray-300">Step 3: Tribute</h2>

            <div id='profile' className='flex flex-col items-center'>
                <div className='upload relative'>
                    <div className='img-box' style={{ width: '150px', objectFit: 'contain' }}>
                        <img src={formData.profilePhotoURL} alt="Profile Preview" />
                    </div>
                    <button
                        type="button"
                        className='absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-12 p-0 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600 flex items-center justify-center'
                        title='Change Photo'
                        onClick={() => { fileInputRef.current && fileInputRef.current.click() }}
                    >
                        <i className="uil uil-pen text-white"></i>
                    </button>

                    <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={uploadImage}
                        style={{ display: 'none' }}
                    />
                </div>
            </div>

            <div className="space-y-2 mt-4">
                <label htmlFor="bio" className="block text-sm text-gray-400">Bio</label>
                <textarea
                    style={{ minHeight: '100px' }}
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-700 border-0 rounded-lg appearance-none text-gray-100 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
                    placeholder="His/Her veer gatha"
                />
            </div>

            <div className="space-y-2 mt-4">
                <div className="flex items-center mb-4">
                    <input 
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        id="isFamily" 
                        name="isFamily" 
                        type="checkbox"
                        checked={formData.isFamily}
                        onChange={()=>{
                            handleInputChange({
                                target:{
                                    id: 'isFamily',
                                    value: !formData.isFamily,
                                }
                            })
                        }}
                    />
                    <label htmlFor="isFamily" className="ms-2 text-sm font-medium dark:text-gray-300">Are you a family member?</label>
                </div>
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
    );
}

export default Tribute;
