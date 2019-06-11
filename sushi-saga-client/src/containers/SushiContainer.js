import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
//a functional component passes in props as an argument so I can just call props directly. we only use this.props within a class since we are referring to an instance of props
// debugger
  return (
    <Fragment>
      <div className="belt">

          {
            props.sushi.map((sushiObj) => {
              return <Sushi sushiObj={sushiObj} key={sushiObj.id} idOfSushisEaten={props.idOfSushisEaten} eatSushiFunc={props.eatSushiFunc}
              moneyRemaining={props.moneyRemaining}/>
            })
          }

        <MoreButton handleMoreButton={props.handleMoreButton}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
