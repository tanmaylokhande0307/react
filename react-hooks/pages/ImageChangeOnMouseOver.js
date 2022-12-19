import React from 'react';
import ImageToggle from '../src/ImageToggle';

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <h1>hello</h1>
            <ImageToggle primary="/static/speakers/download.png" secondary="/static\speakers\delivery-box.png" alt="" />
            <ImageToggle primary="/static/speakers/images.png" secondary="/static/speakers/man (1).png" alt="" />
        </div>
    )
}

export default ImageChangeOnMouseOver;