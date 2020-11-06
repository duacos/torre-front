import React from "react";

const Header = ({ profile }) => {
  return (
    <header className="context">
      <div className="profile-header">
        <div className="profile-image">
          <img src={profile.person.pictureThumbnail} alt="Profile" />
        </div>
        <div className="profile-title">
          <h1>{profile.person.name}</h1>
          <div className="profile-headline">
            <h2>{profile.person.professionalHeadline}</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
