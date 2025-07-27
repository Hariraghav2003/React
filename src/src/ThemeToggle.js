import React, { useState, useEffect } from 'react';
import './Theme.css'; // Adjust the path if necessary

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // Apply the theme to the body 
    document.body.className = theme;

    // Clean up any previous theme when the effect runs again
    return () => {
      document.body.className = '';
    };
  }, [theme]); // Dependency array to run this effect whenever 'theme' changes

  return (
    <div>
      <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
