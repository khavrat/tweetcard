import UsersList from "../components/usersList/UsersList";
import classes from '../pages/HomeView.module.css';

function HomeView() {
  return (
    <div className={classes.container}>
      <UsersList />
    </div>
  );
}

export default HomeView;
