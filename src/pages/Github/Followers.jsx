import axios from "axios";
import { useEffect, useState } from "react";

import { useParams } from "react-router";
const FollowersGithub = () => {
  const [followers, setFollowers] = useState([]);
  const { username } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/followers`)
      .then(({ data }) => {
        setFollowers(data);
      });
  }, []);
  return (
    <div style={{ display: "flex" }}>
      {followers.map(({ avatar_url, login }) => {
        return (
          <div>
            <p>{login}</p>
            <img style={{ with: 200, height: 200 }} src={avatar_url} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default FollowersGithub;
