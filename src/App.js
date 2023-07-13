import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Page/About';
import Contact from './Page/Contact';
import Home from './Page/Home';
import MyCharacter from './Page/Contents/MyCharacter';
import AboutCharacter from './Page/Contents/AboutCharacter';
import Calculator from './Page/Contents/Calculator';

function App() {
  return (
    <>
      <Header />
        <div>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/AboutUs" element={ <About />} />
            <Route path="/ContactUs" element={ <Contact />} />
            <Route path="/MyCharacter" element={ <MyCharacter />} />
            <Route path="/AboutCharacter" element={ <AboutCharacter />} />
            <Route path="/Calculator" element={ <Calculator />} />
          </Routes>
        </div>
      <Footer />
    </>
  );
}

export default App;