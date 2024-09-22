import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 2.5%;
    width: 60vw;
    height: 30vw;
`

export const ConjuntIcons = styled.div`
    
`

export const IconsContainer = styled.div`
    background-color: ${props => props.theme.colors.primary};
    border-radius: 1.5vw;
    margin-top: 10vw;
    width: 13vw;
    height: 5vw;
`