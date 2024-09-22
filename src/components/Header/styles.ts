
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 10vw;
    background-color: ${props => props.theme.colors.primary};
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.3s

`

export const Switch = styled.button`
    font-family: "Bebas Neue", sans-serif;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 9999px;
    border: 0;
    width: 3vw;
    height: 3vw;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    display: flex;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    }
`

export const Icons = styled.div`
    margin-left: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.colors.text};
        outline: none;
        text-decoration: none;
        border: none;
        border-radius: 9999px;
        width: 3vw;
        height: 3vw;
        transition: background-color 0.3s, color 0.3s;

        &:hover {
            background-color: ${props => props.theme.colors.secondary};
        }
    }
`
export const Menu = styled.button`
    background: transparent;
    border: 0;
    color: ${props => props.theme.colors.text};
    margin-right: 3vw;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: ${props => props.theme.colors.secondary}
    }
`
const fadeIn = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`

export const MenuClicked = styled.div<{menuClicked: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5vw;
    font-size: 2.5vw;
    margin-left: 45%;
    animation: ${prosp => prosp.menuClicked ? fadeIn : false} 0.5s ease-in

`
const rotateIn = keyframes`
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const rotateOut = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

export const MenuIcon = styled.div<{menuClicked: boolean}>`
  animation: ${props => props.menuClicked ? rotateIn : rotateOut} 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

