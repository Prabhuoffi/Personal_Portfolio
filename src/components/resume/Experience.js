import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col md:flex-row gap-20"
    >
      <div className="md:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-yellow-500 tracking-[4px]">2020 - 2024</p>
          <h2 className="text-4xl font-bold">Project Experience</h2>
        </div>
        <div className="mt-14 md:mt-6 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Twitter Data Analysis Project"
            subTitle="Naan mudhalvan(2022)"
            result="BIG Data"
            des="This big data project analyzes Twitter data with Apache Spark for sentiment, trends, and engagement, integrating Facebook data for comparison, focusing on preprocessing and scalable analysis for insights."
          />
          <ResumeCard
            title="IBM Project"
            subTitle="Naan mudhalvan(2023)"
            result="Data Analytics"
            des="Comparing analyses for a social media IBM project involves assessing IBM analytics tools' effectiveness in evaluating trends, sentiment, and user engagement across different social media channels."
          />
          <ResumeCard
            title="UNXT-Softskills"
            subTitle="Unnati"
            result="Softskills"
            des="Soft skills encompass interpersonal abilities like communication, teamwork, adaptability, problem-solving, and emotional intelligence, crucial for success in various aspects of life and work."
          />
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-yellow-500 tracking-[4px]">2020 - 2024</p>
          <h2 className="text-4xl font-bold">Training Experience</h2>
        </div>
        <div className="mt-14 md:mt-6 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full-stack webdevelopment"
            subTitle="STRYDO-Tech.Ltd"
            result="Workshop"
            des="A full-stack web development workshop offers training in both front-end and back-end technologies like HTML/CSS, JavaScript, React.js, Node.js/Express.js, and databases, providing practice for building dynamic web applications."
          />
          <ResumeCard
            title=" symposium event coordinator"
            subTitle="Global Institute of Engineering and Technology"
            result="Web Design"
            des="As a web design event coordinator, you plan and manage events focused on web design, ensuring smooth execution and fostering collaboration among participants."
          />
          <ResumeCard
            title="Kaashiv Info Tech"
            subTitle="Placement and Training"
            result="MERN-stack"
            des="A placement training program is a short-term initiative focused on preparing individuals for employment by providing skills training, resume assistance, interview preparation, and sometimes job placement support."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
