import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  // def initialize
  constructor(){
    super()
    this.state = {
      currentPage: 1,
      sushis: [],
      eatenSushis: [],
      wallet: 100
    }
  }

  componentDidMount(){
    // once <App /> is on the DOM, do the following:
    // paginate to only fetch 4 sushis
    fetch(API+`?_page=${this.state.currentPage}&_limit=4`)
    .then(res => res.json())
    .then(sushiArray => {
      // at this point, we have the first 4 sushi
      // add to state and pass down as props
      this.setState({
        sushis: sushiArray
      })
    })
  }

// flow so far:
  // 1. constructor
  // 2. render
  // 3. componentDidMount
  // 4. render

  moreButtonHandler= () => {

    // this.setState({
    //   currentPage: ++this.state.currentPage
    // })

    // or
    let nextPage = this.state.currentPage + 1

    console.log(nextPage)

    fetch(API+`?_page=${this.state.currentPage}&_limit=4`)
    .then(res => res.json())
    .then(sushiArray => {
      this.setState({
        sushis: sushiArray,
        currentPage: nextPage
      })
    })
  }

  // this.setState triggers re-render


  eatSushiHandler = (id, price) => {
    console.log('eaten sushi', id)
    // given a sushi ID
    // add sushi ID to this.state.eatenSushis

    // make a copy of the array
    // add the copy to state, it should replace the original array

    let eatenCopy = [...this.state.eatenSushis]
    eatenCopy.push(id)

    let newWallet = this.state.wallet - price

    this.setState({
      eatenSushis: eatenCopy,
      wallet: newWallet
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
        four_sushis={this.state.sushis}
        moreButtonHandler={this.moreButtonHandler}
        eatenSushis={this.state.eatenSushis}
        eatSushiHandler={this.eatSushiHandler}
        />
        <Table wallet={this.state.wallet}/>
      </div>
    )
  }
}

export default App;
