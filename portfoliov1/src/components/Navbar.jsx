import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to='/' className='nav-link'>
                Home
            </Link>
            <Link to='/about' className='nav-link'>
                About
            </Link>
            <Link to='/portfolio' className='nav-link'>
                Portfolio
            </Link>
            <a href="https://github.com/merongb" target="_blank" rel="noopener noreferrer">
                <img className='githubimg' src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png" alt="GitHub" />
            </a>
        </nav>
    );
}
