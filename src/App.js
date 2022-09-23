import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateRobot from "./components/games/robot/createRobot";
import RobotHome from "./components/games/robot/RobotHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RobotHome />} />
          <Route path="/robot" element={<CreateRobot />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
