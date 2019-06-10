import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /*
             Render 4 Sushi components here!
          */
          props.four_sushis.map(sushiObj =>
            <Sushi
            key={sushiObj.id}
            sushi={sushiObj}
            eatenSushis={props.eatenSushis}
            eatSushiHandler={props.eatSushiHandler}/>)
        }
        <MoreButton clickHandler={props.moreButtonHandler}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
