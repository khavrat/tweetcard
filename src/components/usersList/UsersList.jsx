import { useEffect, useState } from "react";
import fetchUsers from "../../api/apiUsers";
import User from "../userCard/UserCard";

function UsersList() {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  const usersList = Array.isArray(users) ? users : [];

  return (
    <ul>
      {usersList.map((user) => (
        <li>
          <User
            key={user.id}
            avatar={user.avatar}
            name={user.name}
            tweets={user.tweets}
            followers={user.followers}
          />
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
