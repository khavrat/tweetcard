import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateNewUsers } from "../../../redux/userSlice";

import { NavLink } from "react-router-dom";
import FollowBtn from "../followBtn/FollowBtn";
import classes from "../userInfo/UserInfo.module.css";

import formatNumberWithCommas from "../../../utils/formatNumberWithCommas";

function UserInfo({ id, tweets, followers, isFollowing }) {
  const dispatch = useDispatch();

  function toggleFollow() {
    if (isFollowing) {
      const followersCount = followers - 1;
      dispatch(updateNewUsers({ id, followersCount, isFollowing }));
    } else {
      const followersCount = followers + 1;
      dispatch(updateNewUsers({ id, followersCount, isFollowing }));
    }
  }

  return (
    <div className={classes.userInfo}>
      <NavLink
        to={`/tweetcard/tweets`}
        state={{ from: id }}
        className={classes.tweetsLink}
      >
        <span>{tweets} </span>
        tweets
      </NavLink>
      <p className={classes.followInfo}>
        <span>{formatNumberWithCommas(followers)}</span> followers
      </p>
      <FollowBtn isFollowing={isFollowing} onClick={toggleFollow}>
        {" "}
        {isFollowing ? "FOLLOWING" : "FOLLOW"}
      </FollowBtn>
    </div>
  );
}

export default UserInfo;

UserInfo.propTypes = {
  id: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
  isFollowing: PropTypes.bool,
};
