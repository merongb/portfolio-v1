import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Navbar() {
    const handleClick = (event) => {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });


        event.currentTarget.classList.add('active');
    };


    

    return (
        <nav className="navbar">
            <div className="brand-name fadein-bot">merongb();</div>
            <div className="navbar-content">
            <a href='#home' className='nav-link fadein-bot fadein-1 ' onClick={handleClick}>Home</a>
            <a href='#portfolio' className='nav-link fadein-bot fadein-3' onClick={handleClick}>Portfolio</a>
                <a href='#about' className='nav-link fadein-bot fadein-2' onClick={handleClick}>About</a>
                
                
            </div>
            <a href="https://github.com/merongb" target="_blank" rel="noopener noreferrer" className="githubimg-container">
                <GitHubIcon className='githubimg fadein-bot' />
            </a>
        </nav>
    )
}
