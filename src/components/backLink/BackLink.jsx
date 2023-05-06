import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const BackLink = ({ to, children }) => {
  return <NavLink to={to}>{children}</NavLink>;
};

export default BackLink;

BackLink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node,
}