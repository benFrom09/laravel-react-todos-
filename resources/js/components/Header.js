import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {

    return (
        <header className="app-head">
            <nav className='navbar'>
                <div className='container'>
                    <Link className='navbar-brand' to='/'>Home</Link>
                    <Link className='navbar-brand' to='/projects'>Projets</Link>
                    <Link className='navbar-brand' to='/calendar'>Calendrier</Link>
                    <Link className='navbar-brand' to='/preferences'>Peferences</Link>
                    <Link className='navbar-brand' to='/public'>Public</Link>
                    <div className="todos-underline"></div>
                </div>
            </nav>
        </header>
    )
}

