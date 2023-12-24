import React from "react";
import Header from "./components/Header";
// import Profilepic from "./components/Profilepic";
// import Card from "./components/Card";
import ProfileCardContainer from "./components/ProfileCardContainer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Profilepic /> */}
      <ProfileCardContainer />
      {/* <Card /> */}
    </div>
  );
}

export default App;