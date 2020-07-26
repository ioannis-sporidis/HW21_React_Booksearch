// Imports:
const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Routes:

// Books GET route (returns JSON with all books)
router.route("/books").get(booksController.findAll)

// Books POST route (saves a book in the DB)
router.route("/books").post(booksController.create)

// Books DELETE route (deletes a book of the DB)
router.route("/books/:id").delete(booksController.remove);

module.exports = router;