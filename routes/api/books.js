// Imports:
const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Routes:

// Books GET route (returns JSON with all books)
router.route("/books").get(bookController.findAll)

// Books POST route (saves a book in the DB)
router.route("/books").post(bookController.create)

// Books DELETE route (deletes a book of the DB)
router.route("/books/:id").delete(bookController.remove);

module.exports = router;