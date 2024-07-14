import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import EditJob from './pages/EditJob';
import AddJob from './pages/AddJob';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<EditJob />} />
        <Route path="/add" element={<AddJob />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
