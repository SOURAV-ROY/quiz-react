import React from 'react';
import Account from "../Account/Account";
import sou from './Nav.module.css';
import logo from '../assets/images/logo-bg.png';

function Nav(props) {
    return (
        <nav className={sou.nav}>
            <ul>
                <li>
                    <a href="index.html" className={sou.brand}>
                        <img src={logo} alt="SOURAV"/>
                        <h3>Learn with SOURAV</h3>
                    </a>
                </li>
            </ul>
            <Account/>
        </nav>
    );
}

export default Nav;
