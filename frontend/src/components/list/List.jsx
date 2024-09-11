import { useLoaderData } from "react-router-dom";
import classes from "./List.module.css";
import Item from "./Item";

const List = ({ isHomePage }) => {
  const loaderData = useLoaderData();
  const listData = isHomePage ? loaderData : loaderData.info.borders;
  console.log(listData);
  const mappedList = listData.map((item, index) => {
    if (isHomePage) return <Item key={`li_${index}`} data={item} />;
    return (
      <Item
        key={`boder_${index}`}
        data={{ name: item.commonName, countryCode: item.countryCode }}
      />
    );
  });
  return (
    <div className={isHomePage ? classes.homeMain : classes.borderMain}>
      <h2>
        {isHomePage
          ? "Here is a list of countries you can read about:"
          : "Border Countries:"}
      </h2>
      <ul className={classes.list}>{mappedList}</ul>
    </div>
  );
};

export default List;
