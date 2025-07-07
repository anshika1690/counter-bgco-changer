import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./components/Colorful";

function Main() {
    let [count, setCount] = useState(0);
    function incrementNumber() {
        setCount(count + 1);
    }
    function decrementNumber() {
        setCount(count - 1);
    }
    return (
        <>
            <div className="counter">
                <h1>Counter is {count}</h1>
                <button onClick={incrementNumber}>Increment</button>
                <button onClick={decrementNumber}>Decrement</button>

            </div>
            <Colorful name={count} />
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Main />);