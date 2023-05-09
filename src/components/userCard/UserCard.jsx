import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import SharedLayout from "../../sharedLayout/SharedLayout";
import FollowBtn from "../userCardComponents/followBtn/FollowBtn";
import classes from "../userCard/UserCard.module.css";

import formatNumberWithCommas from "../../utils/formatNumberWithCommas";
import { useDispatch } from "react-redux";
import { updateNewUsers } from "../../redux/userSlice";

function User({ id, name, tweets, followers, isFollowing, avatar }) {
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
        <span>{formatNumberWithCommas(followers)}</span> followers
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
  id: PropTypes.string,
  name: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
  isFollowing: PropTypes.bool,
  avatar: PropTypes.string,
};
