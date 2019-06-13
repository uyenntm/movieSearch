import React, { Component } from "react";
import "./App.css";
import MovieListRow from "./components/MovieListRow";

export default class App extends Component {
  constructor(props) {
    super(props);
    // const movies = [
    //   {
    //     id: 0,
    //     title:
    //       "Godzilla: King Of The Monsters PLEASE ALLOW APPROXIMATELY 20 EXTRA MINUTES FOR PRE-SHOW AND TRAILERS BEFORE THE SHOW STARTS.",
    //     overview:
    //       "Following the global success of GODZILLA and KONG: SKULL ISLAND comes the next chapter in Warner Bros. Pictures' and Legendary Pictures' cinematic MonsterVerse, an epic action adventure that pits Godzilla against some of the most popular monsters in pop culture history. ",
    //     image:
    //       "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_300,q_auto,w_200/v1551459952/amc-cdn/production/2/movies/46100/46113/PosterDynamic/74208.jpg"
    //   },
    //   {
    //     id: 1,
    //     title: "Rocketman",
    //     overview:
    //       "ROCKETMAN is an epic musical fantasy about the uncensored human story of Sir Elton John as breakthrough years, starring Taron Egerton, Jamie Bell, Richard Madden and Bryce Dallas Howard.",
    //     image:
    //       "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1550607252/amc-cdn/production/2/movies/57300/57273/PosterDynamic/73961.jpg"
    //   },
    //   {
    //     id: 2,
    //     title: "The Dead Don't Die",
    //     overview:
    //       "THE DEAD DON'T DIE - the greatest zombie cast ever disassembled starring Bill Murray",
    //     image:
    //       "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1559590942/amc-cdn/production/2/movies/60500/60483/PosterDynamic/77994.jpg"
    //   },
    //   {
    //     id: 3,
    //     title: "Aladdin",
    //     overview:
    //       "A thrilling and vibrant live-action adaptation of Disney’s animated classic, “Aladdin” is the exciting tale of the charming street rat Aladdin, the courageous and self-determined Princess Jasmine and the Genie who may be the key to their future",
    //     image:
    //       "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1552420872/amc-cdn/production/2/movies/50900/50869/PosterDynamic/74480.jpg"
    //   }

    // ];

    // let movieRows = [];
    // movies.forEach(movie => {
    //   movieRows.push(<MovieListRow key={movie.id} movie={movie} />);
    // });

    // this.state = {
    //   rows: movieRows
    // };
    this.state = {};
    this.performSearch();
  }
  performSearch(){
    console.log("performSearch function is called");
  }
  render() {
    return (
      <div className="container">
        <div className="App-header">
          <div className="logo">
            <img src="../images/logo.png" alt="Nata Moive" />
          </div>
          <div className="right-header">
            <h1>Movies DB Search</h1>
          </div>
        </div>
        <form>
          <div className="form-group mx-sm-3">
            <input
              className="form-control"
              placeholder="Enter search term"
              type="text"
            />
            <button type="submit" className="btn btn-primary mt-2">
              Search
            </button>
          </div>
        </form>
        <div>{this.state.rows}</div>
      </div>
    );
  }
}
