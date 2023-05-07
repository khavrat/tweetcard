import { useState } from "react";
import { NavLink } from "react-router-dom";

import formatNumberWithCommas from "../../utils/formatNumberWithCommas";

function User({ name, tweets, followers, avatar }) {
  const [followersCount, setFollowersCount] = useState(followers);
  const [isFollowing, setIsFollowing] = useState(false);

  function toggleFollow() {
    if (isFollowing) {
      setFollowersCount((prevCount) => {
        const newCount = prevCount - 1;
        return newCount > 0 ? newCount : 0;
      });
      setIsFollowing(false);
    } else {
      setFollowersCount((prevCount) => {
        const newCount = prevCount + 1;
        return newCount > 0 ? newCount : 0;
      });
      setIsFollowing(true);
    }
  }

  return (
    <>
      <img src={avatar} alt={`${name} avatar`}/>
      <NavLink to="/tweetcard/tweets">
        <span>{tweets}</span>
        tweets
      </NavLink>
      <p>
        <span>{formatNumberWithCommas(followersCount)}</span> followers
      </p>
      <button
        type="button"
        onClick={toggleFollow}
        style={{ backgroundColor: isFollowing ? "green" : "blue" }}
      >
        {isFollowing ? "FOLLOWONG" : "FOLLOW"}
      </button>
    </>
  );
}

export default User;
