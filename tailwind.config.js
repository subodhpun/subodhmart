// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Add this for Vite projects
  ],
  theme: {
    extend: {
      colors:{
        customRed: '#f7444e',
        customBlue:'rgb(0, 44, 62)',
      },
      fontFamily: {
        custonFont: ['"Playfair Display"', 'serif'], // Define the custom font family
      },
      fontSize: {
        'heading': '72px', // Add custom size for heading
      },
      lineHeight: {
        'heading': '70px', // Add line height for headings
      },
      slidePause: {
        '0%': { transform: 'translateX(-100%)' },
        '50%': { transform: 'translateX(0%)' },  // Stop here (pause)
        '100%': { transform: 'translateX(100%)' },
      },
    animation: {
      slidePause: 'slidePause 2s ease-in-out infinite',
    },
    },
  },
  plugins: [],
};
