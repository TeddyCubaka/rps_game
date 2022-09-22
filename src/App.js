import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import RobotHome from './components/games/robot/RobotHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RobotHome />} />
        <Route path='/robot' element={<RobotHome />} />
      </Routes>
    </Router>
    );
}

export default App;
