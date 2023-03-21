import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import Nav from './components/Nav';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </div>
  );
}

export default App;
