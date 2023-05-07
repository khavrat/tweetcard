import PropTypes from "prop-types";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import SharedLayout from "../../sharedLayout/SharedLayout";
import FollowBtn from "../userCardComponents/followBtn/FollowBtn";
import classes from "../userCard/UserCard.module.css";

import formatNumberWithCommas from "../../utils/formatNumberWithCommas";

function User({ name, tweets, followers, avatar }) {
  const [followersCount, setFollowersCount] = useState(100500 + followers);
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
    <div className={classes.box}>
      <SharedLayout />
      <div className={classes.avatarContainer}>
        <img className={classes.avatar} src={avatar} alt={`${name} avatar`} />
      </div>
      <NavLink to="/tweetcard/tweets" className={classes.tweetsLink}>
        <span>{tweets} </span>
        tweets
      </NavLink>
      <p className={classes.followInfo}>
        <span>{formatNumberWithCommas(followersCount)}</span> followers
      </p>
      <FollowBtn isFollowing={isFollowing} onClick={toggleFollow}>
        {" "}
        {isFollowing ? "FOLLOWING" : "FOLLOW"}
      </FollowBtn>
    </div>
  );
}

export default User;

 User.propTypes = {
   name: PropTypes.string.isRequired,
   tweets: PropTypes.number.isRequired,
   followers: PropTypes.number.isRequired,
   avatar: PropTypes.string.isRequired,
 };