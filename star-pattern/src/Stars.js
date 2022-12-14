import React, { useState } from 'react'

const Stars = (props) => {
  


  return (
    <>
        {props.utils.range(1,props.star).map(starId => <div key={starId} className="star" />)}
    </>
  )
}

export default Stars
