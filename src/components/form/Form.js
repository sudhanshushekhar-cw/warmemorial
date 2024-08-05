import React, { useState } from 'react';
import PersonalInfo from './OfficerInfo';
import AccountInfo from './AccountInfo'
import Confirmation from './Confirmation'
import ServiceInfo from './SeriveInfo';
import Tribute from './Tribute';


const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    officerInfo: {
      fullName: '',
      placeOfBirth: '',
      PlaceOfDeath: '',
    },
    serviceInfo: {
      branch: '',
      number: '',
      rank: '',
    },
    tribute: {
      bio: '',
      profilePhoto: '',
    }
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
          step === 4 && <AccountInfo
            formData={formData}
            handleInputChange={handleInputChange}
            setStep={setStep}
          />
        }

        {
          step === 5 && <Confirmation
            formData={formData}
            setStep={setStep}
            handleSubmit={handleSubmit}
          />
        }
      </div>
    </section>
  );
}

export default MultiStepForm;
