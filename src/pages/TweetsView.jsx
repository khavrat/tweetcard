import { useRef } from "react";
import BackLink from "../components/backLink/BackLink";
import { BsArrowLeft } from "react-icons/bs";
import Tweets from "../components/tweets/Tweets";

function TweetsView() {
  const backLinkHref = useRef(location.state?.from ?? "tweetcard/tweets");
      
    return (
      <>
        <BackLink to={backLinkHref.current}>
          <BsArrowLeft size={20} />
          Go back
        </BackLink>
        <Tweets />
      </>
    );
}

export default TweetsView;
