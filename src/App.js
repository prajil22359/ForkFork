import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import LoginSignup from './Pages/LoginSignup';
import ExploreRecipe from './Pages/ExploreRecipe'; // Import ExploreRecipe page


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/Explore Recipe" element={<ExploreRecipe/>} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
