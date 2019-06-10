import React from 'react'

const MoreButton = (props) => {

  function handleSushiFetch (event) {
    props.fetchSushi()
  }
  return (
        <button onClick={handleSushiFetch}>
          More sushi!
        </button>
  )
}

export default MoreButton