import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "tailwindcss";
import Header from "./components/Header";
import skill from "./components/skill";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <skill />
      <div>qskddiqd</div>
    </>
  );
}

export default App;
