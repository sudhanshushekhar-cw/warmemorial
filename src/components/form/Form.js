import React, { useState } from 'react';

function MultiStepForm() {
  // State for step and form data
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  // Handler to update form data
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <section className="bg-gray-900 text-gray-100 relative overflow-hidden">
      <div className="w-full mx-auto 2xl:max-w-7xl flex flex-col justify-center py-24 relative p-8">

        {/* Starts component */}
        <div className='rounded-3xl bg-gray-800 shadow-2xl border border-gray-700 p-8 lg:p-10 mt-6 mx-4 sm:mx-6 md:mx-auto max-w-[450px]'>
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h2 className="text-lg font-medium text-gray-300">Step 1: Personal Information</h2>
              <div className="space-y-2 mt-12">
                <label htmlFor="name" className="block text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-700 border-0 rounded-lg appearance-none text-gray-100 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2 mt-4">
                <label htmlFor="email" className="block text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-700 border-0 rounded-lg appearance-none text-gray-100 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-4">
                <button
                  className="rounded-full bg-blue-600 px-8 py-2 h-12 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
                  onClick={() => setStep(step + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h2 className="text-lg font-medium text-gray-300 mb-4">Step 2: Account Information</h2>
              <div className="space-y-2 mt-12">
                <label htmlFor="username" className="block text-sm text-gray-400">Username</label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-700 border-0 rounded-lg appearance-none text-gray-100 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
                  placeholder="Choose a username"
                />
              </div>
              <div className="space-y-2 mt-4">
                <label htmlFor="password" className="block text-sm text-gray-400">Password</label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-700 border-0 rounded-lg appearance-none text-gray-100 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  className="rounded-full bg-gray-700 px-8 py-2 h-12 text-sm font-semibold text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
                  onClick={() => setStep(step - 1)}
                >
                  Previous
                </button>
                <button
                  className="rounded-full bg-blue-600 px-8 py-2 h-12 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
                  onClick={() => setStep(step + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <h2 className="text-lg font-medium text-gray-300">Step 3: Confirmation</h2>
              <div className="mt-12 space-y-4 font-medium text-sm text-gray-400">
                <p>Name: <span>{formData.name}</span></p>
                <p>Email: <span>{formData.email}</span></p>
                <p>Username: <span>{formData.username}</span></p>
                {/* Add more fields as needed */}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  className="rounded-full bg-gray-700 px-8 py-2 h-12 text-sm font-semibold text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
                  onClick={() => setStep(step - 1)}
                >
                  Previous
                </button>
                <button
                  className="rounded-full bg-blue-600 px-8 py-2 h-12 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default MultiStepForm;
