const HttpError = require("../models/Http-Error");

const getAvailableCountries = async (req, res, next) => {
  try {
    const response = await fetch(
      "https://date.nager.at/api/v3/AvailableCountries",
      {
        method: "GET",
      }
    );
    if (!response.ok)
      throw new HttpError(
        "Sorry, we could not fetch the API. This likely means that the server is down. Please try again later.",
        503
      );
    const countriesList = await response.json();
    return res.status(200).json(countriesList);
  } catch (err) {
    if (err instanceof HttpError)
      return res.status(err.code).json({ error: err.message });
    return res.status(500).json({
      error:
        "Sorry, an unexpected error occurred while trying to reach the API. Please try again later.",
    });
  }
};

const getCountryInfo = async (req, res, next) => {
  try {
    const { code } = req.query;
    let responseObj = new Object();

    const borderResponse = await fetch(
      `https://date.nager.at/api/v3/CountryInfo/${code}`
    );
    if (!borderResponse.ok)
      throw new HttpError(
        "An unnexpected error occurred while trying to reach the Nager.Date API.",
        500
      );
    let borderData = await borderResponse.json();
    responseObj.info = borderData;
    let country = borderData.commonName;

    const populationResponse = await fetch(
      `https://countriesnow.space/api/v0.1/countries/population`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country }),
      }
    );
    if (!populationResponse.ok)
      throw new HttpError(
        "An unnexpected error occurred while trying to get the population count.",
        500
      );
    let populationData = await populationResponse.json();
    responseObj.population = populationData.data.populationCounts;

    const flagResponse = await fetch(
      `https://countriesnow.space/api/v0.1/countries/flag/images`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ iso2: code }),
      }
    );
    if (!flagResponse.ok)
      throw new HttpError(
        "An unnexpected error occurred while trying to get the flag data.",
        500
      );
    let flagData = await flagResponse.json();
    responseObj.flag = flagData.data.flag;

    return res.status(200).json(responseObj);
  } catch (err) {
    if (err instanceof HttpError)
      return res.status(err.code).json({ error: err.message });
    return res.status(500).json({
      error:
        "Sorry, an unexpected error occurred while trying to reach the API. Please try again later.",
    });
  }
};

module.exports = { getAvailableCountries, getCountryInfo };
