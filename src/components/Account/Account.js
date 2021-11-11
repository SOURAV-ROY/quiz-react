import React from 'react';
import sou from './Account.module.css';
import {Link} from 'react-router-dom';
import {useAuth} from "../../contexts/AuthContext";

function Account() {
    const {currentUser, logout} = useAuth();
    return (
        <div className={sou.account}>
            <span className="material-icons-outlined" title="Account">account_circle</span>
            {currentUser ? (
                <>
                    <span>{currentUser.displayName}</span>
                    <span
                        className="material-icons-outlined"
                        title="Logout"
                        onClick={logout}
                    > logout </span>
                </>
            ) : (
                <>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    );
}

export default Account;
