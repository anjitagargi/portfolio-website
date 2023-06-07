import React from "react";
import{ motion } from "framer-motion";

//import global styles
import{
    FlexContainer,
    PaddingContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
}from '../styles/Global.styled';


//import My Skills styles
import{ SkillsCardContainer,
    SkillsCard,
}from '../styles/MySkills.styled';

//import icons
import { Skills } from "../utils/Data";

import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const MySkills = () => {
    return (
        <PaddingContainer
        id="MySkills"
        top="10%"
        bottom="10%"
        responsiveLeft = "1rem"
        responsiveRight = "1rem"
        >
    <FlexContainer 
    responsiveFlex 
    responsiveDirection = "column-reverse"
    fullWidthChild>

        {/* --left section-- */}
            <SkillsCardContainer 
            as = {motion.div}
            variants = {fadeInLeftVariant}
            initial = "hidden"
            whileInView = "visible"

            >
             {Skills.map((skill) => (
                 <SkillsCard>
                    <IconContainer size ="5rem" color="blue">
                        {skill.icon}
                    </IconContainer>

                    <Heading as = "h4" size="h4">{skill.tech}</Heading>
               </SkillsCard>
            ))}     
            </SkillsCardContainer>

        {/* --right section-- */}
            <motion.div
            variants = {fadeInRightVariant}
            initial = "hidden"
            whileInView = "visible"
            >
                <Heading as="h4" size="h4">
                    MY SKILLS
                </Heading>

                    <Heading as="h2" size="h2" top= "0.5rem">
                        What <BlueText>I Know</BlueText>
                    </Heading>

                    <ParaText top= "2rem" bottom="1.5rem">
                    I am an enthusiastic self-taught developer who has a deep passion for continually expanding my knowledge and skillset. Over time, I have gained a diverse range of experience in front-end development and UI/UX design. My expertise lies in various technologies such as Javascript, React, HTML, CSS, NodeJS, Figma, Canva, Photoshop, and more.
                    </ParaText>

                    <ParaText bottom="1.5rem">
                    When it comes to developing applications, my primary goal is to create solutions that are not only visually appealing but also scalable and efficient at their core. I strive to deliver engaging and pixel-perfect user experiences that leave a lasting impression.
                    </ParaText>

                    <ParaText bottom="1.5rem">
                    Aside from my technical pursuits, I also enjoy engaging in extracurricular activities that further foster my creativity, problem-solving abilities, and collaborative skills. Some of these activities include sketching, gaming, photography, digital art, playing table tennis, and indulging in novel reading.I even have my own drawing blog website and a gaming YouTube channel, where I can express my passions and share them with others.
                    </ParaText>
                </motion.div>

    </FlexContainer>


        </PaddingContainer>
    );
    }

export default MySkills;