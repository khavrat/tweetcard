import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import fetchUsers from "../../api/apiUsers";
import User from "../userCard/UserCard";
import classes from "../usersList/UsersList.module.css";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  const usersList = Array.isArray(users) ? users : [];

  return (
    <section className={classes.section}>
      <ul className={classes.cardList}>
        {usersList.map((user) => (
          <li key={user.id} className={classes.cardItem}>
            <User
              avatar={user.avatar}
              name={user.name}
              tweets={user.tweets}
              followers={user.followers}
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
  ).isRequired,
};
