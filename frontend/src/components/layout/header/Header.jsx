import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.main}>
      <Link to={"/"}>Countries App</Link>
    </header>
  );
};

export default Header;
