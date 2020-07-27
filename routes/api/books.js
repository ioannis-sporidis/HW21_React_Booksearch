// Imports:
const router = require('express').Router();
const bookController = require('../../controllers/bookController');

// Route "/api/books"

// GET route (returns JSON with all books)
// POST route (saves a book in the DB)
router.route("/")
    .get(bookController.findAll)
    .post(bookController.create)

// Books DELETE route (deletes a book of the DB)
router.route("/:id").delete(bookController.remove);

module.exports = router;