import React from 'react';
import resume from '../assets/resumeATL.pdf';
import resIMG from '../assets/resIMG.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

const Contact = () => {
  return (
    <div className="bg-pink-200 flex flex-col justify-center items-center min-h-screen">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto xl:gap-0 lg:py-16 lg:grid-cols-12  items-center ">
        <div className="lg:col-span-5 flex flex-col justify-center mx-4 px-4   items-center">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-6xl text-center lg:text-left">Contact Me</h1>
          <div className="flex justify-center lg:justify-start ">
            <a href="https://github.com/venantn" target="_blank" rel="noopener noreferrer" className='hover:text-pink-600  md:justify-center px-2'>
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a href="https://www.linkedin.com/in/nvenant/" target="_blank" rel="noopener noreferrer" className='hover:text-pink-600 px-2 md:justify-center'>
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a href="mailto:venant.nicolettea@gmail.com" className='hover:text-pink-600 px-2 md:justify-center'>
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </a>
          </div>
        </div>
        <div className="lg:block  lg:col-span-7 lg:flex mx-4 px-4 py-2  relative">
          <div className="relative">
            <a href={resume} download>
              <img src={resIMG} className='border border-pink-200 rounded-lg shadow-lg w-full  sm:w-80 mb-4 lg:w-96 hover:opacity-75 transition-opacity duration-300 ease-in-out' alt="resume image" />
              <div className="absolute inset-0 bg-pink-600 opacity-0 hover:opacity-75 transition-opacity duration-300 rounded-lg ease-in-out">
                <div className="absolute inset-0 flex justify-center items-center">
                  <p className="text-white text-lg font-semibold">Download my resume here</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
