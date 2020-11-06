import React from "react";

import "../../assets/styles/bgprofile.sass";
import "../../assets/styles/profile.sass";
import { useGetUser } from "../../api/index.js";
import Header from "../../components/Header.js";
import Projects from "../../components/Projects.js";

const Profile = () => {
  const profile = useGetUser();

  return (
    <>
      <Header profile={profile} />
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <Projects profile={profile} />
    </>
  );
};

export default Profile;
