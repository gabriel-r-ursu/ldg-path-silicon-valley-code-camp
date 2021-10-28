import styled from "styled-components";

const Header = ({ theme }) => {
  return (
    <Container theme={theme}>
      <img src={require("../../static/images/SVCClogo.png")} alt="app logo" />
      <p>Silicon Valley Code Camp</p>
      <Authenticator />
    </Container>
  );
};

function Authenticator() {
  return (
    <div>
      <span>Logged in as Cotcodac</span>
      &nbsp; &nbsp;
      <button>Logout</button>
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
  color: ${({ theme }) => (theme === "light" ? "" : "#f8f8f8")};

  p {
    font-size: 18px;
    font-weight: 600;
  }

  span {
    font-weight: bold;
    color: ${({ theme }) => (theme === "light" ? "" : "#4E9F3D")};
  }

  button {
    cursor: pointer;
    background-color: #6b767d;
    color: white;
    padding: 0.5em;
    border: none;
    border-radius: 5px;
  }
`;

export default Header;
