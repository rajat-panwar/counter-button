import { useState, useEffect } from 'react'
import './counter-button.css'
import { getCounter, setCounter } from '../src/sources/counter'
import { useDebounce } from '../src/utils/index'

function CounterButton (props) {
    const { start=1, lowerLimit = 0, upperLimit = 1000 } = props
    useEffect(async () => {
        getUpdatedCounter()
    }, [])
    const [counter, setCounterValue] = useState(Number(start))
    const [updatedCounter, setUpdatedCounter] = useState('')
    const [apiResponseCode,setApiResponseCode] = useState('')
    const debouncedValue = useDebounce(counter, 900)

    useEffect(() => {
        updateCounter(counter)
    }, [debouncedValue])

    const updateCounter = async (counter) => {
        setApiResponseCode('pending')
        try {
            const resp = await setCounter({ counter1: counter })
            if(resp.status === 200) {
                setApiResponseCode('')
                const data = await resp.json()
                const { counter1 } = data
                setUpdatedCounter(counter1)
            }
        } catch(e) {
            setApiResponseCode('failure')
            console.log(e)
        }
    }
    const decrement = () => {
        if(apiResponseCode) {
            setApiResponseCode('')
        }
        if(counter-1 >= Number(lowerLimit)) {
            setCounterValue(counter-1)
        }
    }
    const increment = () => {
        if(apiResponseCode) {
            setApiResponseCode('')
        }
        if(counter+1 <= Number(upperLimit)) {
            setCounterValue(counter+1)
        }
    }
    const changeCounterValue = (e) => {
        const value = +Number(e.target.value)
        if(apiResponseCode) {
            setApiResponseCode('')
        }
        if(e.target.value === '') {
            setCounterValue(0)
        }
        if(isNaN(value)) {return}
        if(value && Number(value) <= upperLimit) {
            setCounterValue(value)
        }
    }
    const getUpdatedCounter = async () => {
        try {
            const resp = await getCounter() 
            setCounterValue(Number(resp))
            setUpdatedCounter(resp)
        } catch(e) {
            console.log(e)
        }
    }
return (
    <>
        <div className="value-update-status">
            {apiResponseCode === 'failure' ? 
            <div style={{ textAlign: 'left' }}>Couldn't update last value</div> :
            <div style={{ display: 'flex',  opacity: `${apiResponseCode ? '1': '0'}` }}><div className="loader"/>{'Saving counter value'}</div>}
        </div>
        <div className="counter-button-container">
            <button className="decrement-button" onClick={decrement}>-</button>
            <input type="tel" value={counter} max={upperLimit} className="input-box" onChange={(e) => { changeCounterValue(e)}} />
            <button className="increment-button" onClick={increment}>+</button>
        </div>
        <div className="updated-counter-display">
            {`Counter value: ${updatedCounter}`}
        </div>
    </>
)
}

export default CounterButton
