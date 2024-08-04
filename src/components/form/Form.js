import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import AccountInfo from './AccountInfo'
import Confirmation from './Confirmation'



const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    placeOfBirth: '',
    placeOfDeath: '',
    rank: '',
    branch: '',
    serviceNumber: '',
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <section className="bg-gray-900 text-gray-100 relative overflow-hidden" id='form'>
      <div className='rounded-3xl bg-gray-800 shadow-2xl border border-gray-700 p-8 lg:p-10 sm:mx-6 md:mx-auto max-w-[450px]'>
        {
          step === 1 &&
          <PersonalInfo
            formData={formData}
            handleInputChange={handleInputChange}
            setStep={setStep} />
        }

        {
          step === 2 && <AccountInfo
            formData={formData}
            handleInputChange={handleInputChange}
            setStep={setStep} />
        }
  
        {
          step === 3 && <Confirmation
            formData={formData}
            setStep={setStep}
            handleSubmit={handleSubmit} />
        }
      </div>
    </section>
  );
}

export default MultiStepForm;
