import { createContext } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

const SpeakerFilterContext = createContext();

function SpeakerFilterProvider({
  children,
  initialShowSessions = true,
  initialEventYear = "2019",
}) {
  const {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchSpeaker,
    setSearchSpeaker,
    EVENT_YEARS,
  } = useSpeakerFilter(initialShowSessions, initialEventYear);

  return (
    <SpeakerFilterContext.Provider
      value={{
        showSessions,
        setShowSessions,
        eventYear,
        setEventYear,
        searchSpeaker,
        setSearchSpeaker,
        EVENT_YEARS,
      }}
    >
      {children}
    </SpeakerFilterContext.Provider>
  );
}

export { SpeakerFilterContext, SpeakerFilterProvider };
