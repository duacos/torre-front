import { useState, useEffect } from "react";
import axios from "axios";
import { config } from "../config.js";

export const useGetUser = () => {
  const [profile, setProfile] = useState({ person: { name: "" } });

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${config.url}/api/profile/duacos`).then((response) => {
        setProfile(response.data.body);
      });
    };
    fetchData();
  }, [profile.length]);

  return profile;
};
