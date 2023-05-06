import { useRef } from "react";

import BackLink from "../components/backLink/BackLink";
import { BsArrowLeft } from "react-icons/bs";

function TweetsView() {
    const backLinkHref = useRef(location.state?.from ?? "tweetcard/tweets");
    
    return (
      <>
        <div>THIS IS TWEETS PAGE</div>
        <BackLink to={backLinkHref.current}>
          <BsArrowLeft size={20} />
          Go back
        </BackLink>
      </>
    );
}

export default TweetsView;
