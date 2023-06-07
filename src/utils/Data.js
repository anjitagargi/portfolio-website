import { FaReact, FaNode, FaCss3Alt, FaHtml5, FaJsSquare ,FaFigma } from 'react-icons/fa';

import{ SiJavascript} from 'react-icons/si';
import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';


export const Skills = [
    {
        id: 0,
            tech: "React",
            icon: <FaReact/>,

    },
    {
        id: 1,
            tech: "Node",
            icon: <FaNode/>,

    },
    {
        id: 2,
            tech: "CSS",
            icon: <FaCss3Alt/>,

    },
    {
        id: 3,
            tech: "HTML",
            icon: <FaHtml5/>,

    },
    {
        id: 4,
            tech: "Javascript",
            icon: <SiJavascript/>,

    },
    {
        id: 5,

            tech: "Figma",
            icon: <FaFigma/>,

    },


];

export const ProjectsDetails = [
    {
        id: 0,
        project_name: "Interview Target",
        project_desc: "It’s a collaboration project with two others built on the premise that practice preparation are crucial to overcoming your anxieties when attending an interview. I have made my contribution by designing the UI of the website and also in the frontend of the project by being a React developer.",
        tech_stack: ["ReactJS"," Node", "CSS","Bootstrap", "Agora", "Firebase"], 
        project_img: Project1,
        github_link: "https://devpost.com/software/interview-target?ref_content=user-portfolio&ref_feature=in_progress",
        reverse: false,
    },

    {
        id: 1,
        project_name: "MOVIE MANAGEMENT",
        project_desc: "Designing a movie database that allows users to login into the website as visitors or reviewers. Visitors can search for movies from the database and access information about the movie, they can create watchlists of movies they want to watch as well list of movies they have watched. Reviewers can give reviews of movies they have seen and access the list of movies they have reviewed.",
        tech_stack: ["CSS", "HTML", "Javascript"],
        project_img: Project2,
        github_link: "https://github.com/anjitagargi/Movie-Management-System",
        reverse: true,
    },
]; 


export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: `Home`,
    },
    {
        id: 1,
        name: 'My Skills',
        href: "MySkills",
    },
    {
        id: 2,
        name: 'My Projects',
        href: 'Projects',
    },
    {
        id: 3,
        name: 'Contact',
        href: 'Contact',
    }
];




