import React, { Fragment } from 'react'


const Sushi = (props) => {
// debugger
//onClick gives us access to the event, but we don't need that we need the sushiObj.id. we do the _ to indicate we're not using event, then we can pass the id within that eatSuhiFunc
  return (
    <div className="sushi">
      <div className="plate"
           onClick={(_) => {
             props.eatSushiFunc(props.sushiObj.id, props.sushiObj.price)
           }}>
        {

          props.idOfSushisEaten.includes(props.sushiObj.id) ?
            null
          :
            <img width="100%" src={props.sushiObj.img_url}/>
        }
      </div>
      <h4 className="sushi-details">
        {props.sushiObj.name} - ${props.sushiObj.price}
      </h4>
    </div>
  )
}

export default Sushi
