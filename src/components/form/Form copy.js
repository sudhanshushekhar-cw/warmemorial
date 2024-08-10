import React, { useState } from 'react';
import PersonalInfo from './OfficerInfo';
import AccountInfo from './AccountInfo'
import Confirmation from './Confirmation'
import ServiceInfo from './SeriveInfo';
import Tribute from './Tribute';


const MultiStepForm = ({ war_id }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // officerInfo: 
    name: '',
    placeOfBirth: '',
    dateOfBirth: '',
    martyrDate: '',
    // serviceInfo:
    branch: '',
    serviceNumber: '',
    rank: '',
    regiment: '',

    // tribute: 
    bio: '',
    profilePhoto: '/assets/profile.svg',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Fixed typo here
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <section className="text-gray-100 relative overflow-hidden" id='form'>
      <form onSubmit={handleSubmit}>
        <div className='rounded-3xl bg-gray-800 shadow-2xl border border-gray-700 p-8 lg:p-10 mx-auto max-w-[450px]'>
          {
            step === 1 &&
            <PersonalInfo
              formData={formData}
              handleInputChange={handleInputChange}
              setStep={setStep}
            />
          }

          {
            step === 2 && <ServiceInfo
              formData={formData}
              handleInputChange={handleInputChange}
              setStep={setStep}
            />
          }

          {
            step === 3 && <Tribute
              formData={formData}
              handleInputChange={handleInputChange}
              setStep={setStep}
            />
          }

          {
            step === 4 && <Confirmation
              formData={formData}
              setStep={setStep}
            />
          }
        </div>
      </form>
    </section>
  );
}

export default MultiStepForm;
