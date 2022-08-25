
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <div>
            <Navigation/>
      </div>
        <Home />
        <Projects />
        <Education />
        <Contact />
    </div>
  );
}

export default App;
