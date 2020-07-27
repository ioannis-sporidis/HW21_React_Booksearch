import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Jumbotron from '../components/Jumbotron';
import BookCard from '../components/BookCard';
import API from '../utils/API';

const Saved = () => {
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        API.getBooks().then(res => setSavedBooks(res.data))
    }, [savedBooks]);

    const handleDelete = (event) => {
        event.preventDefault();
        const bookID = event.target.getAttribute('data-id');

        API.deleteBook(bookID)
    }

    return (
        <div className="container">
            <NavBar />
            <br />
            <Jumbotron />
            <br />
            <div className=" container search_results">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        {savedBooks.map((book) => {
                            return (
                                < BookCard
                                    key={book._id}
                                    id={book._id}
                                    title={book.title}
                                    authors={book.authors}
                                    description={book.description}
                                    image={book.image}
                                    link={book.link}
                                    handleDelete={handleDelete}
                                />)
                        })}
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    )
}

export default Saved