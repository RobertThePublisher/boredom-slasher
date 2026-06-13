// Import Google Font (Poppins) dynamically for the console styling
const fontStyle = "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800;400&display=swap');";
const styleElement = document.createElement('style');
styleElement.textContent = fontStyle;
document.head.appendChild(styleElement);

// Define the linear-gradient rainbow text style with the Google Font
const rainbowTitleStyle = [
    'font-family: "Poppins", sans-serif;',
    'font-size: 32px;',
    'font-weight: 800;',
    'background: linear-gradient(to right, #ff0055, #00ffcc, #9900ff, #ffcc00);',
    '-webkit-background-clip: text;',
    '-webkit-text-fill-color: transparent;',
    'padding: 10px 0;',
    'text-shadow: 1px 1px 2px rgba(0,0,0,0.1);'
].join('');

// Define the description style
const descriptionStyle = [
    'font-family: "Poppins", sans-serif;',
    'font-size: 14px;',
    'color: #666;',
    'font-style: italic;',
    'padding-bottom: 10px;'
].join('');

// Send the stylized messages to the browser console
console.log('%cBoredom Eraser - Cure Your Boredom', rainbowTitleStyle);
console.log('%cThis is a massive playground of interesting ideas', descriptionStyle);
