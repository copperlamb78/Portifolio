import { useRouteError } from "react-router-dom";
import { Container } from "./styles";

type RouterError = {
    status?: number
    statusText?: string
    mensage?: string
}

export default function ErrorPage() {
    const error = useRouteError() as RouterError
    console.error(error)

    return (
        <Container>
            <h1>Oh no!</h1>
            <p>this page not exist</p>
            <h1>Erro 404</h1>
            <p>
                <i>{error.statusText || error.mensage}</i>
            </p>
        </Container>
    )
}