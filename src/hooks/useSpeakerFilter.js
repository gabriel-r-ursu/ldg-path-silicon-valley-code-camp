import { useState } from "react";

function useSpeakerFilter(initialShowSessions, initialEventYear) {
  const [showSessions, setShowSessions] = useState(initialShowSessions);
  const [eventYear, setEventYear] = useState(initialEventYear);
  const [searchSpeaker, setSearchSpeaker] = useState("");

  const EVENT_YEARS = [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
  ];
  return {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchSpeaker,
    setSearchSpeaker,
    EVENT_YEARS,
  };
}

export default useSpeakerFilter;
