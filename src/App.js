
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div>
      <Navigation/>
      <Home />
      <Projects/>
      <Education />
    </div>
  );
}

export default App;
