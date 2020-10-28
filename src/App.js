import React, { useState } from "react";
import "./App.css";
import { Home } from "../src/Component/Home.jsx";
import { About } from "../src/Component/About.jsx";
import { Navigation } from "./Component/Nav.jsx";
import { Movies } from "./Component/Movies";
import { Route } from "react-router-dom";
import { Trailer } from "./Component/Trailer";

export const MovieData = [
  {
    title: "Harry Potter",
    description:
      "With their warning about Lord Voldemort's return scoffed at, Harry  and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts. ",
    posterUrl:
      "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/potterebellposter.jpg",
    trailerUrl: "https://www.youtube.com/embed/cGvbeaq7kK4",
    i: 1,
    rate: "8",
  },
  {
    title: "The Lord Of The Rings",
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron. ",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/I/8150KG7y2EL.jpg",
    trailerUrl: "https://www.youtube.com/embed/tFYCR1G2n9k",
    i: 2,
    rate: "9",
  },
  {
    title: "Star Wars",
    description:
      "The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end. ",
    posterUrl:
      "https://c4.wallpaperflare.com/wallpaper/153/860/948/movie-poster-star-wars-star-wars-the-rise-of-skywalker-2019-year-movies-hd-wallpaper-preview.jpg",
    trailerUrl: "https://www.youtube.com/embed/8Qn_spdM5Zg",
    i: 3,
    rate: "5",
  },
];
function App() {
  const [nameSearch, setNameSearch] = useState("");
  const [rateSearch, setRateSearch] = useState("");
  // const addMovie = (newMovie) => {
  //   setMovieList(...movieList, newMovie);
  // };

  return (
    <div className="App">
      <Navigation setNameSearch={setNameSearch} setRateSearch={setRateSearch} />
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/movies"
        render={() => (
          <Movies
            // movie = {movie}
            // setMovie={setMovie}
            nameSearch={nameSearch}
            rateSearch={rateSearch}
          />
        )}
      />
      {/* <NewMovie addMovie={addMovie} /> */}

      <Route path="/about" component={About} />
      <Route path="/movies/:id" component={Trailer} />
    </div>
  );
}

export default App;
