import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewUsers, setNewUsers } from "../../redux/userSlice";
import { getUsersByCash } from "../../api/getUserByCash";
import User from "../userCard/UserCard";
import classes from "../usersList/UsersList.module.css";

function UsersList() {
  const dispatch = useDispatch();
  const newUsers = useSelector(getNewUsers);

  useEffect(() => {
    const loadUsers = async () => {
      if (newUsers.length === 0) {
        const users = await getUsersByCash();
        dispatch(setNewUsers(users));
      }
    };
    loadUsers();
  }, [dispatch, newUsers.length]);

  return (
    <section>
      <ul className={classes.cardList}>
        {newUsers.map((user) => (
          <li key={user.id} className={classes.cardItem}>
            <User
              id={user.id}
              avatar={user.avatar}
              name={user.name}
              tweets={user.tweets}
              followers={user.followers}
              isFollowing={user.isFollowing}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UsersList;

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
