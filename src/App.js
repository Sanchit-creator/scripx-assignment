import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path='/tv-shows/:params' element={<Home />} />
          <Route path='/tv-shows/details/:params' element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
