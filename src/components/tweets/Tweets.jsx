import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getNewUsers } from "../../redux/userSlice";
import { useCallback, useEffect, useState } from "react";
import classes from "../tweets/Tweets.module.css";

function Tweets() {
  const [userTweets, setUserTweets] = useState([]);
  const [userName, setUserName] = useState("");
  const location = useLocation();
  const newUsers = useSelector(getNewUsers);

  const getTweetsUser = useCallback(async () => {
    const user = newUsers.find((user) => user.id === location.state.from);
    const tweets = Array.from({ length: user.tweets }, (_, index) => index + 1);
    setUserTweets(tweets);
    setUserName(user.name);
  }, [location.state.from, newUsers]);

  useEffect(() => {
    if (newUsers.length === 0) {
      return;
    } else {
      getTweetsUser();
    }
  }, [newUsers.length, getTweetsUser]);

  return (
    <>
      <h1 className={classes.userTitle}>
        {`${userTweets.length}`} tweets of {`${userName}`}:
      </h1>
      <ul className={classes.twet}>
        {userTweets.map((tweet) => (
          <li key={tweet} className={classes.twetItem}>
            tweet {`${tweet}`}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tweets;
