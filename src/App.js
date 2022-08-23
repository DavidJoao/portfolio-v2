
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
      <div>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/work' element={ <Projects /> } />
          <Route path='/education' element={ <Education /> }  />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
