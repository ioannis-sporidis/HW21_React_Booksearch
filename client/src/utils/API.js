import axios from "axios"

export default {

    // Get book from google search 
    getBooksFromGoogle: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },

    // Save book to MongoDB
    saveBook: function (bookToSave) {
        return axios.post("/api/books", bookToSave);
    },

    // Delete book from MongoDB
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
}