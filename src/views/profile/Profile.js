import React from "react";

import "../../assets/styles/bgprofile.sass";
import "../../assets/styles/profile.sass";
import { useGetUser } from "../../api/index.js";
import Header from "../../components/Header.js";
import Projects from "../../components/Projects.js";
import Details from "../../components/Details.js";

const Profile = (props) => {
  const username = props.match.params.username;
  const profile = useGetUser(username);

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

      <Projects profile={profile} elementToAnalyse="projects" />
      <Projects profile={profile} elementToAnalyse="jobs" />

      <Details profile={profile} />

      <footer>Orignal website is torre.co</footer>
    </>
  );
};

export default Profile;
