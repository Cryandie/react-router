import React , {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MovieData } from './Data';


export const Trailer = ({match}) => {
      //    console.log(match)
    const [movie, setMovie] = useState({})

    useEffect (() => {
    setMovie (MovieData.find((movie) =>movie.i === Number(match.params.id)))
    }, []) ;
    // console.log(match.params.id)
    // console.log(match)
    
    return (
        <div >
         
              <h1 className="trailer-title"> {movie.title} </h1>
              <p className="trailer-description">{movie.description}</p>
              <div className="movie-babycontainer">
              <iframe src={movie.trailerUrl} width="860" height="515"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </div>
             <div className="backbtn">
          <Link to="/movies"> <Button variant="dark">Back to movies</Button></Link>
          </div>
        </div>
    )
}
