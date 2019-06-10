import React, { Fragment } from 'react'

const Sushi = (props) => {

  // const {sushi} = props
  // const {img_url, name, price} = sushi

  const {sushi:{img_url, name, price, id}} = props

  return (
    <div className="sushi">
      <div className="plate"
           onClick={ () => props.eatSushiHandler(id, price) } >
        {
          /* Tell me if this sushi has been eaten! */
          props.eatenSushis.includes(props.sushi.id) ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
