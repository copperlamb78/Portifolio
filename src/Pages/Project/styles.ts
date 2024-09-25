import styled from "styled-components";

export const ProjectMainContainer = styled.div`
    max-width: 50vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
    padding: 1vw;
`
export const ProjectContainer = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1vh;
`
export const Image = styled.img`
    width: 50vw;
    border-radius: 1vw;
    
    @media(max-width: 640px) {
        width: 80vw;
    }
    
`
export const LinkDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1vw;

    @media(max-width: 640px) {
        gap: 15vw;
    }
`
export const StyledLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 12vw; 
    border-radius: 2vw;
    height: 4vw;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.bw};
    transition: background-color 0.3s;
    font-size: 1.5vw;

    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    }

    @media(max-width: 640px) {
        width: 24vw;
        height: 8vw;
        border-radius: 4vw;

        font-size: 3vw;
    }
`
