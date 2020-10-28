import React,  { useState }  from "react"; 
import {Link} from "react-router-dom";
import NewMovie from "./NewMovieForm";
import {MovieData} from "../App";



export const Movies = ({nameSearch,rateSearch}) => {
    const [movie, setMovie] = useState(MovieData)
    
        const addMovie = (title,description,rate,posterUrl) => {
          setMovie ([...movie, {title, description ,rate ,posterUrl }]);
        } 
      
    return (
        <div>
            <h1 className="big-title"> Select a movie:</h1>
            
          <div className="movies-container">
        {movie.filter((mv)=> mv.title.toLowerCase().includes(nameSearch.toLowerCase())&&mv.rate.includes(rateSearch)) 
        .map ((mov) =>
       
        <div  key={mov.i}>
            <Link to={`/movies/${mov.i}`}>
            <h2 className="baby-titles">{mov.title}<br/>Rated: {mov.rate}/10</h2>
            <img className="movieposter" src={mov.posterUrl} alt="Movie Poster"/>
            
            </Link>
           
        </div>
    
)}
        </div>
        
      <NewMovie addMovie={addMovie}/>
      
        </div>
    
    )
}