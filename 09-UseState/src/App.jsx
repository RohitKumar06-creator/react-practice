import React, { useState } from 'react'

const App = () => {
    // let a = 20; 

    // const [a, setA] = useState(20);

    // function changeA() {
    //     console.log(a);
    //     setA(a + 1);
    //     console.log(a);
    // }

    const [num, setNum] = useState(0);

    function increase() {
        setNum(num + 1);
    }

    function decrease() {
        setNum(num - 1);
    }
    function jumpBy5() {
        setNum(num + 5);
    }
    return (
        <div>
            <h1>{num}</h1>
            {/* <h1>Value of num is: {a}</h1>
            <button onClick={changeA}>Click me!</button> */}

            {/* <p>The value of 'a' is: {a}</p> */}
            {/* <button onClick={changeA}>Click me!</button> */}

            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={jumpBy5}>Jump by 5</button>

        </div>
    )
}

export default App
