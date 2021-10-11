import React, { Component } from "react"
import AllGames from '../components/allGames.js'
import Card from "../components/card.js";


class GamesContainer extends Component {

    constructor (props){
        super(props);

        this.state = {
            loaded: false,
            games: []
          }

    }

    
    componentDidMount() {
       this.getGamesData();
    }

    getGamesData() {
        fetch('http://localhost:8080/api/games')
            .then((response) => response.json())
            .then(data => this.setState({games: data, loaded: true}))
            .catch(error => console.log(error))   
    }


    
    render(){

        return (
            <>
                <AllGames games={this.state.games}/>
            </>
        )
    }
  }

  export default GamesContainer;