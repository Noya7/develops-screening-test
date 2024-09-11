const express = require("express");
const {
  getAvailableCountries,
  getCountryInfo,
} = require("./controllers/controllers");

const router = express.Router();

router.get("/available-countries", getAvailableCountries);
router.get("/info", getCountryInfo);

module.exports = router;
