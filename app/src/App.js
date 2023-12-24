import React from "react";
import Header from "./components/Header";
// import Profilepic from "./components/Profilepic";
import Card from "./components/Card";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Profilepic /> */}
      <Card />
    </div>
  );
}

export default App;