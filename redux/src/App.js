import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import PageNotFound from './Components/PageNotFound';



function App() {
  return (
    // <Router>
    //   <Header></Header>
    //   <Routes>
    //     <Route path="/" element={<Home />}/>
    //     <Route path="/about" element={<About />}/>
    //     <Route path="*" element={<PageNotFound />}/>
    //   </Routes>
    // </Router>

    <div>
      <Home />
    </div>

  );
}

export default App;
