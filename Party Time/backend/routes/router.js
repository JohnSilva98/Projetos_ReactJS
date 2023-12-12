const router = require("express").Router();

// Services router
const servicesRouter = require("./service");

router.use("/", servicesRouter);

module.exports = router;
