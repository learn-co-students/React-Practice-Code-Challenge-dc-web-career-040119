import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => <Sushi sushiInfo={sushi} key={sushi.id} addSushi={props.addSushi}/>)}
        <MoreButton fetchSushi={props.getNextSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer