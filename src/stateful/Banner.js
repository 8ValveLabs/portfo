import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import NavItem from '../stateless/NavItem';
import {useRef} from 'react';


function Banner(props) {
    
    const navRef = useRef();
    
    const showNav = () => {
        navRef.current.classList.toggle("responsive-nav");
    }


    return (
        <header>
            <h1>Nash Michel</h1>
            <nav ref={navRef}>
                <NavItem href="/" text="Home"></NavItem>
                <NavItem href="/" text="About"></NavItem>
                <NavItem href="/" text="Contact"></NavItem>
                <button 
                    className="nav-button nav-exit-button" 
                    onClick={showNav}
                    >{'\u26D2'}
                </button>
            </nav>
            <button
                className='nav-button'
                onClick={showNav}
                >{'\u2630'}
            </button>
        </header>
    );
}

export default Banner;