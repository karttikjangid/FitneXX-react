import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WorkoutProvider } from './context/WorkoutContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Workout from './pages/Workout';
import MealPlanner from './pages/MealPlanner';
import Progress from './pages/Progress';

function App() {
  return (
    <WorkoutProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/meal-planner" element={<MealPlanner />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </WorkoutProvider>
  );
}

export default App;