const {getAllUsers, getUserByGenderOrAge, getUsersByUuid} = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/", getAllUsers);
router.get("/search", getUserByGenderOrAge);
router.get("/:uuid", getUsersByUuid);


module.exports = router;