import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiToDisplay.map((sushi)=>{
            return <Sushi eatenSushiIDs={props.eatenSushiIDs} key={sushi.id} eatSushiHandler={props.eatSushiHandler} sushi={sushi}/>
          })
        }
        <MoreButton moreButtonHandler={props.moreButtonHandler}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
