import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Button from './components/MoreButton'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()

    this.state = {
      allSushis: [],
      currentPageIndex: 0,
      idOfSushisEaten: [],
      moneyAvailable: 100
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({
        allSushis: sushis
      })
    })
  }

  deriveSushiGivenStartingIndex = () => {
    let startingIndex = this.state.currentPageIndex
    //slice is used because we need 4 sushi at a time. we are making a copy of the allSushis and returning a new array with 4 sushis.
    //using slice which doesn't include the end index, so if we just do startingIndex + 3 we will be one short
    let lastIndex = startingIndex + 4

    return this.state.allSushis.slice(startingIndex, lastIndex)
  }

  handleMoreButton = () => {
    let newIndex = this.state.currentPageIndex + 4

    this.setState({
      currentPageIndex: newIndex
    })
  }

  eatSushiFunc = (id, price) => {
    //this is where the moneyAvailable is used
    let moneyRemaining = this.state.moneyAvailable - price

    if (moneyRemaining < 0){
      alert('Not enough money!')
      return
    }
    // use spread operator to make a copy of original array and pass in sushiObj
    let copy = [...this.state.idOfSushisEaten]

    copy.push(id)

    // update the state of idOfSushisEaten to the copy of that ID which contains the ID of what just got eaten
    this.setState({
      idOfSushisEaten: copy,
      moneyAvailable: moneyRemaining
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushi={this.deriveSushiGivenStartingIndex()} eatSushiFunc={this.eatSushiFunc} idOfSushisEaten={this.state.idOfSushisEaten}
          handleMoreButton={this.handleMoreButton}
          />
        <Table
          idOfSushisEaten={this.state.idOfSushisEaten}
          moneyAvailable={this.state.moneyAvailable}/>
      </div>
    );
  }
}

export default App;
