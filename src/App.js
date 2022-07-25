
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Stadiums from './pages/staduim/Stadiums';
import Location from './pages/location/Location';
import Reservation from './pages/reservation/Reservation';
import { SignUp } from './components/SignUp';
import Login from './components/Login';
import StadiumDetail from './pages/staduim/StadiumDetail';
import ListReservation from './pages/reservation/ListReservation';
import CreateReservation from './pages/reservation/CreateReservation';
function App() {
 
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/stadiums" element={ <Stadiums />} />
        <Route path="/stadiums/:id" element={<StadiumDetail />} />
        <Route path="/locations" element={ <Location />} />
        <Route path="/locations/:id" element={ <Location />} />
        <Route path="/newreservation" element={ <CreateReservation />} />
        <Route path="/reservations" element={ <Reservation />} />
        <Route path="/reservations/:id" element={ <ListReservation />} />
        <Route path="/singup" element={ <SignUp />} />
        <Route path="/login" element={ <Login />} />
      </Routes>
  
  
  );
}

export default App;
