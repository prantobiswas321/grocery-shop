
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Checkout from './components/checkout/Checkout';
import Register from './components/Register/Register';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Checkout />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
