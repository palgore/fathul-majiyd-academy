import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx';
import About from './pages/About';
import CBT from './pages/CBT';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Admissions from './pages/Admissions';

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/cbt" element={<CBT />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;
