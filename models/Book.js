// Imports:
const mongoose = require('mongoose');

// Schema:
const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    authors: [{ type: String, required: true }],
    description: { type: String },
    image: { type: String, trim: true },
    link: { type: String, trim: true }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book