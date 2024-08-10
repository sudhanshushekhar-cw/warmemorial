import React, { useState } from 'react';
import axios from 'axios';
import PersonalInfo from './OfficerInfo';
import AccountInfo from './AccountInfo';
import Confirmation from './Confirmation';
import ServiceInfo from './ServiceInfo';
import Tribute from './Tribute';
import { ADD_WARRIOR } from '../../api/api_list';
import {signin} from '../../googleSignin';
const MultiStepForm = ({ war_id, setIsLogin}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // officerInfo: 
    name: '',
    placeOfBirth: '',
    dateOfBirth: '',
    martyrDate: '',

    // serviceInfo:
    war_id: war_id,
    branch: '',
    serviceNumber: '',
    rank: '',
    regiment: '',

    // tribute: 
    bio: '',
    profilePhotoFile: null,
    profilePhotoURL: '/assets/profile.svg',
    isFamily: false,
  });

  // this function use id to upadate formData so ID must be equal to formData property
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle the file upload
    const formToSend = new FormData();
    const ignore = new Set([
      'profilePhotoURL',
    ]);

    Object.entries(formData).forEach(([key, value]) => {
      if(!ignore.has(key)){
        if(key == 'profilePhotoFile'){
          key = 'profilePhoto'
        }
        formToSend.append(key, value);
      }
    });
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    if(loginData){
      formToSend.append('email', loginData.email);
      formToSend.append('user_id', loginData.user_id);
    }
    

    try {
      const response = await axios.post(ADD_WARRIOR, formToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const data = response.data;
      console.log('successfully:', data);
      alert('Form submitted successfully');
    } catch (error) {
      const {message} = error.response.data;
      const {status} = error.response;

      // try to re log in 
      if(status === 404){
        signin(setIsLogin)
        .then(()=>{
          alert('submit again');
        });
      }

      console.error(message);
      alert('Failed to submit form', message);
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
              setFormData={setFormData}
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
