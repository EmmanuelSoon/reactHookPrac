import React, { useState } from "react";

function Usestate(){

    //Default UseState always have 2 items returned in the array 
    const [currState, setCurrState] = useState(0); //0 -> initial value.

    // note that useState will run everytime the component renders, 
    // So if there is a complex function in the useState, it will take a 
    // long time to render. so in order let it only render once, use a function 
    // inside the useState
    const [count, setCount] = useState(5);

    const [example, setExample] = useState(()=> {
        console.log("testing useState function")
        return 4; // this state of 4 only is rendered once. 
    })


    //For Objects, the useState would rerender the entire object
    //whenever you update the object with a new state, so in order
    //to keep the old values, and only update those that you 
    //want to update, you have to use ...prevObject
    const [obj, setObj] = useState({name: 'test', theme: 'blue'})

    function updateTheme(colour){
        setObj(prevObj => {
            return {...prevObj, theme: colour};
        })
    }

    // have to do it this way, have an arrow function inside. 
    function decreaseCount() {
        setCount(prevCount => prevCount - 1);
        updateTheme('red');
    }

    // even though 2 functions, will only drop count by 1 
    function decreaseCount2() {
        setCount(count -1);
        setCount(count -1);
    }
    // this will drop count by 2 
    function decreaseCount3() {
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
    }


    function increaseCount() {
        setCount(prevCount => prevCount + 1);
    }


    return(
        <>
            <button onClick={decreaseCount}>-</button>
            <span>{count}</span>
            <button onClick={increaseCount}>+</button>
        </>
    )
}

export default Usestate;