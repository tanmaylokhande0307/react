import React from 'react'

const PlayNumbers = (props) => {
  return (
    <div>
     
      <button
        style={{backgroundColor: colors[props.status(props.number)]}}
        key={props.number} 
        onClick={() => props.onClick(props.number,props.status)} 
        className="number">{props.number}
      </button>
    </div>
  )
}

const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};


export default PlayNumbers

