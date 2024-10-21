import React, { useState, useEffect } from 'react';
import TypewriterText from './TypewriterText';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FormatItalic } from '@mui/icons-material';

const Footer = () => {
    return (
      <Box sx={{  p: 6 }} component="footer">
        <Typography sx={{color:'#F1C40F',fontSize:"20px", fontWeight:"100" }} variant="h6" align="center" gutterBottom>
          Meron.g@outlook.com
        </Typography>
      </Box>
    );
  };

export default function Home() {
    const headings = ['Full-stack Developer', 'Tech Enthusiast', 'Software Engineer'];

    function Links({ name, IconComponent, href }) {
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
          { name: 'CV', IconComponent: ArticleIcon, href:"https://meroncvs.tiiny.site/" },
          { name: 'Github',  IconComponent: GitHubIcon, href:"https://github.com/merongb" },
          
          
        ]}



        return (
            <>
             <section id="home">
            <div className="container flex flex-col">
                <main className="main-content">
                    <div className="text-content">
                        <p className="intro-text  ">Hello I'm</p>
                        <h1 className="main-heading fadein-left">Meron Gebrehiwet</h1>
                        <h2 className="sub-heading typewriter fadein-right">
                            <TypewriterText texts={headings} />
                        </h2>
                        <p className="welcome-message fadein-up">Welcome to my personal website <span className="wave">👋🏾</span></p>
                    </div>
                     <div className="image-container fadein-up">
                    <img
                        src="./profilepic.JPG" 
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
</div> <Footer/>
            </div>
            </section>
            
            </>
        );
}
