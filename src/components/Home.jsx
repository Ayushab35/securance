import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import "../css/Home.css"

function Home(){
    return(
        <>
            <NavBar />
        </>
    );
}

function NavBar(){
    const [isConnected, setIsConnected] = useState(true);
    return (
        <header className='navbar'>
            <div className='navbar__title navbar__item'><a href="/">Securance</a></div>
            <div className='navbar__item'><a href="/Policy">Policy</a></div>
            {isConnected && <div className='navbar__item'><a href="/Dashboard">Dashboard</a></div>}
            <div className='navbar__item'><a href="/Login">Login</a></div>
        </header>
    );
}

export default Home;
