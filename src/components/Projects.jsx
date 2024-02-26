import React from 'react';
import Card from './Card';

const Projects = () => {
  return (
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 ">
    <div className="flex justify-center flex-col"> {/* Center the grid horizontally */}
    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center lg:text-left">Projects </h1>

      <div className="lg:grid lg:grid-cols-2 mx-auto gap-4 flex flex-col items-center ">
        <Card title="AAC Prep Device" description=" A mobile-friendly program designed to assist therapists in Applied Behavior Analysis (ABA) therapy sessions. It aims to teach students how to appropriately click buttons they are prompted to, while also enabling therapists to collect accurate and detailed data." tech="Vanila Javascript, HTML and CSS"
        url="https://github.com/venantn/AACPrep"/>
        <Card title="Client-Side Mobile Friendly WebApp" description="A new client-side mobile friendly  website for an ABA clinic. A landing page for current and potential clients to use as a resource" tech="React, Node, CSS"
        url="https://github.com/venantn/sbc"/>
        <Card title="AI Summarizer" description="A web app utilizing an Open AI API designed to take a URL and respond with a summary of the webpage " url="https://github.com/venantn/ai_summarizer"  tech="React and  Tailwind CSS "/>
        <Card title="Youtube Bookmark Chrome Extension" description="A Google Chrome Extension that interacts with UI on Youtube videos and records timestamps and summaries of bookmarks" 
        url="https://github.com/venantn/yt-extention" tech="HTML"/>

        <Card title="Exploratory Data Analyses of Covid Deaths" description="An exploratory data analyses on data focusing on covid Deaths and vacinations. This goes through cleaning and prepping the data, manipulating it with MySQL and creating a dashboard explaining the findings." 
        url="https://github.com/venantn/COVIDProject" tech="SQL, Excel and Tableu"/>
        <Card title="Student T-Test on FTIR Spectra of Lymphoma and Normal Samples" description="An analysis of several hundered spectra samples of blood from patients withand without lymphoma. Completed with a student t-test to detect areas that are statistically significant " 
        url="https://github.com/venantn/FTIR-Lymphoma-Analysis" tech="Python"/>
        <Card title="My Portfolio!" description="Take a look at the ins and outs of this very website!" 
        url="https://github.com/venantn/portfolio" tech="React, Tailwind"/>
        
      </div>
    </div>
    </div>
  );
};

export default Projects;
