import img1 from '../../assets/HomeImg.png'
import { Container, Image, InicialText } from './styles'


export function Home() {
    return(
        <Container>
            <div>
                <InicialText>Hi, i'm Gabriel </InicialText>
                <InicialText>Welcome!</InicialText>
            </div>
            <Image src={img1}/>
        </Container>
    )
}