"use client"
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormData } from '../redux/formSlice';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  
  const [WebsiteURL, setWebsiteURL] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Text, setText] = useState('');

  const [mail , setMail] = useState('')
  const [isTextReachesLimit, setIsTextReachesLimit] = useState(false);


  const dispatch = useDispatch()

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleWebSiteUrlSubmit = (e) => {
    e.preventDefault();
    const newData = { data: `${WebsiteURL}`, mail, field : "website" }; 
    dispatch(setFormData(newData)); 
  };
  
  const handlePhoneNumberSubmit = (e) => {
    e.preventDefault();
    const newData = { data: `tel:${PhoneNumber}`, mail, field : "phoneNumber" }; 
    dispatch(setFormData(newData)); 
  };
  
  const handleSMSSubmit = (e) => {
    e.preventDefault();
    const newData = { data: `smsto:${PhoneNumber}:${Text}`, mail, field : "sms" }; 
    dispatch(setFormData(newData));
  };
  
  const handlePlainTextSubmit = (e) => {
    e.preventDefault();
    const newData = { data: `${Text}`, mail, field : "plainText" }; 
    dispatch(setFormData(newData)); 
  };
  
  useEffect(() => {
    if (Text.length > 160) {
      setIsTextReachesLimit(true);
    } else {
      setIsTextReachesLimit(false);
    }
  }, [Text]);

  return (
    <div className="flex justify-center items-center w-full">

      <div className="bg-white p-8 rounded-3xl border shadow-md w-full max-w-[700px]">

        <h1 className="text-2xl font-bold mb-4">Generate your QR Code</h1>

        <form onSubmit={selectedOption === 'option1' ? handleWebSiteUrlSubmit : 
                       selectedOption === 'option2' ? handlePhoneNumberSubmit :
                       selectedOption === 'option3' ? handleSMSSubmit : handlePlainTextSubmit}>

          <div className="mb-4">

            <label className="block mb-2 font-bold">Select Data Type:</label>

            <div className='w-full flex flex-col sm:flex-row'>

                <div className='w-full flex justify-between'>

                    <label className="w-full">
                        <input
                        type="radio"
                        value="option1"
                        checked={selectedOption === 'option1'}
                        onChange={handleOptionChange}
                        />
                        Website URL
                    </label>

                    <label className="w-full">
                        <input
                        type="radio"
                        value="option2"
                        checked={selectedOption === 'option2'}
                        onChange={handleOptionChange}
                        />
                        Phone#
                    </label>

                </div>


                <div className='w-full flex justify-between '>

                    <label className="w-full">
                    <input
                        type="radio"
                        value="option3"
                        checked={selectedOption === 'option3'}
                        onChange={handleOptionChange}
                        />
                        SMS
                    </label>

                    <label className='w-full'>
                    <input
                         type="radio"
                        value="option4"
                        checked={selectedOption === 'option4'}
                        onChange={handleOptionChange}
                    />
                    Plain Text
                    </label>

                </div>

            </div>

          </div>
          {selectedOption === 'option1' ? (
            <div>

                <label>

                    <h2 className='font-bold text-xl'>Website URL</h2>
                    <input
                        type="text"
                        placeholder="https://www.startxpress.io/"
                        className="border border-gray-300 p-2 mb-2 w-full"
                        value={WebsiteURL}
                        onChange={(e) => setWebsiteURL(e.target.value)}
                    />

                </label>

            </div>
          ) : selectedOption === 'option2' ? (
            <div>
                
                <label>
                    <h2 className='font-bold text-xl'>Phone #</h2>
                    <input
                    type="tel"
                    placeholder="Example: 1-888-746-7439"
                    className="border border-gray-300 p-2 mb-2 w-full"
                    value={PhoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </label>    


            </div>
          ) : selectedOption === 'option3' ? (
            <div className='flex flex-col'>

                <label>
                    <h2 className='font-bold text-xl'>Mobile #</h2>
                    <input
                    type="text"
                    placeholder="Phone Number"
                    className="border border-gray-300 p-2 mb-2 w-full"
                    value={PhoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                </label>

                <label>
                    <h2 className='font-bold text-xl'>Message</h2>
                    <input
                    type="text"
                    placeholder="Enter message to send"
                    className="border border-gray-300 p-2 mb-2 w-full"
                    value={Text}
                    onChange={(e) => setText(e.target.value)}
                    />
                    <p className='w-full flex justify-center'>160 characters maximum</p>
                </label>


            </div>
          ) : (
            <div>

                <label>
                    <h2 className='font-bold text-xl'>Plain text</h2>
                    <input
                    type="text"
                    placeholder="Address"
                    className="border border-gray-300 p-2 mb-2 w-full"
                    value={Text}
                    onChange={(e) => setText(e.target.value)}
                    />
                    <p className='w-full flex justify-center'>160 characters maximum</p>

                </label>


            </div>
          )}
          {isTextReachesLimit && (
          <div className='w-full flex justify-center items-center text-red-500 text-xs'>Maximum character limit exceeded !!</div>
          )}
          <label>
            <h2 className='font-bold text-xl'>Email code to</h2>
            <input
                type='email'
                placeholder='Email address'
                className="border border-gray-300 p-2 mb-2 w-full"
                required
                onChange={(e) => setMail(e.target.value)}
                value={mail}
            />
          </label>

          <button
            type="submit"
            className={`${isTextReachesLimit ? `bg-sky-300` : `bg-sky-600 hover:bg-blue-700`} text-white font-bold py-2 px-4 rounded`}
            disabled={isTextReachesLimit}
          >
            Submit
          </button>

        </form>
      </div>
      <div className="flex justify-center items-center">

        </div>
    </div>
  );
};

export default App;
