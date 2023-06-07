import styled from "styled-components";

export const ShowcaseParticleContainer = styled.div`
    position: relative;
    
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        display: none;
    }
    `

    export const ShowcaseImageCard = styled.div`
    border: 1px solid white;
    width: max-content;
    padding-top: 2rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
      }

      width: 60%;
      height: 100%;
    `
export const Particle = styled.img`
position: absolute;
    top: ${({top}) => top};
    left: ${({left}) => left};
    right: ${({right}) => right};
    bottom: ${({bottom}) => bottom};
    transform: rotate(${({rotate}) => rotate});

`