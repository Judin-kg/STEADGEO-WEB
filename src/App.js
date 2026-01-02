import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import SparesPage from './components/SparesPage';
import DepartmentPage from './components/DepartmentPage';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <SparesPage />
      <DepartmentPage />
      <Contact />
    </div>
  );
}

export default App;
