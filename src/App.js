import './App.css';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinacije from './pages/Destinacije';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='destinacije' element={<Destinacije/>} />   
      </Routes>
      <Footer></Footer>
    </Router>
  );
}
export default App;
