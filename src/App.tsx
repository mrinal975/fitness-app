import { useState } from "react";
import "./App.css";
import Navbar from "./scenes/navbar";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="app">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
