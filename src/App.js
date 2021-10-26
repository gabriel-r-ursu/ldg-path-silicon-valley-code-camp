import { render } from "react-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import SpeakerList from "./components/SpeakerList";

const GlobalStyles = createGlobalStyle`
*{
box-sizing: border-box;
}

body{
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}
`;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
`;

const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <Toolbar />
      <SpeakerList />
    </Wrapper>
  );
};

render(<App />, document.getElementById("root"));
