const {createBlog} = require("../controllers/blogs.controllers");


const router = require("express").Router();

router.post("/", createBlog);


module.exports = router;