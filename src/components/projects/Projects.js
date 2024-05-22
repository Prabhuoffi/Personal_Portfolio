import React from "react";
import Title from "../layouts/Title";
import projectOne from "../../assets/images/projects/projectOne.jpg";
import projectTwo from "../../assets/images/projects/projectTwo.jpg";
import projectThree from "../../assets/images/projects/projectThree.jpg";
import projectFour from "../../assets/images/projects/projectFour.jpg";
import projectFive from "../../assets/images/projects/projectFive.jpg";
import projectSix from "../../assets/images/projects/projectSix.jpg";
import projectSeven from "../../assets/images/projects/projectSeven.jpg";
import projectEight from "../../assets/images/projects/projectEight.jpg";
import projectNine from "../../assets/images/projects/projectNine.jpg";
import projectTen from "../../assets/images/projects/projectTen.jpg";
import projectEleven from "../../assets/images/projects/projectEleven.jpg";
import projectTwelve from "../../assets/images/projects/projectTwelve.jpg";
import projectThirteen from "../../assets/images/projects/projectThirteen.jpg";
import projectFourteen from "../../assets/images/projects/projectFourteen.jpg";
import projectFifteen from "../../assets/images/projects/projectFifteen.jpg";

import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-purple-600"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PROJECTS AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 xl:gap-14 md:grid-cols-3">
        <ProjectsCard
          title="React Portfolio"
          des="React-Portfolio is a sleek and customizable template for showcasing projects and skills, built with React.js!"
          src={projectOne}
          githubLink="https://github.com/Prabhuoffi/react-portfolio"
          deploymentLink="https://prabhu-portfoliowebsite.netlify.app/"
        />
        <ProjectsCard
          title="Expense Tracker"
          des="
          Expense Tracker is a digital tool for managing finances, tracking income, expenses, and budgeting efficiently!"
          src={projectTwo}
          githubLink="https://github.com/Prabhuoffi/INCOME-EXPENSES-Mern-stack"
          deploymentLink="https://income-expenses-silk.vercel.app/"
        />
        <ProjectsCard
          title="GKBricks(E-commerce)"
          des="Processing**"
          src={projectThree}
          githubLink="https://github.com/yourusername/projectrepo1"
          deploymentLink="https://yourdeploymentlink1.com"
        />
        <ProjectsCard
          title="Buyget planner"
          des="
          BuyGet Planner is a versatile organizer designed to streamline shopping experiences, featuring functions such !"
          src={projectFour}
          githubLink="https://github.com/Prabhuoffi/react-budget-tracker"
          deploymentLink="https://yourdeploymentlink1.com"
        />
        <ProjectsCard
          title="Love Calculator"
          des="
          The Love Calculator is a playful online tool that computes the compatibility between two individuals based on !"
          src={projectFive}
          githubLink="https://github.com/Prabhuoffi/react-LoveCalculator"
          deploymentLink="https://yourdeploymentlink1.com"
        />
        <ProjectsCard
          title="Calculator"
          des="
          A calculator is a basic device or software tool used for performing mathematical calculations, such as addition,!"
          src={projectSix}
          githubLink="https://github.com/Prabhuoffi/Calculator  "
          deploymentLink="https://65b7ad5f5ced500082788380--magenta-rolypoly-aa8088.netlify.app/"
        />
        <ProjectsCard
          title="Stop Watch"
          des="A stopwatch is a timekeeping device used to measure elapsed time precisely, commonly used in sports, science !"
          src={projectSeven}
          githubLink="https://github.com/Prabhuoffi/react-stopwatch"
          deploymentLink="https://yourdeploymentlink1.com"
        />
        <ProjectsCard
          title="Calender"
          des="
          A calendar is a system for organizing days, weeks, and months, essential for scheduling events and managing time effectively!"
          src={projectEight}
          githubLink="https://github.com/Prabhuoffi/react-calendar"
          deploymentLink="https://yourdeploymentlink1.com"
        />
        <ProjectsCard
          title="Currency Converter"
          des="A currency converter is a tool that calculates the value of one currency in relation to another, facilitating the exchange !"
          src={projectNine}
          githubLink="https://github.com/Prabhuoffi/crypto-currency-react"
          deploymentLink="https://65b7a6ec6e9af300a60543f8--delicate-lollipop-8898f3.netlify.app/"
        />
        <ProjectsCard
          title="CryptoCurrency Converter"
          des="
          A cryptocurrency converter is a tool that calculates the value of one cryptocurrency in terms of another, allowing users to easily !"
          src={projectTen}
          githubLink="https://github.com/Prabhuoffi/crypto-currency-react"
          deploymentLink="https://crypto-currency-react-six.vercel.app/"
        />
        <ProjectsCard
          title="Todo list"
          des="A todo list is a simple organizational tool used to track tasks or activities that need to be completed, helping individuals prioritize!"
          src={projectEleven}
          githubLink="https://github.com/Prabhuoffi/Vite-todo"
          deploymentLink="https://yourdeploymentlink1.com"
        />
        <ProjectsCard
          title="Portfolio"
          des="
          An HTML, CSS, and JavaScript portfolio is a web-based collection of projects and works showcasing a developer's skills and accomplishments. It !"
          src={projectTwelve}
          githubLink="https://github.com/Prabhuoffi/codsoft/tree/main/Task-1"
          deploymentLink="https://yourdeploymentlink1.com"
        />
        <ProjectsCard
          title="Landing page"
          des="
          A landing page is a single web page designed specifically for a marketing or advertising campaign, often featuring focused content and a call to action!"
          src={projectThirteen}
          githubLink="https://github.com/Prabhuoffi/OIBSIP"
          deploymentLink="https://yourdeploymentlink1.com"
        />
        <ProjectsCard
          title="15puzzle game"
          des="
          The 15 Puzzle is a classic sliding puzzle game consisting of a 4x4 grid with numbered tiles arranged in a random order. The objective is to rearrange the tiles!"
          src={projectFourteen}
          githubLink="https://github.com/Prabhuoffi/15-puzzle-game"
          deploymentLink="https://15-puzzle-game-beryl.vercel.app/"
        />
        <ProjectsCard
          title="Temperature coverter"
          des="
          A temperature converter is a tool that allows users to convert temperatures between different units, such as Celsius, Fahrenheit, and Kelvin. It simplifies the process!"
          src={projectFifteen}
          githubLink="https://github.com/Prabhuoffi/TechnoHacks-EduTech-/tree/main/Currency%20Converter"
          deploymentLink="https://15-puzzle-game-beryl.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
