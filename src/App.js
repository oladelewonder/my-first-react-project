import logo from './logo.svg';
import './App.css';
import Info from './components/Info.js'
import About from './components/About.js';
import Interests from './components/Interests.js';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
