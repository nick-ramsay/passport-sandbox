const router = require("express").Router();
const psRoutes = require("./psRoutes");

// passport-sandbox routes
router.use("/passport-sandbox", psRoutes);

module.exports = router;