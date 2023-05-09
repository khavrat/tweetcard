import PropTypes from 'prop-types';
import classes from "../followBtn/FollowBtn.module.css";

function LoadMoreBtn({ onClick, children }) {
  return (
    <button
      className={`${classes.followBtn} ${classes.following}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};


