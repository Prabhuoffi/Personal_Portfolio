import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-10 md:flex-row md:gap-20"
    >
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-yellow-500 tracking-[4px]">2005 - 2020</p>
          <h2 className="text-4xl font-bold"> School <br/>Education</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Primary School Education"
            subTitle="Yogi Vemana Matriculation School (2005-2012)"
            result="75/100"
            des="Hey engage in a diverse curriculum encompassing subjects like mathematics, language arts, science, and social studies, fostering both academic growth and holistic development."
          />
          <ResumeCard
            title="Matriculation School Education"
            subTitle="Thiru G Varadharajalu Chettiar Higher Secondary School (2012-2017)"
            result="65/100"
            des="Education progresses to more advanced levels, building upon the foundational knowledge acquired in Matriculation school."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Thiru G Varadharajalu Chettiar Higher Secondary School (2018-2020)"
            result="65/100"
            des="Higher secondary education bridges secondary schooling with higher education or employment, offering advanced academic preparation. It equips students with essential skills and knowledge for their chosen paths."
          />
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-yellow-500 tracking-[4px]">2020 - 2024</p>
          <h2 className="text-4xl font-bold">College Education</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Global Institute of Engineering and Technology"
            subTitle="BE-CSE (2020 - Present)"
            result="8.38/10"
            des="In B.E. CSE engineering college life, students tackle challenging coursework, participate in hands-on projects, and engage in extracurricular activities to prepare for careers in technology."
          />
          <ResumeCard
            title="Kaashiv Info Tech"
            subTitle="Placement Training - (2024 - Present)"
            result="Chennai"
            des="A placement training program equips students with essential skills for job hunting, including resume writing, interview preparation, and professional etiquette, to enhance their employability and secure employment opportunities."
          />
          <ResumeCard
            title="Full Stack WebDeveloper"
            subTitle="Domain - (2022 - Present)"
            result="Course"
            des="Self-study in MERN stack involves online courses or tutorials to learn MongoDB, Express.js, React, and Node.js. Start with basics, build projects for practical experience, and engage with online communities for support."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
