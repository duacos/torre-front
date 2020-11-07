import { useState, useEffect } from "react";
import axios from "axios";
import { config } from "../config.js";

export const useGetUser = (username) => {
  const [profile, setProfile] = useState({
    person: { name: "", links: [] },
    projects: [],
    languages: [],
    interests: [],
    jobs: [],
    strengths: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${config.url}/api/profile/${username}`)
        .then((response) => {
          setProfile(response.data.body);
        });
    };
    fetchData();
  }, [profile.length, username]);

  return profile;
};
