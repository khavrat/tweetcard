import bgImg from "../../images/bgImg.png";
import classes from '../userCardComponents/Background.module.css';

function Background() {
  return <img className={classes.bgImg} src={bgImg} alt="dialog scheme"></img>;
}

export default Background;
