import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div id="about" className="bg-pink-500 w-full h-full flex flex-col lg:flex-row lg:items-center text-white">
      <div className="lg:w-1/4 p-8 lg:p-12 lg:h-full  flex flex-col justify-center items-center"> {/* Centered vertically and horizontally */}
        <FontAwesomeIcon icon={faHand} className="text-6xl mb-8 " shake={true} />
        <h1 className="text-4xl font-extrabold tracking-tight leading-none lg:text-5xl text-center lg:text-left"> A Walk through My Life</h1>
      </div>
      <div className="lg:w-3/4 px-8 lg:p-12  ">
        <ol className="relative border-s border-white">
          <TimelineItem
            month="November 2021"
            title="Assistant Research for Cancer Diagnostic Tool Development"
            description="Led development of a Python model for serum spectral anomaly detection, boosting cancer diagnosis accuracy by 13%. Orchestrated data collection, analysis, and collaboration across departments to optimize models. Produced succinct reports and dynamic visualizations with Tableau and Matplotlib for informed decision-making."
          />
          <TimelineItem
            month="May 2022"
            title="Graduation "
            description="Earned BS in Computational Physics"
          />
          <TimelineItem
            month="June 2022"
            title="ENGin Volunteer Program"
            description="Facilitated weekly meetings with Ukrainian students abroad to enhance English proficiency, implementing measurable milestones to monitor progress. Maintained a record of areas needing improvement to boost students' confidence and self-assurance."
          />
          <TimelineItem
            month="November 2022"
            title="Behavioral Data Analyst"
            description="Analyzed behavioral data to assess intervention effectiveness, offering data-driven treatment recommendations while maintaining HIPAA compliance. Created Tableau dashboards for quarterly reports, boosting operational efficiency by 30%. Implemented individual behavior protocols, resulting in a 15% increase in targeted behaviors and enhanced client quality of life"
          />
        </ol>
      </div>
    </div>
  );
};

const TimelineItem = ({ month, title, description }) => (
  <li className="my-10 mr-3 p-8 hover:scale-105 hover:border hover:border-pink-500 hover:bg-pink-400 hover:shadow-lg rounded-lg hover:opacity-100 opacity-65">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
    <time className="mb-1 text-sm font-normal leading-none">{month}</time>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-base font-normal">{description}</p>
  </li>
);

export default About;
