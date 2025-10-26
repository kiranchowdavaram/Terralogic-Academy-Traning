import React,{useState} from 'react';


function Counter() {
    const [count,setCount]=useState(0);//intialize state with 0;


    const increment =() => {
        setCount(count+2);//Update the state
    };

    const decrement =() => {
        count>0 && setCount(count-1); 
        };
        

    return(
        <div>
        <p>Count: {count}</p>
        <button onClick={increment}>
            Count
        </button>
        <button onClick={decrement}>
            count
        </button>
          
        </div>
    );

}
 export default Counter;