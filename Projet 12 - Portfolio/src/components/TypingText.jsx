import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function TypingText({ text, className = "", typingSpeed = 100 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Animation de typing
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, typingSpeed]);

  // Curseur clignotant
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <h1 className={className}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {displayedText}
      </motion.span>
      {currentIndex < text.length && (
        <motion.span
          className="inline-block w-[3px] h-[0.9em] bg-current ml-1 align-middle"
          animate={{ opacity: showCursor ? 1 : 0 }}
          transition={{ duration: 0.1 }}
        />
      )}
    </h1>
  );
}

export default TypingText;
