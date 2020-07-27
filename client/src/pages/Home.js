import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Jumbotron from '../components/Jumbotron';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import API from '../utils/API';

const Home = () => {
    const [savedBooks, setSavedBooks] = useState([]);
    const [results, setResults] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        API.getBooks().then(res => setSavedBooks(res.data))
    }, [savedBooks]);

    const handleInputChange = event => { setTitle(event.target.value) }

    const handleFormSubmit = event => {
        event.preventDefault();
        API.getBooksFromGoogle(title)
            .then(res => setResults(res.data.items))
            .catch(err => { throw err })
    }

    const handleSave = async (event) => {
        event.preventDefault();
        const bookID = event.target.getAttribute("data-id");
        const targetBook = results.filter(book => book.id === bookID);
        const bookToSave = {
            title: targetBook[0].volumeInfo.title,
            authors: targetBook[0].volumeInfo.authors,
            description: targetBook[0].volumeInfo.description,
            image: targetBook[0].volumeInfo.imageLinks.thumbnail,
            link: targetBook[0].volumeInfo.infoLink
        }

        if (savedBooks[bookID]) { console.log("Book already saved") }
        else {
            let newState = savedBooks.push(bookToSave)
            setSavedBooks(newState);
            API.saveBook(bookToSave)
        }
    }


    return (
        <div className="container">
            <NavBar />
            <br />
            <Jumbotron />
            <SearchBar
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
            <br />
            <div className=" container search_results">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        {results.map((book) => {
                            return (
                                < BookCard
                                    key={book.id}
                                    id={book.id}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    description={book.volumeInfo.description}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    link={book.volumeInfo.canonicalVolumeLink}
                                    handleSave={handleSave}
                                />)
                        })}
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    )
}

export default Home