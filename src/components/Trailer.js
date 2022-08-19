import React from 'react';
import { Link, useParams ,useNavigate} from "react-router-dom";
import ReactPlayer from "react-player";
import { Button } from 'react-bootstrap';

const Trailer = ({movies}) => {
    const {id} = useParams()
console.log(id)
const desk = movies.find(el=>el.id == id)
    console.log(desk)
    const navigate = useNavigate();
  return (
    <div>
        
     <h1>Description</h1>

  <p> {desk.description}   </p>   
  
  <ReactPlayer url={desk.trailer}/>
  
  <Button onClick={() => navigate(-1)} >  Back Home </Button>

  

    </div>
  )
}

export default Trailer