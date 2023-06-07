import { color } from 'framer-motion';
import  styled from  'styled-components' ;


export const TechStackCard = styled.div`
display: inline-block;
background-color: ${({theme}) => theme.colors.secondary  };
color: #fff;
padding: 0.3rem 1rem;
border-radius: 5px;

@media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
    margin-right: 1rem;
    margin-bottom: 1rem;
}
`


export const ProjectImageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: ${({justify}) => justify};

`

export const ProjectImage = styled.img`
    border: 1px solid #fff;
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin-left: -80px;
    margin-right: -60px;


        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        


    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 100%;
       margin-top: 2rem;
    }
    `