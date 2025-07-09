import React,{ useState,useEffect } from "react";
function Colorful({name}) {
    const [color, setColor] = useState("black");
    useEffect(() => {
        console.log("useeffect");
        document.body.style.backgroundColor = color;
    },[color]);
    console.log("render");
    return ( 
        <div className="div">
            <h1 style={{ color: "white" }}>Background Color Changer</h1>
            <div className="but">
                <button onClick={() => setColor("red")} style={{ backgroundColor: "red" }}>Red</button>
                <button onClick={() => setColor("orange")} style={{ backgroundColor: "orange" }}>Orange</button>
                <button onClick={() => setColor("blue")} style={{ backgroundColor: "blue" }}>Blue</button>
                <button onClick={() => setColor("green")} style={{ backgroundColor: "green" }}>Green</button>
                <button onClick={() => setColor("purple")} style={{ backgroundColor: "purple" }}>Purple</button>
            </div>
        </div>
    )
}
export default React.memo(Colorful);