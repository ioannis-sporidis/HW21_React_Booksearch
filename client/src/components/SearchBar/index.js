import React from 'react';

const SearchBar = (props) => {

    return (
        <div id='search-form' className='text-center'>
            <input className='form-control' name='title'
                placeholder='Search for a book...'
                type='text'
                onChange={props.handleInputChange}></input>
            <br />
            <button
                className='btn btn-info'
                onClick={props.handleFormSubmit}
                type='submit'
            >   Search
            </button>
        </div>
    )
}

export default SearchBar