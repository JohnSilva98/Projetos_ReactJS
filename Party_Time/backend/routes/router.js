const router = require("express").Router();

// Services router
const servicesRouter = require("./services");

router.use("/", servicesRouter);

// Parties routes
const partyRouter = require("./parties");
router.use("/", partyRouter);

module.exports = router;
