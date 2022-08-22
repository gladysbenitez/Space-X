import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div data-testid="app" style={{ backgroundColor: "black" }}>
      <NavBar></NavBar>
    </div>
  );
}

export default App;
