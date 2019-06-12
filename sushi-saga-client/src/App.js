import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      allSushi: [],
      eatenSushiIDs: [],
      startingIndex: 0,
      money: 100
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp=>resp.json())
    .then(sushiObj=>{
      this.setState({
        allSushi: sushiObj
      })
    })
  }

  eatSushiHandler = (id, price) => {
    let total = this.state.money - price
    if(!this.state.eatenSushiIDs.includes(id) && total>=0){
      this.setState({
        eatenSushiIDs: [...this.state.eatenSushiIDs, id],
        money: total
    })
    }
  }

  deriveSushiGivenCurrentPage = () => {
    let startingIndex = this.state.startingIndex
    let lastIndex = startingIndex + 4
    return this.state.allSushi.slice( startingIndex, lastIndex )
  }

  moreButtonHandler = () => {
    if(this.state.startingIndex <= this.state.allSushi.length){
    this.setState({
      startingIndex: (this.state.startingIndex+4)
    })
    }
    else{
      this.setState({
        startingIndex: 0
      })

    }
  }


  render() {
    return (
      <div className="app">
        <SushiContainer
          eatenSushiIDs={this.state.eatenSushiIDs} sushiToDisplay={this.deriveSushiGivenCurrentPage()} eatSushiHandler={this.eatSushiHandler}
          moreButtonHandler={this.moreButtonHandler}/>
        <Table eatenSushiIDs={this.state.eatenSushiIDs} calculateTotal={this.state.money}/>
      </div>
    );
  }
}

export default App;
