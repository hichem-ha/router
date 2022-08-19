import React  from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import {Link } from "react-router-dom";

const MovieCard = ({movie}) => {
 
    return (
      <div style={{margin:"15px"}}>
          <Card style={{ width: '18rem' }} >
                  <Card.Img style={{height:'400px'}} variant="top" src={movie.posterUrl} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <ul>
                <li>{movie.date} </li>
                 <li>{movie.long} </li>
                 <li>{movie.type} </li>
                  </ul>
                  <div className='card_right__rating'>
             <div className='card_right__rating__stars'>
                <fieldset className='rating'>
              <ReactStars
                 count={5}
                 size={20}
                 isHalf={true}
              value={movie.rate}
                activeColor="#ffd700"
                edit= {false} />
               </fieldset>
                 </div>
                </div>
            
                <Card.Text className="text"> <Link to={`/Trailer/description/${movie.id}`}> {movie.description}</Link></Card.Text>
              <Card.Link href={movie.readMore} target="_blank" >Read more</Card.Link>
              <Card.Link href={movie.trailer} target="_blank">WATCH TRAILER</Card.Link>
            </Card.Body>
          </Card>
          </div>
        );
      }
      
export default MovieCard
