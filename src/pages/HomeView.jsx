import DropDown from "../components/dropDown/DropDown";
import UsersList from "../components/usersList/UsersList";
import classes from '../pages/HomeView.module.css';

function HomeView() {
  return (
    <div className={classes.container}>
      <DropDown/>
      <UsersList />
    </div>
  );
}

export default HomeView;
