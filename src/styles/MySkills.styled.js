import styled from "styled-components";

export const SkillsCardContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 2rem;
    padding: 0 5%;

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        display: block;
        padding:    0;
    }


`

export const SkillsCard = styled.div`
    width: 230PX;
    border: 1px solid #fff;
    border-radius: 1rem;
    padding: 3rem 0;
    background-color: ${({theme}) => theme.colors.primary.light};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 100%;
        margin-top: 2rem;
    }


`