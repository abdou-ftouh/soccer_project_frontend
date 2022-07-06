
import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import Stadium from './pages/staduim/Stadium';

function App() {
  return (
      <BrowserRouter>
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stadiums" element={<List />} />
        <Route path="/stadiums/:id" element={<Stadium />} />
      </Routes>
      </BrowserRouter>
  
  );
}

export default App;
