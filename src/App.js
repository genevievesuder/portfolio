import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import Nav from './components/Nav';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Links from './components/Links';
import About from './components/About';
import resume from './resume.pdf';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/resume" element={<Resume resume={resume}/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
      <Links />
      </div>
  );
}

export default App;
