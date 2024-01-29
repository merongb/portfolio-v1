// TypewriterText.js
import React, { useState, useEffect } from 'react';

const TypewriterText = ({ texts }) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = texts[index % texts.length];
    const updateText = () => {
      if (!isDeleting && currentText.length < currentWord.length) {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else if (isDeleting) {
        setCurrentText(current => current.substring(0, current.length - 1));
      }
    };

    if (!isDeleting && currentText === currentWord) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setIndex(index => (index + 1) % texts.length);
    }

    const timer = setInterval(updateText, isDeleting ? 100 : 200);

    return () => clearInterval(timer);
  }, [currentText, isDeleting, index, texts]);
console.log("hello");
  return <span>{currentText}</span>;
};

export default TypewriterText;
