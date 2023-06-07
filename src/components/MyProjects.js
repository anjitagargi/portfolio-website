import React from "react";
import{ motion } from "framer-motion";


//import global styles
import{
    PaddingContainer,
    Heading,
    ParaText,
    BlueText,
}from '../styles/Global.styled';

import { ProjectsDetails } from '../utils/Data';
import Projects from "./layouts/Project";
import { fadeInTopVariant} from "../utils/Variants";

const MyProjects = () => {
    return (
    <PaddingContainer
    id ="Projects"
    top = "5%"
    bottom = "5%"
    responsiveTop = "20%"
    responsiveLeft = "1rem"
    responsiveRight = "1rem"
    
    >  
        <Heading
        as={motion.h4}
        variants = {fadeInTopVariant}
        initial = "hidden"
        whileInView = "visible"
        size = "h4"
         >
           MY PROJECTS
            </Heading>

            <Heading
             as = {motion.h2}
                variants = {fadeInTopVariant}
                initial = "hidden"
                whileInView = "visible"
             size = "h2">
                What <BlueText>I've Built</BlueText>
            </Heading>

            {ProjectsDetails.map((project) => (
                <PaddingContainer key={project.id} top ="5rem" bottom = "5rem" >
                        <Projects data= {project}/>
                </PaddingContainer>
                ))}

            </PaddingContainer>

    )
}

export default MyProjects;
