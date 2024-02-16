import './App.css';
import NavigationComponent from '../other/Navigation';
import HomeComponent from '../other/Home';
import FormComponent from '../other/Form';
import TableComponent from '../other/Table';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavigationComponent />

      <div className="container-xxl">

        <Router>
            <Routes>
                  <Route path="/" element={<HomeComponent />} />
                  <Route path="/form" element={<FormComponent />} />
                  <Route path="/table" element={<TableComponent />} />
                  <Route path="**" element={<HomeComponent />} />
            </Routes>
        
        </Router>
      </div>

    </div>
  );
}

export default App;
