import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilter, getNewUsers, setNewUsers } from "../../redux/userSlice";
import { getUsersByCash } from "../../api/getUserByCash";
import User from "../userCard/UserCard";
import LoadMoreBtn from "../userCardComponents/lodeMoreBtn/LoadMoreBtn";
import classes from "../usersList/UsersList.module.css";

const PER_PAGE = 3;

function UsersList() {
  const [visiblePage, setVisiblePage] = useState(PER_PAGE);
  const [isVisibleBtn, setIsVisibleBtn] = useState(true);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const newUsers = useSelector(getNewUsers);
  const filter = useSelector(getFilter);

  useEffect(() => {
    const loadUsers = async () => {
      if (newUsers.length === 0) {
        const fetchUsers = await getUsersByCash();
        dispatch(setNewUsers(fetchUsers));
      }
    };
    loadUsers();
  }, [dispatch, newUsers.length]);

  useEffect(() => {
    const visibleUsers = () => {
      switch (filter?.value) {
        case "follow":
          setUsers(newUsers.filter((user) => user.isFollowing === false));
          break;
        case "following":
          setUsers(newUsers.filter((user) => user.isFollowing === true));
          break;
        case "showAll":
        default:
          setUsers(newUsers);
          break;
      }
    };
    visibleUsers();
  }, [filter, newUsers]);

  const hideLoadMoreBtn = () => {
    if (users.length - visiblePage <= PER_PAGE) {
      setIsVisibleBtn(false);
    }
  };

  const handleLoadMoreBtn = () => {
    hideLoadMoreBtn();
    setVisiblePage((prevState) => prevState + PER_PAGE);
  };

  return (
    <section>
      <ul className={classes.cardList}>
        {users?.slice(0, visiblePage).map((user) => (
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
      {isVisibleBtn && (
        <LoadMoreBtn
          onClick={handleLoadMoreBtn}
          users={users}
          visiblePage={visiblePage}
        >
          load more
        </LoadMoreBtn>
      )}
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
