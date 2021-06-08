import { useState } from 'react'
import './counter-button.css'

function CounterButton (props) {
    const { start=1, lowerLimit = 0, upperLimit = 1000 } = props
    const [counter, setCounter] = useState(start)
    
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
    const changeCounterValue = (value) => {
        if(value <= upperLimit) {
            setCounter(Number(value))
        }
    }
return (
<div className="counter-button-container">
    <button className="decrement-button" onClick={decrement}>-</button>
    <input type="number" value={counter} max={upperLimit} min={lowerLimit} className="input-box" onChange={(e) => { changeCounterValue(e.target.value)}} onBlur={(e) => { if(!e.target.value) setCounter(start);}}/>
    <button className="increment-button" onClick={increment}>+</button>
</div>
)
}

export default CounterButton