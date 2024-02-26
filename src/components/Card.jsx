import React from 'react';
import prof from '../assets/prof.jpg';

const Card = ({title, description, tech, url}) => {
  return (
    <article className="hover:scale-105 lg:max-w-xs  bg-pink-200 border border-pink-200 rounded-lg shadow-lg w-full sm:w-80 mb-4 lg:w-96 lg:h-80 flex flex-col justify-center items-center">
      
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="font-normal text-xs text-gray-700">
          {description}
        </p>
        <p className="mb-3 font-bold text-gray-800">
          Made with {tech}
        </p>
        <a
          href={url}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-400 rounded-lg hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300"
        >
          See more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </article>
  );
};

export default Card;
