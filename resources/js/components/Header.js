import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {

    return (
        <nav className='navbar todos-navbar'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>Projets</Link>
                <div className="todos-underline"></div>
            </div>
        </nav>
    )
}

