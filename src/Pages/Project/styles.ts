import styled from "styled-components";

export const ProjectMainContainer = styled.div`
    max-width: 80vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
    padding: 1vw;
`
export const ProjectContainer = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1vh;
`
export const Image = styled.img`
    width: 30vw;
    border-radius: 1vw;
`
export const LinkDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1vw;
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

    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    }
`
