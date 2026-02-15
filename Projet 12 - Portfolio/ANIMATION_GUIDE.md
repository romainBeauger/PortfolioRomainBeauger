# Guide d'Animation du Texte "Bienvenue"

## 🎯 Deux Options Disponibles

### Option 1 : Framer Motion (Recommandé) ✨

**Avantages :**
- Animation fluide et professionnelle
- Facile à personnaliser
- Meilleure performance
- Bibliothèque très utilisée dans React

**Installation :**
```bash
npm install framer-motion
```

**Utilisation dans Hero.jsx :**
```jsx
import AnimatedText from './AnimatedText';

// Remplacer le <h1> par :
<AnimatedText
  text="Bienvenue."
  className="text-4xl md:text-6xl lg:text-7xl font-thin mt-4 mb-4"
/>
```

**Personnalisation :**
Dans `AnimatedText.jsx`, vous pouvez modifier :
- `staggerChildren: 0.05` → Délai entre chaque lettre (0.05s = 50ms)
- `y: 20` → Distance de déplacement vertical (en pixels)
- `damping: 12` → Rebond de l'animation (plus bas = plus de rebond)
- `stiffness: 100` → Vitesse de l'animation (plus haut = plus rapide)

---

### Option 2 : CSS Pure (Sans dépendance) 🎨

**Avantages :**
- Aucune dépendance à installer
- Léger et rapide
- Facile à comprendre

**Utilisation dans Hero.jsx :**
```jsx
import AnimatedTextCSS from './AnimatedTextCSS';

// Remplacer le <h1> par :
<AnimatedTextCSS
  text="Bienvenue."
  className="text-4xl md:text-6xl lg:text-7xl font-thin mt-4 mb-4"
/>
```

**Personnalisation :**
Dans `AnimatedTextCSS.css`, changez l'animation utilisée :

```css
/* Animation actuelle (bounce avec scale) */
animation: letterAppear 0.6s ease-out forwards;

/* Pour un effet de slide latéral */
animation: letterSlide 0.6s ease-out forwards;

/* Pour un effet de bounce simple */
animation: letterBounce 0.6s ease-out forwards;
```

Modifiez les paramètres :
- `0.6s` → Durée de l'animation par lettre
- `delay = index * 0.05` → Délai entre chaque lettre (dans AnimatedTextCSS.jsx)

---

## 🎬 Autres Effets Disponibles

### Effet Typing (Machine à écrire)

Ajoutez ce CSS à `AnimatedTextCSS.css` :

```css
@keyframes typing {
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: auto;
  }
}

.animated-letter {
  animation: typing 0.1s ease forwards;
}
```

### Effet Glow (Lueur)

```css
@keyframes letterGlow {
  0% {
    opacity: 0;
    text-shadow: 0 0 0px rgba(255, 255, 255, 0);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
  100% {
    opacity: 1;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }
}
```

### Effet 3D Rotation

```css
@keyframes letter3D {
  from {
    opacity: 0;
    transform: perspective(500px) rotateX(90deg);
  }
  to {
    opacity: 1;
    transform: perspective(500px) rotateX(0deg);
  }
}
```

---

## 📝 Comment Choisir ?

**Choisissez Framer Motion si :**
- Vous voulez la meilleure qualité d'animation
- Vous prévoyez d'ajouter plus d'animations sur le site
- Vous êtes à l'aise avec l'ajout de dépendances

**Choisissez CSS Pure si :**
- Vous voulez garder le projet léger
- Vous voulez un contrôle total sur le CSS
- Vous ne prévoyez pas beaucoup d'autres animations

---

## 🔧 Dépannage

### L'animation ne se joue pas
- Vérifiez que le composant est bien importé
- Vérifiez la console pour les erreurs
- Assurez-vous que le CSS est bien chargé (pour la version CSS)

### L'animation est trop rapide/lente
- **Framer Motion** : Modifiez `staggerChildren` dans `AnimatedText.jsx`
- **CSS** : Modifiez `index * 0.05` dans `AnimatedTextCSS.jsx` et la durée `0.6s` dans le CSS

### L'animation se répète
- L'animation ne se joue qu'une fois au chargement du composant
- Pour la rejouer, vous devrez refresh la page ou utiliser un state React
