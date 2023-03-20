import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
