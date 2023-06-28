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

router
  .route("/")
  .get(getThoughts)
  .get(getSingleThought)
  .post(createThought)
  .put(updateThought)
  .delete(deleteThought)
  .post(addReaction)
  .delete(deleteReaction);

module.exports = router;
