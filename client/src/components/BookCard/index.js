import React from 'react';
import Button from '../Buttons';

const BookCard = ({ image, id, title, authors, description, link, handleSave, handleDelete }) => {
    if (handleSave) {
        return (
            <>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={image} className="card-img" alt={title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Title: {title}</h5>
                                <p className="card-text"><span className="font-weight-bold">Author(s):</span> {authors}</p>
                                <p className="card-text">{description}</p>
                                <br />
                                <div className="mx-auto">
                                    <Button href={link}>Check it out</Button>
                                    <Button
                                        type="btn btn-success btn-lg btn-block"
                                        id={id}
                                        onClick={(event) => handleSave(event)}
                                    >Save
                                </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    else {
        return (
            <>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={image} className="card-img" alt={title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Title: {title}</h5>
                                <p className="card-text"><span className="font-weight-bold">Author(s):</span> {authors}</p>
                                <p className="card-text">{description}</p>
                                <br />
                                <div className="mx-auto">
                                    <Button
                                        type="btn btn-danger btn-lg btn-block"
                                        id={id}
                                        onClick={(event) => handleDelete(event)}
                                    >Delete
                                </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default BookCard;