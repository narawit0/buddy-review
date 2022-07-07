import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  width: 960px;
  margin: 0 auto;
  background-color: #EEE;
  min-height: 100vh;
`

function MainLayout({ children }) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default MainLayout;