import './App.css';
import Navbar from './layouts/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import AboutUs from './sections/AboutUs.jsx';
import Courses from './sections/Courses.jsx';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Courses />
    </main>
  );
}

export default App;
