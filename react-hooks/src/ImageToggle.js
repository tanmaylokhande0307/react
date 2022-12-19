import React, { useRef } from 'react'

const ImageToggle = ({ primary,secondary }) => {

  const ImageRef = useRef(null);  

  return (
    <div>
      <img onMouseOver={() => {ImageRef.current.src = secondary}} onMouseOut={() => {ImageRef.current.src = primary}} src={primary} ref={ImageRef}/>
    </div>
  )
}

export default ImageToggle
