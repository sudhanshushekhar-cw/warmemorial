import React, { useState } from 'react';
import axios from 'axios';
import PersonalInfo from './OfficerInfo';
import AccountInfo from './AccountInfo';
import Confirmation from './Confirmation';
import ServiceInfo from './SeriveInfo';
import Tribute from './Tribute';
import { ADD_WARRIOR } from '../../api/api_list';

const MultiStepForm = ({ war_id }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // officerInfo: 
    name: '',
    placeOfBirth: '',
    dateOfBirth: '',
    martyrDate:'',
    // serviceInfo:
    war_id:war_id,
    branch: '',
    serviceNumber: '',
    rank: '',
    regiment:'',
    // tribute: 
    bio: '',
    profilePhoto: null,  // Initially no file is selected
  });

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    console.log(id, value);

    if (files) {
      // If a file is uploaded
      setFormData((prevData) => ({
        ...prevData,
        [id]: files[0],  // Store the uploaded file
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle the file upload
    const formToSend = new FormData();
    formToSend.append('name', formData.name);
    formToSend.append('placeOfBirth', formData.placeOfBirth);
    formToSend.append('dateOfBirth', formData.dateOfBirth);
    formToSend.append('martyrDate', formData.martyrDate);
    formToSend.append('war_id', formData.war_id);
    formToSend.append('branch', formData.branch);
    formToSend.append('serviceNumber', formData.serviceNumber);
    formToSend.append('rank', formData.rank);
    formToSend.append('regiment', formData.regiment);
    formToSend.append('bio', formData.bio);
    if (formData.profilePhoto) {
      formToSend.append('profilePhoto', formData.profilePhoto);
    }

    try {
      const response = await axios.post(ADD_WARRIOR, formToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('successfully:', response.data);
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form');
    }
  };

  return (
    <section className="text-gray-100 relative overflow-hidden" id='form'>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className='rounded-3xl bg-gray-800 shadow-2xl border border-gray-700 p-8 lg:p-10 mx-auto max-w-[450px]'>
          {step === 1 && (
            <PersonalInfo
              formData={formData}
              handleInputChange={handleInputChange}
              setStep={setStep}
            />
          )}

          {step === 2 && (
            <ServiceInfo
              formData={formData}
              handleInputChange={handleInputChange}
              setStep={setStep}
            />
          )}

          {step === 3 && (
            <Tribute
              formData={formData}
              handleInputChange={handleInputChange}
              setStep={setStep}
            />
          )}

          {step === 4 && (
            <Confirmation
              formData={formData}
              setStep={setStep}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      </form>
    </section>
  );
}

export default MultiStepForm;
