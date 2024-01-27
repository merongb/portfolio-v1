// About.js
import React, { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('Tech Stack');

  function SkillItem({ name, level, imageUrl }) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div 
        className="skill" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={imageUrl} alt={name} className="skill-image" />
        <div className="skill-text">
          <span>{name}</span>
          {isHovered && <span className="skill-level">{level}</span>}
        </div>
      </div>
    );
  }

  const skills = {
    'Tech Stack': [
      { name: 'Javascript', level: 'Advanced', imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png' },
      { name: 'HTML 5', level: 'Advanced', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png' },
      { name: 'CSS 3', level: 'Advanced', imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
      { name: 'NodeJS', level: 'Advanced', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png' },
      { name: 'ReactJS ', level: 'Advanced', imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
      { name: 'SQL', level: 'Intermediate', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
      { name: 'Python', level: 'Beginner', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' },
      { name: 'MongoDB', level: 'Intermediate', imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png' },
      
    ],
    'Tools': [
        { name: 'Git', level: 'Version Control', imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
        { name: 'GitHub', level: 'Actions/Hosting', imageUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
        { name: 'NPM', level: 'Package Manager', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png' },
        { name: 'PostgreSQL', level: 'Database', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png' },
        { name: 'Firebase', level: 'Database', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1280px-Firebase_Logo.svg.png' },

 
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className='my-tailwind-scope'>
    <div className="about-container">
      <h2 className='aboutheader text-3xl'>About Me</h2>
      <p className='aboutinfo'>Hi everyone! My name is Meron Gebrehiwet. I am a Full-Stack Developer from London. I am currently looking for a role as a Full time developer in either Front or Back end. I enjoy making applications and this website showcases some of the projects I have built.</p>
      <div className='tabs'>
      <button 
        className={`tab-button ${activeTab === 'Tech Stack' ? 'active' : ''}`} 
        onClick={() => handleTabClick('Tech Stack')}
      >
        Tech Stack
      </button>
      <button 
        className={`tab-button ${activeTab === 'Tools' ? 'active' : ''}`} 
        onClick={() => handleTabClick('Tools')}
      >
        Tools
      </button>
    </div>
      <div className="skills">
        {skills[activeTab].map((skill) => (
          <SkillItem 
            key={skill.name} 
            name={skill.name} 
            level={skill.level} 
            imageUrl={skill.imageUrl} 
          />
        ))}
      </div>
    </div>
    </div>
  );
}


    
