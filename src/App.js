// import "./App.css";
import React , {useState} from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import {data} from './data/data';
import Addmovie from "./components/Addmovie";
import Trailer from './/components/Trailer';
import {Routes,Route } from 'react-router-dom';
 const App = () => {
  const [movies, setMovies] = useState(data);
  const [title , setTitle] =useState("")
  const [searchRate , setSearchRate] =useState(0)


  
   return (
     <div >
    <Filter setTitle={setTitle} setSearchRate={setSearchRate}/>
    <Routes>
      <Route path="/" element={<MovieList movies={movies} title={title} searchRate={searchRate} />} />
      <Route path='/Trailer/description/:id' element={<Trailer movies={movies}  />} />
    
      </Routes>
      <Addmovie setMovies={setMovies} movies={movies}/>
     
     </div>
   )
 }
 
 export default App
