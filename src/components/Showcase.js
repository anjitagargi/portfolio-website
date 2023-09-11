import React from "react";
import {motion} from 'framer-motion';

//import global styles
import{
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
}from '../styles/Global.styled';

//import showcase styles
import {ShowcaseImageCard, Particle,} from '../styles/Showcase.styled';

//importing react icons
import {BsLinkedin, BsTwitter, BsGithub, BsMedium} from 'react-icons/bs';
import { ShowcaseParticleContainer } from "../styles/Showcase.styled";

//import assets
import ShowcaseImg from '../assets/image1.png';
import Background from '../assets/particle.png';
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";


const Showcase = () => {
    return (
        <PaddingContainer 
        id= "Home"
        left = "3%"
        right = "10%"
        top = "18%"
        bottom = "10%"
        resposiveLeft = "1rem"
        responsiveRight = "1rem"
        responsiveTop = "8rem"
         >
           <FlexContainer align = "center" fullWidthChild>
            {/* --left--content--*/}
            <motion.div
                  variants={fadeInLeftVariant}
                  initial="hidden"
                  whileInView="visible"

            >
                <Heading as="h4" size = "h4">Hello!</Heading>
                <Heading 
                as="h2"
                size = "h2"
                top = "0.5rem"
                bottom = "1rem"
                >
                    I'm <BlueText>Anjita Gargi Chandora</BlueText>
                </Heading>

                <Heading as="h4" size="h4">
                    I'm a <BlueText>UI/UX Designer</BlueText> and <BlueText>Frontend Developer</BlueText>  
                </Heading>

                <ParaText top = "2rem" bottom = "4rem">
                    Hello,my name is Anjita Gargi Chandora and I'm a UI/UX designer and front-end developer. I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not coding, you'll find me sketching, reading or watching football.
                    </ParaText> 

                    {/* --social--icons--*/ }
                 <FlexContainer gap="50px" responsiveFlex>
                    <IconContainer size="1.5rem">
                    <a href="https://www.linkedin.com/anjita-chandora">
                    <BsLinkedin style={{ color: '#FFFFFF' }} />
                    </a>
                         </IconContainer>

                             <IconContainer size="1.5rem">
                            <a href="https://www.twitter.com/AnjitaGargi">
                            <BsTwitter style={{ color: '#FFFFFF' }} />
                            </a>
                        </IconContainer>

                        <IconContainer size="1.5rem">
                                <a href="https://www.github.com/anjitagargi">
                                <BsGithub style={{ color: '#FFFFFF' }} />
                                </a>
                            </IconContainer>

                            <IconContainer size="1.5rem">
                                <a href="https://medium.com/@anjitagargi">
                                <BsMedium style={{ color: '#FFFFFF' }} />
                                </a>
                            </IconContainer>

                        </FlexContainer>
                </motion.div>

                {/* --right--content--*/ }
                <FlexContainer 
                as ={motion.div}
                variants ={fadeInRightVariant}
                intial = "hidden"
                whileInView = "visible"
                justify = "flex-end"
                >
                        <ShowcaseParticleContainer> 
                        <ShowcaseImageCard>


                            {/* --image-- */}
                            <img src={ShowcaseImg} alt="showcase" />
                         </ShowcaseImageCard>

                            <Particle
                            as= {motion.img}
                             animate = {{
                                    x: [0,100, 0],
                                    rotate: 360,
                                    scale: [1, 0.5, 1],
                                    }}
                                    transition = {{
                                        duration: 20,
                                        repeat: Infinity,
                                    }}

                            src = {Background}
                             alt="particle"
                            top = "-80px"
                            left = "-20px"
                            rotate = "60deg" 
                            />

                         <Particle 
                         as = {motion.img}
                         animate = {{
                            x: [0, 100, 0],
                            rotate: 360,
                            scale: [1, 0.8, 1],
                            }}
                            transition = {{
                                duration: 18,
                                repeat: Infinity,
                            }}
                            src = {Background}
                             alt="particle"
                            top = "50px"
                            right = "-70px"
                            rotate = "0deg" 
                            />

                         <Particle 
                         as = {motion.img}
                         animate = {{
                            x: [0, 100, 0],
                            rotate: 360,
                            scale: [1, 0.9, 1],
                            }}
                            transition = {{
                                duration: 15,
                                repeat: Infinity,
                            }}
                            src = {Background}
                             alt="particle"
                            bottom = "-60px"
                            left = "-70px"
                            rotate = "50deg" 
                            />
                         </ShowcaseParticleContainer>
                    </FlexContainer>
            </FlexContainer> 
    </PaddingContainer>
    )
}

export default Showcase;  