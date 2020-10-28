import React, {useState} from 'react';
import setImage from '../Assets/setImage.jpg';
import {Button ,Modal} from 'react-bootstrap';


const NewMovie = ({addMovie}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const [title, setTitle]=useState('');
  const [description, setDescription]=useState('');
  const [rate, setRate]=useState('');


  const handleSubmit = (e) =>{
      e.preventDefault();
      addMovie(title ,description ,rate ,setImage );
      handleClose();
  
  } 
  

  return (
      <div  className='new-mvform'>
      <Button className="addMovieBtn" variant="primary" onClick={handleShow}>
        Add a new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalstyle">
      <form className="addContainer" >
          <label >
          Movie name :
          </label>
         
      <input type ="text" required onChange={(e) =>setTitle(e.target.value)}/>
      <br/>
      <label>
         Description :
          </label>
      <input type ="text" style={{marginLeft:"7px"}} required  onChange={(e) =>setDescription(e.target.value)}/>
      <br/>
      <label>
         Rate :
          </label>
      <input type ="number" style={{marginLeft:"56px"}} required onChange={(e) =>setRate(e.target.value)}/>
     
     
      </form>
      </Modal.Body>
      <Modal.Footer >
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button className="addingMovie" variant="primary" onClick={handleSubmit}>
          Add Movie
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  )

}
export default NewMovie;