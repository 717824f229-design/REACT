import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement, incrementByAmount,reset } from "./counterSlice";
import {useState} from 'react';
function Counter(){
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
    const[amount,setAmount]=useState(5);
    return(
        <div>
            <p>{count}</p>
            <div>
                <button onClick={()=>dispatch(increment())}>
                    +
                </button>
                <button onClick={()=>dispatch(decrement())}>
                    -
                </button>
                <div>
                    <input type='number' value={amount} onChange={(e)=>setAmount(Number(e.target.value))}>
                    </input>
                    <button onClick={()=>dispatch(incrementByAmount(Number(amount)))}>Add Amount</button>
                    <button onClick={()=>dispatch(reset())}>Reset</button>
                </div>
            </div>
        </div>
    )
}
export default Counter;