import logo from "../../../images/logo.svg";
import classes from '../Logo/Logo.module.css';

function Logo() {
  return (
      <img className={classes.logo} src={logo} alt="logo"></img>
  );
}

export default Logo;
