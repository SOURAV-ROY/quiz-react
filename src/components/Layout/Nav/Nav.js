import React from 'react';
import Account from "../../Account/Account";
import logo from '../../assets/images/logo-bg.png';
import sou from './Nav.module.css';
import {Link} from 'react-router-dom';

function Nav(props) {
    return (
        <nav className={sou.nav}>
            <ul>
                <li>
                    <Link to="/" className={sou.brand}>
                        <img src={logo} alt="SOURAV"/>
                        <h3>Learn with SOURAV</h3>
                    </Link>
                </li>
            </ul>
            <Account/>
        </nav>
    );
}

export default Nav;
