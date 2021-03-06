import React from "react";
import { ReactComponent as Langs } from "../assets/images/langs.svg";
import { ReactComponent as Social } from "../assets/images/social.svg";
import { ReactComponent as Learn } from "../assets/images/learn.svg";

const Details = ({ profile }) => {
  const langList = () => {
    return profile.languages.map((lan) => {
      return <li key={lan.id}>{lan.language}</li>;
    });
  };

  const linksList = () => {
    return profile.person.links.map((link) => {
      return (
        <li key={link.id}>
          <a target="_blank" href={link.address} rel="noreferrer">
            {link.name}
          </a>
        </li>
      );
    });
  };

  const interestsList = () => {
    return profile.interests.map((interest) => {
      return <li key={interest.id}>{interest.name}</li>;
    });
  };

  const strengthsList = () => {
    return profile.strengths.map((strength) => {
      return <li key={strength.id}>{strength.name}</li>;
    });
  };

  return (
    <div className="details-box">
      <div className="details-separator">
        <div className="details-description">Languages</div>
        <div className="details-content">
          <ul className="details-img">
            <Langs />
            {langList()}
          </ul>
        </div>
      </div>

      <div className="details-separator">
        <div className="details-description">Social media</div>
        <div className="details-content">
          <ul className="details-img">
            <Social />
            {linksList()}
          </ul>
        </div>
      </div>

      <div className="details-separator">
        <div className="details-description">Interests</div>
        <div className="details-content">
          <ul className="details-img">
            <Learn />
            {interestsList()}
          </ul>
        </div>
      </div>

      <div className=" details-strengths">
        <div className="details-description">Strengths</div>
        <ul className="details-strengths-box">{strengthsList()}</ul>
      </div>
    </div>
  );
};

export default Details;
