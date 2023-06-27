const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../controllers/userController.js");

router
  .route("/")
  .get(getUsers)
  .get(getSingleUser)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser)
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;
