import LoginForm from "../components/LoginForm";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`

function Login() {
    return (
        <Container>
            <LoginForm />
        </Container>
    )
}

export default Login;