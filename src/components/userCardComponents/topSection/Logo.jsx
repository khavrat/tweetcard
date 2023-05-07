import logo from "@images/logo.png";
import classes from '../topSection/Logo.module.css';

function Logo() {
  return (
      <img className={classes.logo} src={logo} alt="logo"></img>
  );
}

export default Logo;
