import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap"

const AddMovie = ({ setMovies , movies }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [rate, setRate] = useState(0);
    
    const handleClick = (e) => {
        e.preventDefault();
        const newMovie = {
            id: Math.random,
            title,
            description,
            posterUrl: url,
            rate,
        };
        setMovies([...movies, newMovie]);
        setTitle('')
        setDescription('')
        setUrl('')
        setRate("")
        handleClose()
    }

    
    return (
        <div className="adding-movie" >
            <Button variant="primary" style={{marginBottom:"20px" , marginLeft:'50%'}} onClick={handleShow}>
                Add Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        TITLE:
                        <input type="text" className="form-control" placeholder="enter title here" onChange={(e) => setTitle(e.target.value)} value={title} />
                        DESCRIPTION:
                        <input type="text" className="form-control" placeholder="enter description here" onChange={(e) => setDescription(e.target.value)} value={description} />
                        POSTERURL:
                        <input type="text" className="form-control" placeholder="enter url here" onChange={(e) => setUrl(e.target.value)} value={url} />
                        RATE:
                        <input type="Number" className="form-control" placeholder="enter rate here" onChange={(e) => setRate(e.target.value)} value={rate} />
                        <Button variant="info" type="submit" onClick={handleClick}>
                            SUBMIT
                        </Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddMovie