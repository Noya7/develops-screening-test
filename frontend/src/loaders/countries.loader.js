import { redirect } from "react-router-dom";

export const countriesLoader = async ({ params }) => {
  try {
    if (params.code) {
      const infoResponse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/info?code=${params.code}`
      );
      const infoData = await infoResponse.json();
      if (infoData.error) throw new Error(infoData.error.message);
      return infoData;
    }
    const availableCountriesResponse = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/available-countries`
    );
    const availableCountries = await availableCountriesResponse.json();
    if (availableCountries.error)
      throw new Error(availableCountries.error.message);
    return availableCountries;
  } catch (err) {
    return redirect("/");
  }
};
