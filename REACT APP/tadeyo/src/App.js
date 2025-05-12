import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Register from './Register';
import Update from './Update'
import Delete from './Delete';
import Read from './Read';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/register' element={<Register />} />
          <Route path='/update' element={<Update />} />
          <Route path='/delete' element={<Delete />} />
          <Route path='/read' element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
