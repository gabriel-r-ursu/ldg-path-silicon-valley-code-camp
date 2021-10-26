import styled from "styled-components";
import SpeakerCard from "./SpeakerCard";

const SpeakerList = () => {
  return (
    <Container>
      <SpeakerCard />
    </Container>
  );
};

export default SpeakerList;

const Container = styled.div`
  display: flex;
  padding: 2em 0;
`;
