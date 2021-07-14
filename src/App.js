import React, { Component } from "react";

import Game from './Component/Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.newGame = this.newGame.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      game: () => <Game difficulty={this.state.difficulty}/>,
      difficulty: 'normal'
    };
  }

  newGame(difficulty) {
    this.setState({
      game: () => <Game difficulty={difficulty}/>
    });
  }

  handleChange(event) {
    let difficulty = event.target.value;
    this.setState({
      difficulty
    });
  }

  render() {
    const ActiveGame = this.state.game;
    return (
      <div>
        <div style={{width:'fit-content', margin:'0 auto'}}>
        <button onClick={this.newGame.bind(null,this.state.difficulty)}>New Game</button>
        <select name="difficulty" id="difficulty" onChange={this.handleChange}>
          <option value="normal">normal</option>
          <option value="hard">hard</option>
        </select>
        </div>
        <ActiveGame />
      </div>
    );
  }
}
export default App;
