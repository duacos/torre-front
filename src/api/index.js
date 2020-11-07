import { useState, useEffect } from "react";
import axios from "axios";

console.log(process.env.REACT_APP_API);
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
        .get(`${process.env.REACT_APP_API}/api/profile/${username}`)
        .then((response) => {
          setProfile(response.data.body);
        });
    };
    fetchData();
  }, [profile.length, username]);

  return profile;
};
