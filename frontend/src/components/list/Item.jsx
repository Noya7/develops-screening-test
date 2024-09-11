import { Link } from "react-router-dom";
import classes from "./Item.module.css";

const Item = ({ data }) => {
  return (
    <li className={classes.main}>
      <Link to={`/${data.countryCode}`}>{data.name}</Link>
    </li>
  );
};

export default Item;
