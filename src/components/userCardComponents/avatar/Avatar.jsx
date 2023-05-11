import PropTypes from "prop-types";
import classes from "../avatar/Avatar.module.css";

function Avatar({ name, avatar }) {
  return (
    <div className={classes.avatarContainer}>
      <img className={classes.avatar} src={avatar} alt={`${name} avatar`} />
    </div>
  );
}

export default Avatar;

Avatar.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
};
