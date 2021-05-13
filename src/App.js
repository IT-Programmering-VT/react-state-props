import Home from "./components/Home";
import NameTag from "./components/NameTag";
import ReusableButton from "./components/ReusableButton";
import ButtonClass from "./components/second-part/ButtonClass";
import BrokenButton from "./components/second-part/BrokenButton";
import ClickerClass from "./components/second-part/ClickerClass";
import ClickerHooks from "./components/second-part/ClickerHooks";
import AgeCount from "./components/second-part/AgeCount";
// import components so we can render them in App.js

import "./App.css";

function App() {
  return (
    <div className="container">
      <AgeCount />
    </div>
  );
}

export default App;
