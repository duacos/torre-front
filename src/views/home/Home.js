import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "../../assets/styles/home.sass";

const Home = (props) => {
  const [value, setValue] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    history.push(`profile/${value}`);
  };

  return (
    <>
      <div className="home">
        <div className={"home-image"}>
          <img src={Logo} alt="torre profiles" />
        </div>
        <input
          type="search"
          onChange={(e) => handleChange(e)}
          placeholder="Find users from torre.co"
        />

        <button onClick={handleClick}>Check profile</button>
      </div>
    </>
  );
};

export default Home;
