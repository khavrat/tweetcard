import PropTypes from 'prop-types';
import classes from "./FollowBtn.module.css";

function FollowBtn({ isFollowing, onClick, children }) {
  const btnClasses = isFollowing
    ? `${classes.followBtn} ${classes.following}`
    : `${classes.followBtn} ${classes.follow}`;

  return (
    <button className={btnClasses} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default FollowBtn;

FollowBtn.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};