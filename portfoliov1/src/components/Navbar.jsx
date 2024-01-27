import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Navbar() {


    return (
        <nav className="navbar">
            <div className="brand-name fadein-bot">merongb();</div>
            <div className="navbar-content">
                <NavLink to='/'  className='nav-link fadein-bot fadein-1'>Home</NavLink>
                <NavLink to='/about' className='nav-link fadein-bot fadein-2'>About</NavLink>
                <NavLink to='/portfolio' className='nav-link fadein-bot fadein-3'>Portfolio</NavLink>
                
            </div>
            <a href="https://github.com/merongb" target="_blank" rel="noopener noreferrer" className="githubimg-container">
                <img className='githubimg fadein-bot' src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png" alt="GitHub" />
            </a>
        </nav>
    )
}
