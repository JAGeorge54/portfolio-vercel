import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar';
import Home from './pages/home/home';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/contact';
import ComingSoon from './pages/ComingSoon';
import NotFound from './pages/notFound';
import { Route, Routes} from "react-router-dom";


function App() {

  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/comingSoon" element={<ComingSoon />}/>
      <Route path="/*" element={<NotFound />}/>
      
    </Routes>
    
    </>
  )
}

export default App
