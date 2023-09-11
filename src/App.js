import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/Theme';
import { Container, MainBody,FadeImage } from './styles/Global.styled';


//import components
import Showcase from './components/Showcase';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import TopFadeImage from './assets/top.png';
import LeftFadeImage from './assets/left.png';
import RightFadeImage from './assets/right.png';
import BottomFadeImage from './assets/bottom.png';

function App() {   
  return (
    <ThemeProvider theme={theme}>
      <MainBody> 
        <Navbar/>
        <Container>
          <Showcase/>
          <MySkills/>
          <MyProjects/>
          <Footer/>
        </Container>
        <FadeImage src = {TopFadeImage} top = "0" />
        <FadeImage src = {RightFadeImage} top = "120vh" right="0vh"/>
        <FadeImage src = {LeftFadeImage} top = "250vh" left = "-20vh"  />
        <FadeImage src = {RightFadeImage} top = "420vh" right = "0vh" />
      </MainBody>
      </ThemeProvider>
    
  );
}

export default App;
