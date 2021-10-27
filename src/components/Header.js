import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <img src={require("../../static/images/SVCClogo.png")} alt="app logo" />
      <p>Silicon Valley Code Camp</p>
      <Authenticator />
    </Container>
  );
};

function Authenticator() {
  return (
    <div>
      <span>Logged in as Cotcodac</span> &nbsp;
      <Button>Logout</Button>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-flow: column no-wrap;
  padding-bottom: 1em;

  p {
    font-size: 18px;
    font-weight: 600;
  }
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #6b767d;
  color: white;
  padding: 0.5em;
  border: none;
  border-radius: 5px;
`;

export default Header;
