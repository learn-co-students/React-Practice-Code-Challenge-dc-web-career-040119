import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      money: 100, 
      sushiDisplay: [],
      sushiTotal: []
    }
  }

  addFunds = (amount) => {
    this.setState({
      money: (this.state.money + amount)
    })
  }

  //renders sushis to table and handles money available
  addSushiToTable = (event, sushiObj) => {
    if (this.state.money - sushiObj.price >= 0 && !sushiObj.eaten){
      //find obj in sushi total and set eaten to true
      let sushiCopy = this.state.sushiTotal
      sushiCopy.filter(sushi => sushi === sushiObj)[0].eaten = true
      this.setState({
        sushiTotal: [...sushiCopy]
      })
      //substract sushi cost from money total 
      this.setState({
        money: (this.state.money - sushiObj.price)
      })
    }
    else if (sushiObj.eaten){
      alert("You've already eaten this sushi!")
    }
    else {
      alert("You don't have enough money!")
    }
  }

  getNextSushi = () => {
    //from beginning of app
    if (this.state.sushiDisplay.length === 0) {
      this.setState({
        sushiDisplay: this.state.sushiTotal.slice(0,4)
      })
    }
    //from end of data
    else if (this.state.sushiDisplay.slice(-1)[0].id === 100) {
      this.setState({
        sushiDisplay: this.state.sushiTotal.slice(0,4)
      })
    }
    else {
      this.setState({
        sushiDisplay: this.state.sushiTotal.slice(this.state.sushiDisplay.slice(-1)[0].id, this.state.sushiDisplay.slice(-1)[0].id + 4)
      })
    }
   }

  componentDidMount() {
    this.fetchSushi()
  }

  //get sushis from the server
  fetchSushi = () => {
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({sushiTotal: sushis}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  addSushi={this.addSushiToTable} getNextSushi={this.getNextSushi} sushis={this.state.sushiDisplay}/>
        <SushiWallet addFunds={this.addFunds}/>
        <Table money={this.state.money} mySushis={this.state.sushiTotal.filter(sushi => sushi.eaten === true)}/>
      </div>
    );
  }
}

export default App;