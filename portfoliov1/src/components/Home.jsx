import React, { useState, useEffect } from 'react';

export default function Home() {
    const headings = ['Full-stack Engineer', 'Tech Enthusiast', 'Web Developer'];
    const [currentText, setCurrentText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);



    useEffect(() => {
        const currentWord = headings[index % headings.length];

        const updateText = () => {
            if (!isDeleting && currentText.length < currentWord.length) {
                setCurrentText(currentWord.substring(0, currentText.length + 1));
            } 

            else if (isDeleting) {
                setCurrentText(current => current.substring(0, current.length - 1));
            }
        };

        if (!isDeleting && currentText === currentWord) {
            setTimeout(() => setIsDeleting(true), 2000); // 
        } 

        else if (isDeleting && currentText === '') {
            setIsDeleting(false);
            setIndex(index => (index + 1) % headings.length);
        }

        const timer = setInterval(updateText, isDeleting ? 100 : 200);

        return () => clearInterval(timer);
    }, [currentText, isDeleting, index]);

    return (
        <>
        <div className="container">
<main className="main-content">
                <div className="text-content">
                    <p className="intro-text fadein-bot ">Hello I'm</p>
                    <h1 className="main-heading fadein-left">Meron Gebrehiwet</h1>
                    <h2 className="sub-heading typewriter fadein-right">{currentText}</h2>
                    <p className="welcome-message fadein-up">Welcome to My personal website. <span className="wave">👋🏾</span></p>
                </div>
                <div className="image-container fadein-up">
                    <img
                        src="https://media.licdn.com/dms/image/D4E03AQF73k6qWBWPTQ/profile-displayphoto-shrink_800_800/0/1693129158057?e=1711584000&v=beta&t=KpJNOrCPgLfd5Xg2XPYB4Wz1GwnKJhoD1HuN4QZBGrE" 
                        alt="Meron Gebrehiwet"
                        className="profile-image"
                    />
                </div>
            </main>
            </div>
        </>
    );
}
