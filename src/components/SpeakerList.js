import styled from "styled-components";
import SpeakerCard from "./SpeakerCard";
import { data } from "../SpeakerData";

const SpeakerList = () => {
  return (
    <Container>
      {data.map((speaker) => {
        return <SpeakerCard key={speaker.id} speaker={speaker} />;
      })}
    </Container>
  );
};

export default SpeakerList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1em;
  padding: 1em;
`;
