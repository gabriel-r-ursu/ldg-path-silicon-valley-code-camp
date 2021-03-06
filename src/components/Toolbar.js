import { useContext } from "react";
import styled from "styled-components";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";

const Toolbar = ({ theme, setTheme }) => {
  const {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    setSearchSpeaker,
    EVENT_YEARS,
  } = useContext(SpeakerFilterContext);

  return (
    <Container theme={theme}>
      <AddUser />
      <ShowSessionsSelector
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      />
      <ThemeSelector theme={theme} setTheme={setTheme} />
      <Search setSearchSpeaker={setSearchSpeaker} />
      <YearSelector
        eventYear={eventYear}
        setEventYear={setEventYear}
        years={EVENT_YEARS}
      />
    </Container>
  );
};

export default Toolbar;

function AddUser() {
  return (
    <AddUserButton onClick={() => {}}>
      <span className="material-icons btn-name">add_circle_outline</span>
      <span className="btn-name"> Add Speaker</span>
    </AddUserButton>
  );
}

function ShowSessionsSelector({ showSessions, setShowSessions }) {
  return (
    <CheckBoxContainer>
      <span>Show Sessions</span>
      <CheckBoxWrapper>
        <CheckBox
          id="checkbox"
          type="checkbox"
          checked={showSessions}
          onChange={(event) => {
            setShowSessions(event.target.checked);
          }}
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </CheckBoxContainer>
  );
}

function ThemeSelector({ theme, setTheme }) {
  return (
    <ThemeSelectorContainer>
      <span>Theme </span>
      <select value={theme} onChange={(event) => setTheme(event.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </ThemeSelectorContainer>
  );
}

function Search({ setSearchSpeaker }) {
  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchSpeaker(e.target.value);
        }}
      ></input>
      <span className="material-icons">pageview</span>
    </SearchContainer>
  );
}

function YearSelector({ eventYear, setEventYear, years }) {
  return (
    <YearSelectorContainer>
      <span>Year </span>
      <select
        dir="ltr"
        value={eventYear}
        onChange={({ currentTarget }) => {
          setEventYear(currentTarget.value);
        }}
      >
        {years.map((year) => {
          return (
            <option value={year} key={year}>
              {year}
            </option>
          );
        })}
      </select>
    </YearSelectorContainer>
  );
}

const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1em;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;

  font-weight: bold;
  span {
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
  }
`;

const AddUserButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: none;
  border-radius: 5px;
  padding: 0.5em;

  background-color: #50b4b0;
  .btn-name {
    color: #f8f8f8;
  }
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  span {
    font-size: 16px;
  }
`;

const CheckBoxWrapper = styled.div`
  position: relative;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const ThemeSelectorContainer = styled.div`
  position: relative;
  select {
    appearance: none;

    padding: 0.5em 2em;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    padding: 0.5em 2em;
    border: 1px solid #f0f0f0;
    border-right: none;
    border-radius: 5px;
  }

  span {
    cursor: pointer;
    position: absolute;
    right: -5px;
    font-size: 3em;
    color: #6b767d;
  }
`;

const YearSelectorContainer = styled.div`
  select {
    padding: 0.5em 2em;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
  }
`;
