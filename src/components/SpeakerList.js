import { useState, useContext } from "react";
import styled from "styled-components";
import SpeakerCard from "./SpeakerCard";
import { data } from "../SpeakerData";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";

const SpeakerList = () => {
  const [speakerData, setSpeakerData] = useState(data);
  const { searchSpeaker, eventYear } = useContext(SpeakerFilterContext);
  function toggleFavorite(id) {
    const speakerInfo = speakerData.find((speakerRecords) => {
      return speakerRecords.id === id;
    });

    const updatedSpeakerInfo = {
      ...speakerInfo,
      favorite: !speakerInfo.favorite,
    };

    const newSpeakerInfo = speakerData.map((speakerRecords) => {
      return speakerRecords.id === id ? updatedSpeakerInfo : speakerRecords;
    });

    setSpeakerData(newSpeakerInfo);
  }

  return (
    <Container>
      {speakerData
        .filter((speaker) => {
          return (
            speaker.first.toLowerCase().includes(searchSpeaker) ||
            speaker.last.toLowerCase().includes(searchSpeaker)
          );
        })
        .filter((speaker) => {
          return speaker.sessions.find((session) => {
            return session.eventYear === eventYear;
          });
        })
        .map((speaker) => {
          return (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
              toggleFavorite={() => {
                toggleFavorite(speaker.id);
              }}
            />
          );
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
