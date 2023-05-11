import { useRef } from "react";
import BackLink from "../components/backLink/BackLink";
import { BsArrowLeft } from "react-icons/bs";
import Tweets from "../components/tweets/Tweets";
import classes from '../pages/TweetsView.module.css';

function TweetsView() {
  const backLinkHref = useRef(location.state?.from ?? "tweetcard/tweets");

  return (
    <section className={classes.container}>
      <BackLink to={backLinkHref.current}>
        <BsArrowLeft size={20} style={{ marginRight: "10px", verticalAlign: "bottom" }} />
        Go back
      </BackLink>
      <Tweets />
    </section>
  );
}

export default TweetsView;
