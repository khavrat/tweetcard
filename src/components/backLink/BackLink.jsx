import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import classes from '../backLink/BackLink.module.css';

const BackLink = ({ to, children }) => {
  return (
    <NavLink to={to} className={classes.backLinkBtn}>
      {children}{" "}
    </NavLink>
  );
};

export default BackLink;

BackLink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node,
}