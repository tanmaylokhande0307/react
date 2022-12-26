import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import PageNotFound from './Components/PageNotFound';
import Courses from './Components/Courses';



function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>



  );
}

export default App;
