import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="container">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}
