import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {

    return (
        <nav className='navbar bg-primary'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>Home</Link>
                <Link className='navbar-brand' to='/projects'>Projets</Link>
                <div className="todos-underline"></div>
            </div>
        </nav>
    )
}

