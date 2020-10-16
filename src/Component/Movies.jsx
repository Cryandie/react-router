import React from "react"; 
import {MovieData} from "./Data";
import {Link} from "react-router-dom";

export const Movies = () => {
    
    
    return (
        <div>
       
            <h1 className="big-title"> Select a movie:</h1>
            
          <div className="movies-container">
        {MovieData.map ((movie) =>
        <div  key={movie.i}>
            <Link to={`/movies/${movie.i}`}>
            <h2 className="baby-titles">{movie.title}</h2>
            <img className="movieposter" src={movie.posterUrl} alt="Movie Poster"/>
            </Link>
           
        </div>
    
)}
        </div>
        
        </div>

    )
}