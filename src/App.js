import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Swap from './components/Swap/Swap';

function App() {
  return (
    <Router>
            <Routes>
              <Route path={`${process.env.PUBLIC_URL + '/swap-tokens'}`}  element={<Swap />}/>
            </Routes>
    </Router>
  );
}

export default App;
