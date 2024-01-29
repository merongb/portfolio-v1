import React, { useState, useEffect } from 'react';
import TypewriterText from './TypewriterText';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Home() {
    const headings = ['Full-stack Engineer', 'Tech Enthusiast', 'Software Developer'];

    function Links({ name, IconComponent,href }) {
        return (
            <a 
              href={href} 
              target="_blank" 
              className=" relative inline-flex items-center p-6 m-4 border border-yellow-400 rounded cursor-pointer transition-all duration-300 hover:bg-yellow-600 fadein-up custom-hover-effect"
            >
              <IconComponent className=" w-8 h-8 mr-2 icon" />
              <div className="flex flex-col items-center text-white text">
                <span>{name}</span>
              </div>
            </a>
          );
          
      }
      

      const links = {
        'Links': [
          { name: 'LinkedIn', IconComponent: LinkedInIcon, href: "https://www.linkedin.com/in/meron-gebrehiwet-314a22194/"},
          { name: 'CV', IconComponent: ArticleIcon },
          { name: 'Github',  IconComponent: GitHubIcon, href:"https://github.com/merongb" },
          
          
        ]}



        return (
            <>
             <section id="home">
            <div className="container flex flex-col">
                <main className="main-content">
                    <div className="text-content">
                        <p className="intro-text fadein-bot ">Hello I'm</p>
                        <h1 className="main-heading fadein-left">Meron Gebrehiwet</h1>
                        <h2 className="sub-heading typewriter fadein-right">
                            <TypewriterText texts={headings} />
                        </h2>
                        <p className="welcome-message fadein-up">Welcome to My personal website <span className="wave">👋🏾</span></p>
                    </div>
                     <div className="image-container fadein-up">
                    <img
                        src="https://media.licdn.com/dms/image/D4E03AQF73k6qWBWPTQ/profile-displayphoto-shrink_800_800/0/1693129158057?e=1711584000&v=beta&t=KpJNOrCPgLfd5Xg2XPYB4Wz1GwnKJhoD1HuN4QZBGrE" 
                        alt="Meron Gebrehiwet"
                        className="profile-image"
                    />
                </div> 
                </main>
                <div className="mylinks">
{links.Links.map((link) => (
  <Links 
    key={link.name} 
    name={link.name} 
    IconComponent={link.IconComponent} 
    href={link.href}
  />
))}
</div> 
            </div>
            </section>
            </>
        );
}
