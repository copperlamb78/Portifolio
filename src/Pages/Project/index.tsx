import { Image, LinkDiv, ProjectContainer, ProjectMainContainer, StyledLink } from "./styles";
import HOME from '../../assets/FirstProject1.png'
import ADDRES from '../../assets/FirstProject2.png'

export function Project() {
    return(
        <ProjectMainContainer>
            <ProjectContainer>
                <Image src={HOME}/>
                <Image src={ADDRES}/>
                <LinkDiv>
                    <StyledLink 
                        href="https://github.com/copperlamb78/Eletronic_Recycling"
                        target="_blank"
                    >
                        Projeto completo
                    </StyledLink>
                    <StyledLink 
                        href="http://eletronic-recycling.netlify.app/"
                        target="_blank"
                    >
                        Link do site
                    </StyledLink>
                </LinkDiv>
            </ProjectContainer>
        </ProjectMainContainer>
    )
}