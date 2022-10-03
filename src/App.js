import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import TextArea from "./components/clipboard/clipboard";
import CreateRobot from "./components/games/robot/createRobot";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/" className="back_home">Back home</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/robot" element={<CreateRobot />} />
          <Route path="/clipboard" element={<TextArea />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
