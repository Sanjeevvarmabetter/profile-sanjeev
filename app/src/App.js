import React from "react";
import Header from "./components/Header";
import DarkModeToggleComponent from "./components/DarkModeToggle";
// import Profilepic from "./components/Profilepic";
// import Card from "./components/Card";

import ToggleSwitch from "./components/ToggleSwitch";
import ProfileCardContainer from "./components/ProfileCardContainer";
import './App.css';

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className="App">
      <div className={isDarkMode ? 'dark-mode':'light-mode'}></div>
      <DarkModeToggleComponent isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Header />
      {/* <Profilepic /> */}
      <ProfileCardContainer />
      {/* <Card /> */}
      <ToggleSwitch />
      </div>
  
  );
}

export default App;