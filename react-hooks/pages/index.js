import React, { useState } from "react";

const InputElement = () => {
    const [text,setText] = useState("");
    const [history,setHistory] = useState([]);
    return (
    <>    
        <input value={text} onChange={(e) => {
            setText(e.target.value);
            setHistory([...history,e.target.value])
        }} placeholder="Enter some text"/>
        <p>{text}</p>
        <ul>
            {history.map((item) => {
                return <li>{item}</li>
            })}
        </ul>
    </>
    )
}

export default InputElement;
