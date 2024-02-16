import './App.css';
import FormComponent from './components/FormComponent';
import HomeComponent from './components/HomeComponent';
import NavigationComponent from './components/NavigationComponent';
import TableComponent  from './components/TableComponent';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavigationComponent/>
      <div className="container-xxl">

        <Router>
          <Routes>
                <Route path="/" element={<HomeComponent/>}/>
                <Route path="/form" element={<FormComponent/>}/>
                <Route path="/table" element={<TableComponent/>}/>
                <Route path="**" element={<HomeComponent/>}/>
          </Routes>
        </Router>
    </div>
    </div>
  );
}

export default App;
