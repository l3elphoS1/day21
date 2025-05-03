import React, { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Water from "./pages/water";

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const isLogin: boolean = false; // This will control what is rendered

  return (
    <div className={theme}> {/* Dynamically apply the theme class */}
      {isLogin ? (
        <Dashboard />
      ) : (
        <Water theme={theme} toggleTheme={toggleTheme} />
      )}
    </div>
  );
}

export default App;
