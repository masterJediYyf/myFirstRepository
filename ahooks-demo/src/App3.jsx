import { useKeyPress } from 'ahooks';
import React, { useEffect, useState } from 'react';
var print = console.log.bind(console);

const App = () => {
    const [counter, setCounter] = useState(0);
    useKeyPress('uparrow', () => {
        setCounter((s) => s + 1);
    })
    useKeyPress(40, () => {
        setCounter((s) => s - 1);
    })

    // useEffect(() => {
    //     document.addEventListener('keyup',(event) => {
    //         // print(event);
    //         if(event.keyCode == 40) {
    //             setCounter((s) => s - 1);
    //         }
    //         if(event.keyCode == 38) {
    //             setCounter((s) => s + 1);
    //         }
    //     })
    // },[counter])

    return (
        <>
            <p>Try pressing the following</p>
            <div>1. Press ArrowUp by key to increase</div>
            <div>2. Press ArrowDown by keyCode to decrease</div>
            <div>
                counter: <span style={{color:'#f00'}}>{counter}</span>
            </div>
        </>
    )
}

export default App;