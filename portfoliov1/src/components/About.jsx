import React, { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('Tech Stack');

  function SkillItem({ name, level, imageUrl }) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
<div 
  className="skill relative inline-flex items-center p-6 m-4 border border-yellow-400 rounded cursor-pointer transition-all duration-700 hover:bg-yellow-600"
  onMouseEnter={() => setIsHovered(true)} 
  onMouseLeave={() => setIsHovered(false)}
>
  <img src={imageUrl} alt={name} className={`w-8 h-8 mr-2 transition-transform duration-300 ease-in-out ${isHovered ? 'scale-125' : ''
  }`} />
  <div className={`flex flex-col items-center text-white ` }>
    <span 
      className={`transition-all duration-300  transform ${isHovered ? 'translate-y-[-10px]' : 'translate-y-[10px]'}`}
    >
      {name}
    </span>
    <span 
      className={`text-sm transition-all duration-300 transform ${isHovered ? 'translate-y-[-10px] opacity-100' : 'opacity-0'} `}
      style={{visibility: isHovered ? 'visible' : 'hidden'}}
    >
      {level}
    </span>
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
        { name: 'Firebase', level: 'Database', imageUrl: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg' },
        { name: 'Jest', level: 'Testing', imageUrl: 'https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png' },

        
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div id="about">
    <div class="flex justify-center items-center h-screen">
    <div className="w-11/12 xl:w-9/12 text-center p-8 items-center">
      <h2 className='aboutheader text-4xl text-white mb-2 text-center '>Skills</h2>
  
      <div className='tabs text-2xl'>
      <button 
        className={`tab-button focus:outline-none py-2 px-4 mr-2 transition-colors duration-300 ${activeTab === 'Tech Stack' ? 'border-b-2 border-yellow-400 text-white' : 'text-gray-400'} hover:text-yellow-400`}
        onClick={() => handleTabClick('Tech Stack')}
      >
        Tech Stack
      </button>
      <button 
        className={`tab-button focus:outline-none py-5 px-4 transition-colors duration-300 ${activeTab === 'Tools' ? 'border-b-2 border-yellow-400 text-white' : 'text-gray-400'} hover:text-yellow-400`}
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
    </div>
  );
}
