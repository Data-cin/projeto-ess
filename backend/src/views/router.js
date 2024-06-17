const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const post_controller = require("../controllers/posts");
const page_controller = require("../controllers/pages")

router.get("/", controller.get);

// Miguel
router.post("/posts", post_controller.createPost);
router.delete("/posts", post_controller.deletePost);

//JP
//page that shows the information of the movie and its posts
router.get("/page", page_controller.showpage);

module.exports = router;
