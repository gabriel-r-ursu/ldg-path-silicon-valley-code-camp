import styled from "styled-components";

const SpeakerCard = () => {
  return (
    <CardContainer>
      <SpeakerImage />
      <SpeakerName />
      <FavoriteBtn />
      <SpeakerDescription />
      <SpeakerSocials />
      <div className="separator"></div>
      <SessionsList />
      <RemoveSpeaker />
    </CardContainer>
  );
};

export default SpeakerCard;

function SpeakerImage() {
  return (
    <div>
      <img
        src={require("../images/dummy-speaker-image.jpg")}
        alt="photo"
        width="220px"
      />
    </div>
  );
}

function SpeakerName() {
  return (
    <div className="speaker-name">
      <span>Generic Name</span>
    </div>
  );
}

function FavoriteBtn() {
  return (
    <div className="favorite-btn">
      <span className="material-icons">star_border</span>
      <span>Favorite</span>
    </div>
  );
}

function SpeakerDescription() {
  return (
    <div className="description">
      <span>
        Lorem ipsum dolor sit amet, coetur adipisicing elit. Facere...
      </span>
    </div>
  );
}

function SpeakerSocials() {
  return (
    <div className="socials-container">
      <div className="social">
        <span className="material-icons">business</span>
        <div className="category-container">
          <span className="category">Company</span>
          <span className="category-name">Name</span>
        </div>
      </div>
      <div className="social">
        <span className="material-icons">alternate_email</span>
        <div className="category-container">
          <span className="category">Twitter</span>
          <span className="category-name">Handle</span>
        </div>
      </div>
    </div>
  );
}

function SessionsList() {
  return (
    <div className="sessions-container">
      <span>Sessions list Session Room: room #</span>
    </div>
  );
}

function RemoveSpeaker() {
  return (
    <div className="button-container">
      <button className="remove-button">
        <span class="material-icons">remove_circle_outline</span>
        <span>Delete Speaker</span>
      </button>
    </div>
  );
}

const CardContainer = styled.div`
  position: relative;
  width: 260px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #f0f0f0;
  padding: 20px;

  color: #939393;

  .speaker-name {
    width: 100%;
    padding: 1em 0;

    font-size: 16px;
    font-weight: bold;
    text-align: left;

    color: #000000;
  }

  .favorite-btn {
    cursor: pointer;
    line-height: 1.5em;

    .material-icons {
      font-size: 16px;
      color: #e9660d;
    }
  }

  .description {
    text-justify: distribute;
    padding-bottom: 1em;
  }

  .socials-container {
    width: 100%;
    display: flex;
    gap: 1em;

    padding-bottom: 1em;
  }

  .social {
    width: 50%;
    display: flex;
    flex-direction: row;

    .material-icons {
      color: #50b4b0;
      border: 1px solid #50b4b0;
      border-radius: 50%;
      padding: 3px;
      margin-right: 5px;
    }

    .category-container {
      display: flex;
      flex-direction: column;

      .category {
        color: #000000;
        font-weight: bold;
      }

      .category-name {
        font-size: 12px;
      }
    }
  }

  .separator {
    width: 119%;
    padding-left: 20px;
    margin-left: -20px;
    border-bottom: 1px solid #f0f0f0;
  }

  .sessions-container {
    width: 100%;
    margin: 0.5em 0;
    border-radius: 5px;

    background-color: #efefef;
  }

  .button-container {
    width: 100%;
    .remove-button {
      cursor: pointer;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 3px;

      padding: 0.5em;
      border: none;
      border-radius: 5px;

      font-size: 12px;
      color: #939393;

      .material-icons {
        font-size: 12px;
        font-weight: bold;
        color: red;
      }
    }
  }
`;
