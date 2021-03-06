import React, { useState } from "react"

const ItemCount = ({min, max }) => {

    const [counter, setCounter] = useState(min)
    const handleIncrement = () => {
        if(counter < max){
            setCounter(prev => prev + 1)
        }
        else {
            alert("stock limite")
        }
    }

    const handleDecrement = () => {
        if(counter > min){
        setCounter(prev => prev - 1)}
    else{
        alert("minimo una unidad de compra")
    }

    }

    return (
        <div className='counter'>
            <h1>{counter}</h1>

            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>


        </div>
    )
}