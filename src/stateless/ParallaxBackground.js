import React from 'react';

function ParallaxBackground(props) {
    const pid = props.pid
    return(
        <div className={'parallax'+pid}>
            {props.children}
        </div>
    );
}

export default ParallaxBackground;