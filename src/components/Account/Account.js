import React from 'react';
import sou from '../assets/css/Account.module.css';

function Account(props) {
    return (
        <div className={sou.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
            <a href="signup.html">Signup</a>
            {/*// <!-- <span class="material-icons-outlined" title="Logout"> logout </span> -->*/}
        </div>
    );
}

export default Account;
