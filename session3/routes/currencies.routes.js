
const {getCurrencies, getCurrenciesBySymbol} = require("../controllers/currencies.controller");
const router = require("express").Router();


router.get("/", getCurrencies)
router.get("/:symbol", getCurrenciesBySymbol);

module.exports = router;