import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies , title ,  searchRate}) => {

  return(
    <div style={{display: 'flex', flexWrap:'wrap',  justifyContent: 'space-between', marginTop:'10px' }} >
    
    
    {
    movies.filter(movie=>movie.title.toLowerCase().includes(title.toLowerCase().trim()) && movie.rate >= searchRate ).map((movie)=>
  
       
         <MovieCard movie={movie} />
      
    
  )}
  </div>
  )
}

export default MovieList