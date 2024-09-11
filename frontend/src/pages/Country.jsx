import classes from "./Country.module.css";
import { useLoaderData } from "react-router-dom";
import CountryInfo from "../components/countryInfo/CountryInfo";
import List from "../components/list/List";
import PopulationChart from "../components/chart/Chart";

const CountryPage = () => {
  const countryData = useLoaderData();

  return (
    <div className={classes.main}>
      <CountryInfo flag={countryData.flag} data={countryData.info} />
      <List />
      <PopulationChart data={countryData.population} />
    </div>
  );
};

export default CountryPage;
