import classes from "./CountryInfo.module.css";

const CountryInfo = ({ data, flag }) => {
  return (
    <span className={classes.main}>
      <h2>{data.officialName}</h2>
      <img src={flag} alt={`flag of ${data.commonName}`} />
    </span>
  );
};

export default CountryInfo;
