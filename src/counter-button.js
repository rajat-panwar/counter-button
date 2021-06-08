import { useState } from 'react'
import './counter-button.css'

function CounterButton (props) {
    const { start=1, lowerLimit = 0, upperLimit = 1000 } = props
    const [counter, setCounter] = useState(Number(start))
    
    const decrement = () => {
        if(counter-1 >= Number(lowerLimit)) {
            setCounter(counter-1)
        }
    }
    const increment = () => {
        if(counter+1 <= Number(upperLimit)) {
            setCounter(counter+1)
        }
    }
    const changeCounterValue = (e) => {
        const value = +Number(e.target.value)
        if(e.target.value === '') {
            setCounter(0)
        }
        if(isNaN(value)) {return}
        if(value && Number(value) <= upperLimit) {
            setCounter(value)
        }
    }
return (
<div className="counter-button-container">
    <button className="decrement-button" onClick={decrement}>-</button>
    <input type="tel" value={counter} max={upperLimit} className="input-box" onChange={(e) => { changeCounterValue(e)}} />
    <button className="increment-button" onClick={increment}>+</button>
</div>
)
}

export default CounterButton
