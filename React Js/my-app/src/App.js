import "./App.css";
import HoverCounter from "./components/hover-counter/HoverCounter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contacts } from "./components/contacts/Contacts";
import Parent from "./components/parent/Parent";
import Users1 from "./users/Users1";
import NavbarComp from "./components/navbar/Navbar";
import User from "./users/User";
import Reduc from './components/React-Reduc'
function App(props) {
  return (
    <div className='App'>
      <Router>
        <NavbarComp />
        <Routes>
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/users' element={<Users1 />} />
          <Route path='/users/:id' element={<User />} />
          <Route path='/redu' element={<Reduc {...props}/>} />
          <Route path='/' element={<Parent />} />
          <Route
            path='/hover'
            element={<HoverCounter createdBy='Zubair Qureshi' />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
