import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewUsers, setNewUsers } from "../../redux/userSlice";
import { getUsersByCash } from "../../api/getUserByCash";
import User from "../userCard/UserCard";
import LoadMoreBtn from "../userCardComponents/lodeMoreBtn/LoadMoreBtn";
import classes from "../usersList/UsersList.module.css";

const PER_PAGE = 3;

function UsersList() {
  const [visiblePage, setVisiblePage] = useState(PER_PAGE);
  const [isVisibleBtn, setIsVisibleBtn] = useState(true);
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

  const hideLoadMoreBtn = () => {
    if (newUsers.length - visiblePage <= 0) {
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
        {newUsers?.slice(0, visiblePage).map((user) => (
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
        <LoadMoreBtn onClick={handleLoadMoreBtn}>load more</LoadMoreBtn>
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
