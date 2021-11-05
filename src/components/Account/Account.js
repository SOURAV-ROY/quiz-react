import React from 'react';
import sou from './Account.module.css';
import {Link} from 'react-router-dom';

function Account() {
    return (
        <div className={sou.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            {/*<span className="material-icons-outlined" title="Logout"> logout </span>*/}
        </div>
    );
}

export default Account;
