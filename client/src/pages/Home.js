import React from 'react';
import Jumbotron from '../components/Jumbotron';
import SearchBar from '../components/SearchBar';

const Home = () => {
    return (
        <div className="container">
            <Jumbotron />
            <SearchBar />
        </div>
    )
}

export default Home
