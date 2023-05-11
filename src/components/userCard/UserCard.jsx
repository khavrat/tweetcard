import PropTypes from "prop-types";
import Logo from '../userCardComponents/Logo/Logo';
import Avatar from "../userCardComponents/avatar/Avatar";
import UserInfo from "../userCardComponents/userInfo/UserInfo";

function User({ id, name, tweets, followers, isFollowing, avatar }) {
  return (
    <>
      <Logo />
      <Avatar name={name} avatar={avatar} />
      <UserInfo
        id={id}
        tweets={tweets}
        followers={followers}
        isFollowing={isFollowing}
      />
    </>
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
