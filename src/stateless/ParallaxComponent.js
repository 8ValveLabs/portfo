import React from 'react';


function ParallaxComponent(props) {
    return(
        <div className='para-component'>
            <p>{props.children}</p>
        </div>
    )
}

export default ParallaxComponent;