const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../controllers/thoughtController.js");

router.route("/").get(getThoughts);

router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

router.route("/:userId").post(createThought);



//   .post(addReaction)
//   .delete(deleteReaction);

module.exports = router;
