// const fetch = require('fetch')

const getCounter = async() => {
    try {
        const resp = await fetch('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json')
        const data = await resp.json()
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    } catch (e) {
        return new Promise((resolve, reject) => {
            console.log(e)
            reject(e)
        })
    }
}

const setCounter = async(input) => {
    const inputParams = {
        ...input
    }
    try {
        const resp = await fetch('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json', {
            method: 'PUT',
            body: JSON.stringify(inputParams)
        })
        return new Promise((resolve, reject) => {
            resolve(resp)
        })
    } catch (e) {
        return new Promise((resolve, reject) => {
            reject(e)
        })
    }
}

export { getCounter, setCounter}
