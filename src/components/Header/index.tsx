import { GithubLogo, InstagramLogo, LinkedinLogo, List, MoonStars, Sun, TextOutdent, WhatsappLogo } from "phosphor-react";
import { Container, Icons, Menu, MenuClicked, MenuIcon, Switch } from "./styles";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

interface Props {
    toggleTheme: () => void;
    themeMode: {
        title: string;
        colors: {
          primary: string;
          background: string;
          text: string;
          secondary: string;
        };
    }
}

interface StyledLinkProps {
    isActive?: boolean;
  }
  
  export const StyledLink = styled(Link)<StyledLinkProps>`
    color: ${props => props.isActive ? props.theme.colors.secondary : props.theme.colors.text};
    outline: none;
    text-decoration: none;
    border: none;
    transition: color 0.2s;
  
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  `

export function Header({ toggleTheme, themeMode }:Props) {

    const [menuClicked, setMenuClicked] = useState(() => {
        const savedMenu = localStorage.getItem('menu')
        return savedMenu ? JSON.parse(savedMenu) : false
    })

    const location = useLocation()

    function toggleMenu() {
        setMenuClicked((prevState: any) => {
            const newState = !prevState
            localStorage.setItem('menu', JSON.stringify(newState))
            return newState
        })
    }

    return(
        <Container>
            <Icons>
                <a href="https://github.com/copperlamb78" target="blank">
                    <GithubLogo size={'4vw'}/>
                </a>
                <a href="https://www.instagram.com/antoniobil.2014/" target="blank">
                    <InstagramLogo size={'4vw'}/>
                </a>
                <a href="https://www.linkedin.com/in/antonio-gabriel-gomes-falc%C3%A3o-do-nascimento-a53a95306/" target="blank">
                    <LinkedinLogo size={'4vw'}/>
                </a>
                <a href="https://wa.me/5575992197406?text=Ola%20Dev!" target="blank">
                    <WhatsappLogo size={'4vw'}/>
                </a>
            </Icons>
            
            {menuClicked && (
                <MenuClicked menuClicked={menuClicked}>
                    <Switch onClick={toggleTheme}>
                        {themeMode.title === 'DarkMode' ? (
                            <MoonStars size={'4vw'} />
                        ) : (
                            <Sun size={'4vw'} />
                        )}
                    </Switch>
                    <StyledLink to="/project" isActive={location.pathname === '/project'}>
                        Project
                    </StyledLink>
                    <StyledLink to="/hability" isActive={location.pathname === '/hability'}>
                        Hability
                    </StyledLink>
                    <StyledLink to="/resume" isActive={location.pathname === '/resume'}>
                        Resume
                    </StyledLink>
                    <StyledLink to="/" isActive={location.pathname === '/'}>
                        Home
                    </StyledLink>
                </MenuClicked>
                
            )}
            <Menu onClick={toggleMenu}>
                <MenuIcon menuClicked={menuClicked}>
                    {menuClicked ? <TextOutdent size={'5vw'}/> : <List size={'5vw'}/>}
                </MenuIcon>
                
            </Menu>
            
        </Container>
    )
}