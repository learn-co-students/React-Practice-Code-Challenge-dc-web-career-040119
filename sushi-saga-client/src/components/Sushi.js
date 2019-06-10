import React, { Fragment } from 'react'


const Sushi = (props) => {

  return (
    <div className="sushi">
      <div className="plate" onClick={(event) => props.addSushi(event, props.sushiInfo)}>
        {!props.sushiInfo.eaten ? <img src={props.sushiInfo.img_url} width="100%" alt="sushi" /> : null}
      </div>
      <h4 className="sushi-details">
        {props.sushiInfo.name} - ${props.sushiInfo.price}
      </h4>
    </div>
  )
}

export default Sushi