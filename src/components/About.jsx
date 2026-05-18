import React, { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('Tech Stack');

  function SkillItem({ name, subtitle, imageUrl }) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
<div 
  className="skill relative inline-flex items-center p-6 m-4 border border-yellow-400 rounded cursor-pointer transition-all duration-700 hover:bg-yellow-600 fadein-up"
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
      {subtitle}
    </span>
  </div>
</div>



    );
  }
  
  const skills = {
    'Tech Stack': [
      { name: 'Golang', subtitle: 'Concurrent systems & services', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
      { name: 'Java', subtitle: 'Enterprise applications', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'ReactJS', subtitle: 'Frontend library', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'SQL', subtitle: 'Relational databases', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Python', subtitle: 'Scripting & automation', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Typescript', subtitle: 'Typed JavaScript', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Javascript', subtitle: 'Language for web applications', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },

    ],
    'Tools': [
        { name: 'Docker', subtitle: 'Containerization', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', subtitle: 'Container orchestration', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Git', subtitle: 'Version control', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', subtitle: 'Code hosting', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'PostgreSQL', subtitle: 'Relational DB', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', subtitle: 'NoSQL DB', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },

        
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div id="about">
        <section>
            <h3 className='aboutheader text-4xl text-white mb-2 text-center fadein-bot'>About Me</h3>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed mx-auto my-9 px-4 max-w-prose italic text-yellow-200">Software Engineer experienced in modernising large-scale financial systems. I build and deliver internal platforms that improve engineering productivity and operational efficiency. Experienced across backend, frontend, and platform tooling with a strong focus on automation, performance optimisation, and measurable impact. Passionate about building scalable systems, reducing manual processes, and delivering practical solutions that create real business value.</p>
        </section>
    <section class="skillss flex justify-center items-center h-screen ">
    <div className="w-11/12 xl:w-9/12 text-center p-8 items-center">
      <h2 className='aboutheader text-4xl text-white mb-2 text-center fadein-bot'>Skills</h2>
  
      <div className='tabs text-2xl'>
      <button 
        className={`tab-button focus:outline-none py-2 px-4 mr-2 transition-colors duration-300 ${activeTab === 'Tech Stack' ? 'border-b-2 border-yellow-400 text-white' : 'text-gray-400'} hover:text-yellow-400 fadein-left`}
        onClick={() => handleTabClick('Tech Stack')}
      >
        Tech Stack
      </button>
      <button 
        className={`tab-button focus:outline-none py-5 px-4 transition-colors duration-300 ${activeTab === 'Tools' ? 'border-b-2 border-yellow-400 text-white' : 'text-gray-400'} hover:text-yellow-400 fadein-right`}
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
            subtitle={skill.subtitle} 
            imageUrl={skill.imageUrl} 
          />
        ))}
      </div>
    </div>
    </section>

    </div>
  );
}
