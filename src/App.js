import { useState } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import SpeakerList from "./components/SpeakerList";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <Wrapper>
      <GlobalStyles theme={theme} />
      <Header theme={theme} />
      <Toolbar theme={theme} setTheme={setTheme} />
      <SpeakerList theme={theme} />
    </Wrapper>
  );
};

const GlobalStyles = createGlobalStyle`
*{
box-sizing: border-box;
}

body{
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  background-color: ${({ theme }) =>
    theme === "light" ? "#ffffff" : "#191A19"};
}
`;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
`;

render(<App />, document.getElementById("root"));
