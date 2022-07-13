import React from 'react';
import '../index.css';
function NavItem(props) {
    const href = props.href;
    const text = props.text;
    return (
        <a href={props.href}>{props.text}</a>
    )
}

export default NavItem;