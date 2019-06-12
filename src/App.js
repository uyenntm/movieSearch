import React,{Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    const movies = [
      {id: 0, 
      title: "Godzilla: King Of The Monsters PLEASE ALLOW APPROXIMATELY 20 EXTRA MINUTES FOR PRE-SHOW AND TRAILERS BEFORE THE SHOW STARTS.",
      overview: "Following the global success of GODZILLA and KONG: SKULL ISLAND comes the next chapter in Warner Bros. Pictures' and Legendary Pictures' cinematic MonsterVerse, an epic action adventure that pits Godzilla against some of the most popular monsters in pop culture history. "
    },
    {id: 1, 
      title: "Rocketman",
      overview: "ROCKETMAN is an epic musical fantasy about the uncensored human story of Sir Elton John as breakthrough years, starring Taron Egerton, Jamie Bell, Richard Madden and Bryce Dallas Howard."
    },
    {id: 0, 
      title: "The Dead Don't Die",
      overview: "THE DEAD DON'T DIE - the greatest zombie cast ever disassembled starring Bill Murray"
    }
    ];
    let movieRows = [];
    movies.forEach((movie)=>{
      movieRows.push(<p key={movie.id}>{movie.title}</p>)
    });

    this.state ={
      rows: movieRows
    }
  }
  render (){
    return(

    <div className="container">
      <div className="App-header">
        <div className="logo">
          <img src="../images/logo.png"  alt="Nata Moive"/>
        </div>
        <div className="right-header">
        <h1>Movies DB Search</h1></div>
      </div>
      <form>
        <div className="form-group mx-sm-3">
          <input className="form-control" placeholder="Enter search term" type="text"/>
          <button type="submit" className="btn btn-primary mt-2">Search</button>
        </div>
      </form>
      <div className="list-group">
       {this.state.rows}
      </div>
    </div>
    )
  }
}
