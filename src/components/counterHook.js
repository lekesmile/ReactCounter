import React, { useState } from 'react';

export default function CounterHook() {

    const [number, setNumber] = useState(0);

    const addOne = () => {
        setNumber(number + 1)
    }

    const subOne = () => {
        if(number > 0){
             setNumber(number - 1)
        }
       
    }

    const remove = () => {
        setNumber(number * 0)
    }

    return (
        <div className="container">
            <p>{number}</p>
            <button onClick={addOne} className="">Add One</button>
            <button onClick={subOne} className="">Sub One</button>
            <button onClick={remove} className="">Reset</button>
        </div>
    )
}
