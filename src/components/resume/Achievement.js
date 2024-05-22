import React from "react";
import Title from "../layouts/Title";
import Bigdata from "../../assets/certificate/Bigdata.jpg";
import Chatgpt from "../../assets/certificate/Chatgpt.jpg";
import Frontend1 from "../../assets/certificate/Frontend1.jpg";
import Reactjs1 from "../../assets/certificate/Reactjs1.jpg";
import Reactjs2 from "../../assets/certificate/Reactjs2.jpg";
import Mern1 from "../../assets/certificate/Mern1.jpg";
import Mern2 from "../../assets/certificate/Mern2.jpg";
import Workshop from "../../assets/certificate/Workshop.jpg";
import Ibm from "../../assets/certificate/Ibm.jpg";
import Fullstack1 from "../../assets/certificate/Fullstack1.jpg";
import Bharat from "../../assets/certificate/Bharat.jpg";
import Codesoft from "../../assets/certificate/Codesoft.jpg";
import Oasis from "../../assets/certificate/Oasis.jpg";
import Techno from "../../assets/certificate/Techno.jpg";

const ResumeCard = ({ title, des }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-banner shadow-md flex flex-col">
      <h3 className="text-base uppercase text-purple-600 font-normal">
        {title}
      </h3>
      <img src={des} alt={title} className="mt-3" />
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    { title: "BIGDATA CERTIFICATE", des: Bigdata },
    { title: "IBM CERTIFICATE", des: Ibm },
    { title: "FRONTEND CERTIFICATE", des: Frontend1 },
    { title: "FULLSTACK CERTIFICATE", des: Fullstack1 },
    { title: "CHATGPT CERTIFICATE", des: Chatgpt },
    { title: "REACTJS CERTIFICATE", des: Reactjs1 },
    { title: "REACTJS PROJECTS CERTIFICATE", des: Reactjs2 },
    { title: "WORKSHOP", des: Workshop },
    { title: "MERNSTACK CERTIFICATE", des: Mern1 },
    { title: "MERNSTACK CERTIFICATE", des: Mern2 },
    { title: "BHARAT INTERN", des: Bharat },
    { title: "TECHNO INTERN", des: Techno },
    { title: "OASIS INTERN", des: Oasis },
    { title: "CODESOFT INTERN", des: Codesoft },
  ];

  return (
    <section className="w-full py-20">
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY CERTIFICATES"
          des=" my Hardwork  Certificates"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 xl:gap-14 md:grid-cols-3">
        {projectsData.map((project, index) => (
          <ResumeCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
