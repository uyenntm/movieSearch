import React, {Component} from 'react';
export default class MovieListRow extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return (
            <div className="movie-list-item">
                <img src={this.props.movie.image} alt={this.props.movie.title}/>
                <p className="movie-title">{this.props.movie.title}</p>
                <p className="movie-overview">{this.props.movie.overview}</p>
            </div>
            
        )
    }
}