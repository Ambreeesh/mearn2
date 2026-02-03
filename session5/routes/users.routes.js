const {getAllUsers, getUserByGenderOrAge, getUsersByUuid} = require("../controllers/users.controller");
const verifyAuth = require("../middleware/veryfyAuth");
const userSearchValidator = require("../middleware/userSearchValidator");
const router = require("express").Router();

router.get("/", getAllUsers);
router.get("/search", verifyAuth, userSearchValidator, getUserByGenderOrAge);
router.get("/:uuid",  verifyAuth, getUsersByUuid);


module.exports = router;