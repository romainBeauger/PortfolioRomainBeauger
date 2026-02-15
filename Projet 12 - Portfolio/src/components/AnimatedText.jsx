import { motion } from 'framer-motion';

function AnimatedText({ text, className = "" }) {
  // Découpe le texte en lettres individuelles
  const letters = Array.from(text);

  // Variants pour le conteneur
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Délai entre chaque lettre (augmenté)
        delayChildren: 0.2, // Délai avant de commencer
      },
    },
  };

  // Variants pour chaque lettre - Effet prononcé
  const child = {
    hidden: {
      opacity: 0,
      y: 50, // Vient de plus bas
      scale: 0.3, // Commence très petit
      rotateX: -90, // Rotation 3D
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5, // Animation plus lente pour bien voir
        ease: [0.6, 0.01, 0.05, 0.95], // Courbe d'animation custom
      },
    },
  };

  return (
    <motion.h1
      className={className}
      style={{ perspective: "1000px" }} // Pour l'effet 3D
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }} // Important pour les transformations
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default AnimatedText;
