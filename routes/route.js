const router = require("express").Router();
const { signup, getBill } = require("../controllers/controller");



router.post("/user/signup", signup);
router.use("/product/getBill", getBill);






module.exports = router;