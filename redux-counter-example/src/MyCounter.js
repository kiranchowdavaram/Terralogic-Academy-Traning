import React from "react"
import { useselector,useDispatch, useSelector }from "react-redux";
import { increment ,decrement ,react, reset }from "./redux/actions";

export default function Counter() {

    const value = useSelector((state) =>state.counter.value);
    const dispatch = useDispatch();

    return ( 
        <div style={{textAlign:"center",marginTop:40}}>
            <h1>Counter:{value}</h1>

        <div style={{display: "flex",justifyContent: "center",gap: 8}}>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(increment(5))}>+5</button>
        <button onClick={() => dispatch(reset())}>reset</button>


        </div>
        </div>    

        )

    }