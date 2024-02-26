import React from 'react';
import hero from '../assets/hero4.png';
import prof from '../assets/prof.jpg';

import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHouse, faToolbox } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

        <div className="lg:col-span-6 flex flex-col justify-center lg:justify-start lg:items-start">

          <div className="flex justify-center lg:justify-start">
            <img
              className="w-32 h-32 md:w-50 md:h-50 lg:w-20 lg:h-20 mb-1 border border-pink-800 rounded-full shadow-lg"
              src={prof}
              alt="Nicolette"
            />
          </div>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center lg:text-left">Hi, I'm Nicolette</h1>
          <p className="max-w-2xl mb-4 font-light text-gray-500  md:text-lg lg:text-xl lg:flex lg:items-center text-center lg:text-left">Passionate Front-End Developer skilled in crafting responsive and engaging web experiences, by way of blending analytical insights with creative solutions. I thrive on finding innovative solutions to challenging problems, whether it's optimizing performance, improving user experience, or tackling complex functionalities. </p>

          
          <div className="max-w-2xl font-light text-gray-500 mb-8 md:text-lg lg:text-xl lg:flex lg:items-center text-center lg:text-left"> 
          <div className='hover:text-pink-600 flex flex-col items-center md:justify-center '>
            <FontAwesomeIcon icon={faGraduationCap}/> 
            <h5 className='px-4'>Academic Credentials</h5> 
          </div>
            <p className="ml-2  text-sm">I hold a Bachelor of Science degree in Computational Physics, providing me with a solid theoretical framework for understanding complex systems and data analysis.</p> {/* Added margin to the paragraph */}
          </div>
          <div className="max-w-2xl font-light text-gray-500 mb-8 md:text-lg lg:text-xl lg:flex lg:items-center text-center lg:text-left"> 
          <div className='hover:text-pink-600 flex flex-col items-center md:justify-center '>
            <FontAwesomeIcon icon={faHouse}/>
            <h5 className='px-4'>Analytical Mindset</h5> 
          </div>
            <p className="ml-2 text-sm">With a background in data analysis, I approach web development projects with a keen eye for detail and a commitment to delivering solutions that are not only visually appealing but also backed by data-driven insights.

</p> {/* Added margin to the paragraph */}
          </div>
          <div className="max-w-2xl font-light text-gray-500 mb-8 md:text-lg lg:text-xl lg:flex lg:items-center text-center lg:text-left"> 
            <div className='hover:text-pink-600 flex flex-col items-center md:justify-center '>
            <FontAwesomeIcon icon={faToolbox} />
            <h5 className='px-4'>Technical Expertise</h5> 
            </div>
            <p className="ml-2 text-sm">My specialization lies in JavaScript, where I excel in leveraging the power of frameworks like Node.js and React.js to build dynamic and interactive web applications. I'm also proficient in utilizing Tailwind CSS to create sleek and efficient user interfaces.</p> {/* Added margin to the paragraph */}
          </div>
        </div>
        <div className="hidden lg:block lg:mt-8 lg:col-span-6 lg:flex lg:justify-end ">
          <img src={hero} alt="hero" className='flex items-center px-4 py-4 w-full h-auto rounded-full' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
