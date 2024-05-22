import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

// Features Data
export const featuresData = [
  {
    id: 1,
    title: "Responsive Web Design",
    des: "Creating websites that seamlessly adapt to different screen sizes and devices, ensuring optimal user experience across desktops, tablets, and mobile phones",
  },
  {
    id: 2,
    icon: <AiFillAppstore />,
    title: "Frontend Development",
    des: "Building visually appealing and interactive user interfaces using modern frontend technologies such as HTML5, CSS3, and JavaScript frameworks like React.js",
  },
  {
    id: 3,
    icon: <SiProgress />,
    title: "Backend Development",
    des: "Developing robust server-side applications and APIs using backend technologies such as Node.js, Express.js, Python",
  },
  {
    id: 4,
    icon: <FaMobile />,
    title: "Database Integration",
    des: " Integrating and managing databases to store and retrieve data efficiently, including both relational databases like MySQL, PostgreSQL, or SQL Server, and NoSQL databases like MongoDB or Firebase Firestore",
  },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "Security Implementation:",
    des: "Implementing security measures to protect against common web vulnerabilities such as cross-site scripting (XSS), SQL injection ",
  },
  {
    id: 6,
    icon: <FaGlobe />,
    title: "Continuous Integration and Deployment (CI/CD)",
    des: "Setting up automated processes for continuous integration and deployment to streamline the development workflow, improve code quality",
  },
];
