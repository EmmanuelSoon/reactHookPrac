import React, { useState, useEffect } from "react";


function UseEffect(){
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

     //by default, useEffect will run the function inside whenever
     //the component renders. so when you press the button, it rerenders 
     //and this useEffect will run. 
    useEffect(() => {
        console.log('useEffect running!');
    })

    //useEffect can also take in another parameter that hold an array of values
    //that whenever these values change, the function inside the useEffect will run
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(data => setItems(data))
    }, [resourceType])

    //So if we want to do like in class components where you have componentdidmount
    //what you can do in a functional component is to give useEffect an empty array 
    useEffect(() => {
        console.log('on mount');
    }, [])

    // when the component mounts, it will add the eventListener to the window. so the 
    // number on the screen will dynamically changes as we change the window size 
    const handleResize = () =>{
        setWindowWidth(window.innerWidth);
    }

    //by adding a return function, this acts like an unmount, so when our component
    //unmounts, react will remove the eventlistener from our app and this will be 
    // better on performance especially if the application becomes really huge. 
    useEffect(() =>{
        window.addEventListener('resize', handleResize)

        // this is like a clean up code. so useEffect will run this code first before 
        //any other code in the function. as well when it unmounts. 
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return(

        <div>
            {windowWidth}
        </div>


        // example 1 
        // <>
        //     <div>
        //         <button onClick={() => setResourceType('posts')}>Posts</button>
        //         <button onClick={() => setResourceType('users')}>Users</button>
        //         <button onClick={() => setResourceType('comments')}>Comments</button>

        //         <h1>{resourceType}</h1>
        //         {items.map(item => {
        //             return <pre>{JSON.stringify(item)}</pre>
        //         })}
        //     </div>
        // </>
    )

}



export default UseEffect;