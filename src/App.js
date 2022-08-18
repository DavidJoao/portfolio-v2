
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navigation/>
      <Home />
      <Projects/>
      <Education />
      <Contact />
    </div>
  );
}

export default App;
