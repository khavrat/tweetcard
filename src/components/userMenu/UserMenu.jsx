import { NavLink } from "react-router-dom";

function User() {
    return (
      <>
        <div>Avatar</div>
        <NavLink to="/tweetcard/tweets">
          <span>777</span> 
          tweets
        </NavLink>
        <p><span>100500</span> followers</p>
        <button type="button">FOLLOW</button>
      </>
    );
}

export default User;