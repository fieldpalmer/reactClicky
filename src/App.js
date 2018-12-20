import React, { Component } from "react";
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import ReindeerCard from "./components/ReindeerCard";
import Wrapper from "./components/Wrapper"
import Scoreboard from "./components/Scoreboard";
import CardDeck from "./components/CardDeck";
import reindeers from "./reindeer.json";

class App extends Component {

  state = {
    reindeers: reindeers,
    currentScore: 0,
    highScore: 0,
    message: "Welcome! Click a reindeer to earn a point. If you click the same reindeer twice you'll lose!"
  };

  componentDidMount = () => {
    this.shuffleCards();
    console.log(this.state.reindeers);
  };

  shuffleCards = () => {
    let array = this.state.reindeers;
    array.sort( () => 0.5 - Math.random() );
    this.setState({reindeers: array});
  };

  keepScore = () => {
    this.setState({message: "Keep it Up!"})
    this.setState({ currentScore: this.state.currentScore + 1}, () => {
      if (this.state.currentScore > this.state.highScore) {
        this.setState({
          highScore: this.state.currentScore
        });
      } 
      if (this.state.currentScore === 9) {
        alert("you win!");
        this.resetReindeer();
      }
    });
  };

  setImageClicked = id => {
    let reindeersClone = this.state.reindeers;
    this.state.reindeers.forEach((element, i)=>{
      if (element.id === id) {
        reindeersClone[i].clicked = true;
      }
    });
    this.setState({reindeers: reindeersClone});
  };

  resetReindeer = () => {
    let reindeersClone = this.state.reindeers;
    this.state.reindeers.forEach((element, i)=>{
      if (reindeersClone[i].clicked === true) {
        reindeersClone[i].clicked = false;
      }
      this.setState({reindeers: reindeersClone});
    });
    this.shuffleCards();
  };

  handleClick = (clicked, id) => {
    if (clicked) {
      this.setState({ 
        currentScore: 0,
        message: "Uh-oh, you lost, try again!"
      });
      // alert("you lose");
      this.resetReindeer();
    } else {
      this.keepScore();
      this.setImageClicked(id);
      this.shuffleCards();  
    }
  }

  // error logging
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    return (
      <Wrapper>
        <Scoreboard 
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
          message={this.state.message}
        />
        <CardDeck>
          {this.state.reindeers.map(reindeer => (
            <ReindeerCard 
              id={reindeer.id}
              key={reindeer.id}
              name={reindeer.name}
              image={reindeer.img}
              clicked={reindeer.clicked}
              onClick={this.handleClick}
            />
          ))}
        </CardDeck>
      </Wrapper>
    )
  }
}
  

export default App;
