import React from 'react';
import sou from '../assets/css/Layout.module.css';
import Nav from "../Nav/Nav";

function Layout({children}) {
    return (
        <>
            <Nav/>
            <main className={sou.main}>
                <div className={sou.container}>
                    {children}
                </div>
            </main>
        </>
    );
}

export default Layout;
