import { useEffect, useRef } from 'react';
import './AnimatedTextCSS.css';

function AnimatedTextCSS({ text, className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Divise le texte en lettres
      const letters = text.split('');
      containerRef.current.innerHTML = letters
        .map((letter, index) => {
          const delay = index * 0.05; // 50ms de délai entre chaque lettre
          return `<span class="animated-letter" style="animation-delay: ${delay}s">${
            letter === ' ' ? '&nbsp;' : letter
          }</span>`;
        })
        .join('');
    }
  }, [text]);

  return <h1 ref={containerRef} className={`animated-text ${className}`}></h1>;
}

export default AnimatedTextCSS;
