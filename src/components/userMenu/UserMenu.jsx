import { useState } from "react";
import { NavLink } from "react-router-dom";

import formatNumberWithCommas from "../../utils/formatNumberWithCommas";

function User() {
  const [followersCount, setFollowersCount] = useState(100500);
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
      <div>Avatar</div>
      <NavLink to="/tweetcard/tweets">
        <span>777</span>
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
