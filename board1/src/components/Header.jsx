import React from 'react'
import logo from '../logo.svg';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>React Board App</h3>
        </header>
    );
}

export default Header;