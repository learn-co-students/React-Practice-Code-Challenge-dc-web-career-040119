import React, {useState} from 'react'

const SushiWallet = (props) => {
    const [amount, changeAmount] = useState(0)

    const handleMoney = (event) => {
        event.preventDefault()
        props.addFunds(amount)
        event.target.reset()
    }

    return(
        <form onSubmit={(event) => handleMoney(event)}>
            <input type="number" placeholder="Add more funds" onChange={(event) => changeAmount(parseInt(event.target.value))}></input>
            <input type="submit"></input>
        </form>
    )
}

export default SushiWallet